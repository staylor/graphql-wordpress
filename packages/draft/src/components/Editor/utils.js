export function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr;
  let start;
  // eslint-disable-next-line
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

// these are taken from:
// https://github.com/brijeshb42/medium-draft/blob/master/src/util/index.js

export const getSelection = root => {
  let t = null;
  if (root.getSelection) {
    t = root.getSelection();
  } else if (root.document.getSelection) {
    t = root.document.getSelection();
  } else if (root.document.selection) {
    t = root.document.selection.createRange().text;
  }
  return t;
};

export const getSelectionRect = selected => {
  const clientRect = selected.getRangeAt(0).getBoundingClientRect();
  // selected.getRangeAt(0).getBoundingClientRect()
  let rect = clientRect && clientRect.top ? clientRect : selected.getRangeAt(0).getClientRects()[0];
  if (!rect) {
    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
      rect = selected.anchorNode.getBoundingClientRect();
      rect.isEmptyline = true;
    } else {
      return null;
    }
  }
  return rect;
};

export const getCurrentBlock = editorState => {
  const selectionState = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(selectionState.getStartKey());
  return block;
};
