// @flow
import React from 'react';
import styled from 'react-emotion';
import { withTheme } from 'theming';

export const LoadMore = withTheme(styled.button`
  appearance: none;
  background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.detail};
  box-sizing: border-box;
  color: ${p => p.theme.colors.inactive};
  cursor: pointer;
  font-size: 16px;
  height: 32px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  transition: 400ms;
  width: 80px;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.black};
    outline: 0 none;
  }
`);

type Edge = {
  node: Object,
  cursor: string,
};

type ArchiveProps = {
  edges: Array<Edge>,
  component: any,
  canLoadMore: boolean,
  loadMore: () => void,
};

const Archive = ({ edges, component: Post, canLoadMore = false, loadMore }: ArchiveProps) => [
  <ul key={'ul'}>
    {edges.map(({ cursor, node }) => (
      <li key={cursor}>
        <Post post={node} />
      </li>
    ))}
  </ul>,
  canLoadMore && (
    <LoadMore key={'button'} onClick={loadMore}>
      MORE
    </LoadMore>
  ),
];

export default Archive;
