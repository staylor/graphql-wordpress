import React from 'react';
import Videos from 'components/Videos';
import Latest from './Latest';
import { ContentWrap, VideosWrap } from './styled';

/* eslint-disable react/prop-types */

export default function HomeRoute(props) {
  return (
    <ContentWrap>
      <Latest />
      <VideosWrap>
        <Videos {...props} />
      </VideosWrap>
    </ContentWrap>
  );
}
