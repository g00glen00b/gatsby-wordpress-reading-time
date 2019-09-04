import readingTime from 'reading-time';

export function onCreateNode({ node, actions }) {
  const { createNodeField } = actions;
  if (node.content != null) {
    createNodeField({
      node,
      name: 'readingTime',
      value: readingTime(node.content)
    });
  }
}
