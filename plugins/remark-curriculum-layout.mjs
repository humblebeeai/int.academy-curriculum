// Layout hints for Current curriculum docs (archived snapshots keep their
// original markup):
// - wraps runs of consecutive <ResourceCard> elements in a grid container;
// - marks long lists of short items as chips or columns so they take less
//   vertical space. Every item stays visible.
const textOf = (node) => node.value ?? (node.children ?? []).map(textOf).join('');

function markList(list) {
  if (list.ordered || list.children.length < 7) return;
  const items = list.children;
  if (items.some((item) => item.children.length !== 1 || item.children[0].type !== 'paragraph')) return;
  const average = items.reduce((sum, item) => sum + textOf(item).length, 0) / items.length;
  const layout = average <= 28 ? 'chips' : average <= 60 ? 'columns' : undefined;
  if (!layout) return;
  list.data = { ...list.data, hProperties: { ...list.data?.hProperties, 'data-list': layout } };
}

export default function remarkCurriculumLayout() {
  return (tree, file) => {
    const path = file.path ?? '';
    if (!/[\\/]docs[\\/]/.test(path) || /versioned_docs/.test(path)) return;

    const visit = (node) => {
      if (!node.children) return;
      if (node.type === 'list') markList(node);
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
