// Wraps runs of consecutive <ResourceCard> elements in Current docs in a
// grid container so module pages can lay resources out side by side.
// Archived snapshots (versioned_docs) keep their original markup.
export default function remarkResourceGrid() {
  return (tree, file) => {
    const path = file.path ?? '';
    if (!/[\\/]docs[\\/]/.test(path) || /versioned_docs/.test(path)) return;

    const group = (node) => {
      if (!node.children) return;
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
          group(child);
          children.push(child);
        }
      }
      flush();
      node.children = children;
    };

    group(tree);
  };
}
