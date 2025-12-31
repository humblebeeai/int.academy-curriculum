
const visit = require('unist-util-visit');

// We need a simple map or regex. Since this runs in Node, we can't import TS files easily 
// unless we use ts-node or compile. Docusaurus handles TS config, so we might be able to import 
// if we make it a .ts file ?
// But standard Docusaurus local plugin recommendation is to keep it simple JS or handling imports carefully.
// To avoid build complexity, I will replicate the basic emoji keys here for the Regex.
// It's safer to have a self-contained plugin.

const EMOJI_REGEX = /^(✅|❌|⚠️|📍|🗺️|🌍|📚|📖|🎓|🧠|🏫|📜|🚀|⚡|💡|🎯|🏗️|🔄|🆕|🤝|💻|🖥️|⚙️|🔧|📝|🐍|👁️|💬|🖼️|📐|📏|🧮|📊|💰|💸|⏱️|⏰|📅|👥|🏆|💼)\s*/;

const plugin = (options) => {
    return async (tree) => {
        visit(tree, 'heading', (node) => {
            // Node children are usually text or links
            if (node.children && node.children.length > 0) {
                const firstChild = node.children[0];
                if (firstChild.type === 'text') {
                    const match = firstChild.value.match(EMOJI_REGEX);
                    if (match) {
                        const emoji = match[1];
                        // Remove emoji from text
                        firstChild.value = firstChild.value.replace(emoji, '').trim();

                        // Insert AutoIcon component node BEFORE the text
                        // We use an mdxJsxTextElement (MDX v2/3) or jsx (MDX v1)
                        // Docusaurus v3 uses MDX 3

                        const iconNode = {
                            type: 'mdxJsxTextElement',
                            name: 'AutoIcon',
                            attributes: [
                                { type: 'mdxJsxAttribute', name: 'icon', value: emoji }, // We can pass the emoji literal, AutoIcon can detect it? 
                                // Actually, AutoIcon detects from children text. 
                                // If we remove the text, AutoIcon won't find it!
                                // Strategy: We pass the emoji as a prop called 'emoji' or similar, 
                                // OR we just put the emoji back inside the AutoIcon children?

                                // If we put it in children: <AutoIcon>🚀</AutoIcon>
                                // Then standard Docusaurus TOC might pick it up if it renders children string?
                                // No, standard TOC strips non-text.

                                // Best: 
                                // <AutoIcon emoji="🚀" /> Intro
                                // AutoIcon needs to handle `emoji` prop.
                            ],
                            children: []
                        };

                        // However, `AutoIcon` currently checks children strings. 
                        // Let's rely on the plugin injecting the component, and we update AutoIcon to accept a prop.

                        // Insert at start
                        node.children.unshift(iconNode);
                    }
                }
            }
        });
    };
};

module.exports = plugin;
