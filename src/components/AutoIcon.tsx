import {
    CheckCircle2, XCircle, MapPin, Library, Rocket, Lightbulb,
    Target, School, Settings, FileText, Zap, BookOpen, BrainCircuit,
    Triangle, Ruler, BarChart3, Code2, GraduationCap, Sparkles, Laptop,
    Eye, MessageSquare, Wrench, Calculator, Terminal, Handshake, Construction,
    RefreshCw, Globe, DollarSign, Wallet, Scroll, Timer, HelpCircle,
    LayoutGrid, Users, Award, Briefcase, Calendar, Image
} from 'lucide-react';
import { EMOJI_COMPONENT_MAP, IconStyle } from '../utils/emojiMap';
import React from 'react';

// Reconstruct the full object with components for Runtime
const ICON_LOOKUP: Record<string, any> = {
    CheckCircle2, XCircle, HelpCircle, MapPin, Globe, Library, BookOpen,
    GraduationCap, BrainCircuit, School, Scroll, Rocket, Zap, Lightbulb,
    Target, Construction, RefreshCw, Sparkles, Handshake, Laptop, Terminal,
    Settings, Wrench, FileText, Code2, Eye, MessageSquare, Image,
    Triangle, Ruler, Calculator, BarChart3, DollarSign, Wallet, Timer,
    Calendar, Users, Award, Briefcase
};

// Map style mapping manually or infer? Let's keep the style map explicit for now or merge it.
// To keep it simple and safe, we'll redefine the styles here as runtime config 
// but use the keys from the shared map to ensure coverage consistency is checked manually.

const STYLE_MAP: Record<string, IconStyle> = {
    '✅': 'success', '❌': 'danger', '⚠️': 'warning',
    '📍': 'primary', '🗺️': 'primary', '🌍': 'none',
    '📚': 'none', '📖': 'none', '🎓': 'none', '🧠': 'none',
    '🏫': 'none', '📜': 'none',
    '🚀': 'warning', '⚡': 'warning', '💡': 'warning', '🎯': 'danger',
    '🏗️': 'none', '🔄': 'none', '🆕': 'success', '🤝': 'none',
    '💻': 'none', '🖥️': 'none', '⚙️': 'none', '🔧': 'none',
    '📝': 'none', '🐍': 'success', '👁️': 'none', '💬': 'none', '🖼️': 'none',
    '📐': 'none', '📏': 'none', '🧮': 'none', '📊': 'none',
    '💰': 'success', '💸': 'success', '⏱️': 'none', '⏰': 'none',
    '📅': 'none', '👥': 'none', '🏆': 'warning', '💼': 'none'
};

export function detectEmoji(text: string): { cleanedText: string; config?: { icon: React.ElementType, style: IconStyle } } {
    const trimmed = text.trim();
    // Use the shared map keys for iteration
    for (const [emoji, componentName] of Object.entries(EMOJI_COMPONENT_MAP)) {
        if (trimmed.startsWith(emoji)) {
            const cleanedText = trimmed.replace(emoji, '').trim();
            const icon = ICON_LOOKUP[componentName];
            const style = STYLE_MAP[emoji] || 'none';
            return {
                cleanedText,
                config: { icon, style }
            };
        }
    }
    return { cleanedText: text };
}

interface AutoIconProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    originalType?: string;
    children?: React.ReactNode;
    emoji?: string;
}

export default function AutoIcon({ as: Component = 'div', emoji, children, ...props }: AutoIconProps) {
    let childArray = React.Children.toArray(children);

    // 1. Direct Emoji Prop (From Remark Plugin)
    if (emoji) {
        const { config } = detectEmoji(emoji);
        if (config) {
            const Icon = config.icon;
            const colorClass = config.style !== 'none' ? ` auto-icon-color-${config.style}` : '';
            const styleClass = `auto-icon-box${colorClass}`;

            return (
                <Component {...props} className={`${props.className || ''} auto-icon-row`}>
                    <span className={styleClass}>
                        <Icon aria-hidden="true" focusable="false" />
                    </span>
                    <span>{children}</span>
                </Component>
            );
        }
    }

    // 2. Recursive helper to process children (Legacy/List Items)
    if (childArray.length > 0) {
        const firstChild = childArray[0];
        let foundConfig = null;
        let newFirstChild = firstChild;

        if (typeof firstChild === 'string') {
            const { cleanedText, config } = detectEmoji(firstChild);
            if (config) {
                foundConfig = config;
                newFirstChild = cleanedText;
            }
        }
        else if (React.isValidElement(firstChild)) {
            const childElement = firstChild as React.ReactElement<any>;
            if (childElement.props.children) {
                // Peek inside ONE level
                const innerChildren = React.Children.toArray(childElement.props.children);
                if (innerChildren.length > 0 && typeof innerChildren[0] === 'string') {
                    const { cleanedText, config } = detectEmoji(innerChildren[0] as string);
                    if (config) {
                        foundConfig = config;
                        // Clone the element with updated children
                        const updatedInner = [cleanedText, ...innerChildren.slice(1)];
                        newFirstChild = React.cloneElement(childElement, {
                            ...childElement.props,
                            children: updatedInner
                        });
                    }
                }
            }
        }

        if (foundConfig) {
            const Icon = foundConfig.icon;
            const colorClass = foundConfig.style !== 'none' ? ` auto-icon-color-${foundConfig.style}` : '';
            const styleClass = `auto-icon-box${colorClass}`;

            const finalChildren = [newFirstChild, ...childArray.slice(1)];

            // Use semantic CSS classes instead of inline styles
            if (props.originalType === 'li') {
                return (
                    <li {...props} className={props.className || ''} style={{ listStyle: 'none', marginBottom: '0.75rem' }}>
                        <div className="auto-icon-row">
                            <span className={styleClass}>
                                <Icon aria-hidden="true" focusable="false" />
                            </span>
                            <span style={{ paddingTop: '0.2rem', flex: 1 }}>{finalChildren}</span>
                        </div>
                    </li>
                );
            }

            // For headers or other blocks
            return (
                <Component {...props} className={`${props.className || ''} auto-icon-row`}>
                    <span className={styleClass}>
                        <Icon aria-hidden="true" focusable="false" />
                    </span>
                    <span>{finalChildren}</span>
                </Component>
            );
        }
    }

    return <Component {...props}>{children}</Component>;
}
