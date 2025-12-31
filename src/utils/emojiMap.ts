import {
    CheckCircle2, XCircle, HelpCircle, MapPin, Globe, Library, BookOpen,
    GraduationCap, BrainCircuit, School, Scroll, Rocket, Zap, Lightbulb,
    Target, Construction, RefreshCw, Sparkles, Handshake, Laptop, Terminal,
    Settings, Wrench, FileText, Code2, Eye, MessageSquare, Triangle, Ruler,
    Calculator, BarChart3, DollarSign, Wallet, Timer, Calendar, Users, Award,
    Briefcase, Image
} from 'lucide-react';

export type IconStyle = 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary' | 'none';

export interface EmojiConfig {
    icon: any; // Using any to avoid React import in Node context if strictly needed, but we'll try standard
    style: IconStyle;
    componentName: string; // For string-based map in Remark
}

// Minimal map for Node.js usage (Remark) where we only need the component name
export const EMOJI_COMPONENT_MAP: Record<string, string> = {
    '✅': 'CheckCircle2', '❌': 'XCircle', '⚠️': 'HelpCircle',
    '📍': 'MapPin', '🗺️': 'MapPin', '🌍': 'Globe',
    '📚': 'Library', '📖': 'BookOpen', '🎓': 'GraduationCap', '🧠': 'BrainCircuit',
    '🏫': 'School', '📜': 'Scroll',
    '🚀': 'Rocket', '⚡': 'Zap', '💡': 'Lightbulb', '🎯': 'Target',
    '🏗️': 'Construction', '🔄': 'RefreshCw', '🆕': 'Sparkles', '🤝': 'Handshake',
    '💻': 'Laptop', '🖥️': 'Terminal', '⚙️': 'Settings', '🔧': 'Wrench',
    '📝': 'FileText', '🐍': 'Code2', '👁️': 'Eye', '💬': 'MessageSquare',
    '🖼️': 'Image',
    '📐': 'Triangle', '📏': 'Ruler', '🧮': 'Calculator', '📊': 'BarChart3',
    '💰': 'DollarSign', '💸': 'Wallet', '⏱️': 'Timer', '⏰': 'Timer',
    '📅': 'Calendar', '👥': 'Users', '🏆': 'Award', '💼': 'Briefcase'
};
