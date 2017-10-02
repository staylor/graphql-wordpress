import React from 'react';
import PropTypes from 'prop-types';

const attrMap = {
  allowfullscreen: 'allowFullScreen',
  allowtransparency: 'allowTransparency',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  colspan: 'colSpan',
  contentrditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  datetime: 'dateTime',
  frameborder: 'frameBorder',
  marginheight: 'marginHeight',
  marginwidth: 'marginWidth',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  rowspan: 'rowSpan',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  tabindex: 'tabIndex',
};

const camelize = name => attrMap[name] || name;

export default function Element({ node, children }) {
  const props = (node.attributes || []).reduce((memo, { name, value }) => {
    if (name === 'class') {
      memo.className = value;
    } else {
      memo[camelize(name)] = value;
    }
    return memo;
  }, {});

  return React.createElement(node.tagName, props, children);
}

Element.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  node: PropTypes.object.isRequired,
  children: PropTypes.node,
};

Element.defaultProps = {
  children: null,
};
