import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Node, Parent } from 'unist';

// Define strict types for the nodes we are visiting
interface TextNode extends Node {
    type: 'text';
    value: string;
}

interface HeadingNode extends Parent {
    type: 'heading';
    children: Node[];
}

const EMOJI_REGEX = /^(✅|❌|⚠️|📍|🗺️|🌍|📚|📖|🎓|🧠|🏫|📜|🚀|⚡|💡|🎯|🏗️|🔄|🆕|🤝|💻|🖥️|⚙️|🔧|📝|🐍|👁️|💬|🖼️|📐|📏|🧮|📊|💰|💸|⏱️|⏰|📅|👥|🏆|💼)\s*/;

const plugin: Plugin = () => {
    return (tree) => {
        visit(tree, 'heading', (node: HeadingNode) => {
            if (node.children && node.children.length > 0) {
                const firstChild = node.children[0] as TextNode;
                if (firstChild.type === 'text') {
                    const match = firstChild.value.match(EMOJI_REGEX);
                    if (match) {
                        const emoji = match[1];
                        // Remove emoji from text
                        firstChild.value = firstChild.value.replace(emoji, '').trim();

                        const iconNode = {
                            type: 'mdxJsxTextElement',
                            name: 'AutoIcon',
                            attributes: [
                                { type: 'mdxJsxAttribute', name: 'icon', value: emoji },
                            ],
                            children: [],
                            data: {
                                _mdxExplicitJsx: true,
                            },
                        };

                        // Insert at start
                        node.children.unshift(iconNode);
                    }
                }
            }
        });
    };
};

export default plugin;
