export function sortHierarchy(list) {
  const nested = {
    top: [],
  };
  list.forEach(({ node }) => {
    if (!node.parent) {
      nested.top.push(node);
      return;
    }

    if (!nested[node.parent]) {
      nested[node.parent] = [];
    }
    nested[node.parent].push(node);
  });

  return nested;
}
