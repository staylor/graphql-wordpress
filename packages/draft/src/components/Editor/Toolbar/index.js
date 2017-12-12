import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getVisibleSelectionRect } from 'draft-js';
import cn from 'classnames';
import { Toolbar as StyledToolbar, toolbarOpenClass } from './styled';
import InlineStyleControls from '../InlineStyleControls';

/* eslint-disable react/prop-types */

export default class Toolbar extends Component {
  componentDidUpdate() {
    const selectionState = this.props.editorState.getSelection();
    if (selectionState.isCollapsed()) {
      return;
    }
    // eslint-disable-next-line no-undef
    const selectionBoundary = getVisibleSelectionRect(window);
    if (!selectionBoundary) {
      return;
    }

    // eslint-disable-next-line react/no-find-dom-node
    const toolbarNode = ReactDOM.findDOMNode(this);
    const toolbarBoundary = toolbarNode.getBoundingClientRect();

    // eslint-disable-next-line react/no-find-dom-node
    const parent = ReactDOM.findDOMNode(this.props.editor);
    const parentBoundary = parent.getBoundingClientRect();

    /*
    * Main logic for setting the toolbar position.
    */
    toolbarNode.style.top = `${selectionBoundary.top -
      parentBoundary.top -
      toolbarBoundary.height -
      5}px`;
    toolbarNode.style.width = `${toolbarBoundary.width}px`;
    const widthDiff = selectionBoundary.width - toolbarBoundary.width;
    if (widthDiff >= 0) {
      toolbarNode.style.left = `${widthDiff / 2}px`;
    } else {
      const left = selectionBoundary.left - parentBoundary.left;
      toolbarNode.style.left = `${left + widthDiff / 2}px`;
      // toolbarNode.style.width = toolbarBoundary.width + 'px';
      // if (left + toolbarBoundary.width > parentBoundary.width) {
      // toolbarNode.style.right = '0px';
      // toolbarNode.style.left = '';
      // toolbarNode.style.width = toolbarBoundary.width + 'px';
      // }
      // else {
      //   toolbarNode.style.left = (left + widthDiff / 2) + 'px';
      //   toolbarNode.style.right = '';
      // }
    }
  }

  render() {
    const { editorState } = this.props;

    return (
      <StyledToolbar
        innerRef={toolbar => {
          this.toolbar = toolbar;
        }}
        className={cn({
          [toolbarOpenClass]: !editorState.getSelection().isCollapsed(),
        })}
      >
        <InlineStyleControls editorState={editorState} onToggle={this.props.toggleInlineStyle} />
      </StyledToolbar>
    );
  }
}
