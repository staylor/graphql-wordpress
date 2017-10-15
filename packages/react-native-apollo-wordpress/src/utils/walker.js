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

export function sortOrderedHierarchy(items) {
  const nested = {
    top: [],
  };
  items.forEach(item => {
    const { parent, order } = item;
    if (!parent) {
      nested.top[order] = item;
      return;
    }

    if (!nested[parent]) {
      nested[parent] = [];
    }
    nested[parent][order] = item;
  });

  Object.keys(nested).forEach(key => {
    nested[key].sort((a, b) => a.order - b.order);
    nested[key] = nested[key].filter(() => true);
  });

  return nested;
}
