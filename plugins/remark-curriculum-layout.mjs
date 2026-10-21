// Layout hints for Current curriculum docs (archived snapshots keep their
// original markup):
// - wraps runs of consecutive <ResourceCard> elements in a grid container;
// - marks long lists of short items as chips or columns so they take less
//   vertical space. Every item stays visible;
// - tags h3 block headings (Learn, Resources, Practice, ...) and "Before you
//   start" paragraphs by their text so every module gets the same labels.
const textOf = (node) => node.value ?? (node.children ?? []).map(textOf).join('');

function markList(list) {
  if (list.ordered || list.children.length < 7) return;
  const items = list.children;
  if (items.some((item) => item.children.length !== 1 || item.children[0].type !== 'paragraph')) return;
  const average = items.reduce((sum, item) => sum + textOf(item).length, 0) / items.length;
  const layout = average <= 28 ? 'chips' : average <= 60 ? 'columns' : undefined;
  if (!layout) return;
  setProperty(list, 'data-list', layout);
}

const blocks = [
  ['learn', /^(learn|required topics|what you.?ll learn|coverage)\b/i],
  ['resources', /^(learning )?resources\b/i],
  ['practice', /^practice\b/i],
  ['output', /^(expected output|preparation evidence|assessment|submission evidence|complete this elective)\b/i],
  ['prereq', /^(before you start|prerequisites?)\b/i],
  ['goal', /^goal\b/i],
];

function setProperty(node, name, value) {
  node.data = { ...node.data, hProperties: { ...node.data?.hProperties, [name]: value } };
}

function markBlock(node) {
  if (node.type === 'heading' && node.depth === 3) {
    const block = blocks.find(([, pattern]) => pattern.test(textOf(node).trim()))?.[0];
    if (block) setProperty(node, 'data-block', block);
  } else if (node.type === 'paragraph' && node.children[0]?.type === 'strong' && /^before you start/i.test(textOf(node.children[0]))) {
    setProperty(node, 'data-block', 'prereq');
  }
}

export default function remarkCurriculumLayout() {
  return (tree, file) => {
    const path = file.path ?? '';
    if (!/[\\/]docs[\\/]/.test(path) || /versioned_docs/.test(path)) return;

    const visit = (node) => {
      if (!node.children) return;
      if (node.type === 'list') markList(node);
      markBlock(node);
      const children = [];
      let run = [];
      const flush = () => {
        if (run.length > 1) {
          children.push({
            type: 'mdxJsxFlowElement',
            name: 'div',
            attributes: [{ type: 'mdxJsxAttribute', name: 'data-resource-grid', value: 'true' }],
            children: run,
          });
        } else {
          children.push(...run);
        }
        run = [];
      };
      for (const child of node.children) {
        if (child.type === 'mdxJsxFlowElement' && child.name === 'ResourceCard') {
          run.push(child);
        } else {
          flush();
          visit(child);
          children.push(child);
        }
      }
      flush();
      node.children = children;
    };

    visit(tree);
  };
}
