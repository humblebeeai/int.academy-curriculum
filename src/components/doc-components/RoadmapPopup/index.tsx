import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './RoadmapPopup.module.css';

const CHAT_ENDPOINT = 'wss://api.kumush.ai/api/v1/chat/98a9d603-ec1d-4d47-a172-ffa4b9f6c390/ws';

type Message = {
  id: string;
  role: 'bot' | 'user';
  content: string;
  streaming?: boolean;
};

const BOT_LABEL = 'Assistant';
const USER_LABEL = 'You';

const splitParagraphs = (content: string) => {
  const trimmed = content.trim();
  if (!trimmed) return [''];

  const blocks = trimmed
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (blocks.length === 1) {
    const sentences = blocks[0]
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

    if (sentences.length >= 3) {
      const chunked: string[] = [];
      for (let i = 0; i < sentences.length; i += 2) {
        chunked.push(sentences.slice(i, i + 2).join(' '));
      }
      return chunked;
    }
  }

  return blocks;
};

const renderWithLineBreaks = (text: string) =>
  text.split('\n').map((line, index) =>
    index === 0 ? line : [<br key={`br-${index}`} />, line]
  );

export default function RoadmapPopup() {
  const iconUrl = useBaseUrl('/img/hbai-logo.png');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const sessionIdRef = useRef<string>(crypto.randomUUID());
  const activeBotIdRef = useRef<string | null>(null);
  const botReplyRef = useRef('');
  const pendingGreetingRef = useRef<string | null>(null);
  const hasOpenedRef = useRef(false);
  const greetingTimerRef = useRef<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const appendMessage = (role: 'bot' | 'user', content: string, streaming = false) => {
    const id = crypto.randomUUID();
    setMessages((prev) => [...prev, { id, role, content, streaming }]);
    return id;
  };

  const updateMessage = (id: string, content: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, content } : msg))
    );
  };

  const finalizeActiveMessage = () => {
    if (!activeBotIdRef.current) return;
    const id = activeBotIdRef.current;
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, streaming: false } : msg))
    );
    activeBotIdRef.current = null;
  };

  const ensureActiveBotMessage = () => {
    if (!activeBotIdRef.current) {
      activeBotIdRef.current = appendMessage('bot', '', true);
    }
  };

  const updateActiveBotMessage = (content: string) => {
    ensureActiveBotMessage();
    if (activeBotIdRef.current) {
      updateMessage(activeBotIdRef.current, content);
    }
  };

  const streamBotMessage = (content: string, delay = 14) => {
    if (greetingTimerRef.current) {
      window.clearTimeout(greetingTimerRef.current);
      greetingTimerRef.current = null;
    }

    const id = appendMessage('bot', '', true);
    activeBotIdRef.current = id;

    let index = 0;
    const tick = () => {
      index += 1;
      updateMessage(id, content.slice(0, index));

      if (index < content.length) {
        greetingTimerRef.current = window.setTimeout(tick, delay);
        return;
      }

      finalizeActiveMessage();
      greetingTimerRef.current = null;
    };

    tick();
  };

  const initWebSocket = () => {
    if (wsRef.current || typeof window === 'undefined') return;

    wsRef.current = new WebSocket(
      `${CHAT_ENDPOINT}?session_id=${sessionIdRef.current}`
    );

    wsRef.current.onopen = () => {
      setIsConnected(true);
    };

    wsRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'greeting') {
          if (hasOpenedRef.current) {
            streamBotMessage(data.content);
          } else {
            pendingGreetingRef.current = data.content;
          }
        }
        if (data.type === 'start') {
          if (greetingTimerRef.current) {
            window.clearTimeout(greetingTimerRef.current);
            greetingTimerRef.current = null;
          }
          botReplyRef.current = '';
          activeBotIdRef.current = appendMessage('bot', '...', true);
        }
        if (data.type === 'done') {
          finalizeActiveMessage();
        }
        if (data.type === 'error') {
          console.error('WS Error:', data.detail);
        }
      } catch {
        botReplyRef.current += event.data;
        updateActiveBotMessage(botReplyRef.current);
      }
    };

    wsRef.current.onerror = () => {
      setIsConnected(false);
    };

    wsRef.current.onclose = () => {
      setIsConnected(false);
      wsRef.current = null;
      if (hasOpenedRef.current) {
        setTimeout(initWebSocket, 3000);
      }
    };
  };

  const sendMessage = (text: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ message: text }));
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    hasOpenedRef.current = true;
    initWebSocket();

    if (pendingGreetingRef.current) {
      streamBotMessage(pendingGreetingRef.current);
      pendingGreetingRef.current = null;
    }
  };

  const submitMessage = () => {
    const text = inputValue.trim();
    if (!text || !isConnected) return;
    appendMessage('user', text);
    sendMessage(text);
    setInputValue('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitMessage();
  };

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={`${styles.toggleButton} ${isOpen ? styles.toggleHidden : ''}`}
        aria-label="Open AI chat"
        onClick={handleOpen}
      >
        <img src={iconUrl} alt="Roadmap Assistant" className={styles.icon} />
      </button>

      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <img src={iconUrl} alt="Roadmap Assistant" className={styles.headerIcon} />
            <span className={styles.headerTitle}>Roadmap Assistant</span>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        <div className={styles.messages}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.messageRow} ${
                message.role === 'user' ? styles.messageRowUser : styles.messageRowBot
              }`}
            >
              <span className={styles.messageLabel}>
                {message.role === 'user' ? USER_LABEL : BOT_LABEL}
              </span>
              <div
                className={`${styles.bubble} ${
                  message.role === 'user' ? styles.bubbleUser : styles.bubbleBot
                }`}
              >
                {message.role === 'bot' ? (
                  message.streaming && message.content.trim() === '...' ? (
                    <span className={styles.typingDots} aria-label="Typing">
                      <span className={styles.typingDot} />
                      <span className={styles.typingDot} />
                      <span className={styles.typingDot} />
                    </span>
                  ) : (
                    splitParagraphs(message.content).map((paragraph, index) => (
                      <p className={styles.paragraph} key={`${message.id}-p-${index}`}>
                        {renderWithLineBreaks(paragraph)}
                      </p>
                    ))
                  )
                ) : (
                  <span>{renderWithLineBreaks(message.content)}</span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className={styles.inputArea} onSubmit={handleSubmit}>
          <textarea
            className={styles.input}
            placeholder="Ask about the roadmap"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            rows={1}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                submitMessage();
              }
            }}
          />
          <button
            type="submit"
            className={styles.sendButton}
            disabled={!isConnected || !inputValue.trim()}
            aria-label="Send message"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={styles.sendIcon}
            >
              <path
                d="M12 4l6 12-6-4-6 4 6-12z"
                fill="currentColor"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
