function base64(i) {
  return Buffer.from(i, 'utf8').toString('base64');
}

function unbase64(i) {
  return Buffer.from(i, 'base64').toString('utf8');
}

const PREFIX = 'arrayconnection:';

export function cursorToOffset(cursor) {
  return parseInt(unbase64(cursor).substring(PREFIX.length), 10);
}

export function offsetToCursor(offset) {
  return base64(PREFIX + offset);
}

export async function parseConnection(Model, connectionArgs) {
  const { first = 10, after = null, last = null, before = null } = connectionArgs;
  const args = { offset: 0, limit: 10 };
  if (first) {
    args.limit = first;
  }

  if (after) {
    args.offset = cursorToOffset(after) + 1;
  }

  const count = await Model.count();

  return Model.all(args).then(items => {
    const arrayLength = count;
    const sliceEnd = args.offset + items.length;
    const beforeOffset = before ? cursorToOffset(before) : items.length;
    const afterOffset = after ? cursorToOffset(after) : -1;
    let startOffset = Math.max(args.offset - 1, afterOffset, -1) + 1;
    let endOffset = Math.min(sliceEnd, beforeOffset, arrayLength);
    if (first) {
      endOffset = Math.min(endOffset, startOffset + first);
    }

    if (last) {
      startOffset = Math.max(startOffset, endOffset - last);
    }

    const edges = items.map((value, index) => ({
      cursor: offsetToCursor(startOffset + index),
      node: value,
    }));

    const firstEdge = edges[0];
    const lastEdge = edges[edges.length - 1];
    const lowerBound = after ? afterOffset + 1 : 0;
    const upperBound = before ? beforeOffset : arrayLength;

    return {
      edges,
      pageInfo: {
        startCursor: firstEdge ? firstEdge.cursor : null,
        endCursor: lastEdge ? lastEdge.cursor : null,
        hasPreviousPage: last ? startOffset > lowerBound : false,
        hasNextPage: first ? endOffset < upperBound : false,
      },
    };
  });
}
