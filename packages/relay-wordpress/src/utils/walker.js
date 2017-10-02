// @flow
import type { HierarchyItem } from 'relay-wordpress';

// eslint-disable-next-line import/prefer-default-export
export function sortHierarchy(list: Array<HierarchyItem>) {
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
