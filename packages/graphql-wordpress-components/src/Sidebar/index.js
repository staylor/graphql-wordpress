// @flow
import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { withTheme } from 'theming';
import theme from '../theme';
import { uppercaseHeader } from '../';

export const Widget = withTheme(styled.li`margin: 0 0 ${p => p.theme.padding * 2}px;`);

export const title = css`
  composes: ${uppercaseHeader};
  margin: 0 0 ${theme.padding}px;
`;

export const goToThis = css`
  & .title {
    line-height: 1.6em;
  }

  & a {
    font-weight: ${theme.weightBold};
    text-decoration: none;
  }

  & ol {
    margin: ${theme.padding}px 0;
  }

  & li {
    margin: ${theme.padding / 2}px 0;
    border-top: 3px solid ${theme.colors.detail};
  }
`;

/* eslint-disable react/no-danger */

const transformStyles = (classname, html) =>
  html.replace(/widget-title/g, title).replace(/widget_go_to_this/g, goToThis);

type SidebarProps = {
  sidebar: {
    widgets: Array<Object>,
  },
};

const Sidebar = ({ sidebar }: SidebarProps) => (
  <ul>
    {sidebar.widgets.map(({ id, classname, content: { rendered: widget } }) => (
      <Widget
        key={id}
        dangerouslySetInnerHTML={{
          __html: transformStyles(classname, widget),
        }}
      />
    ))}
  </ul>
);

export default Sidebar;
