import React, { Fragment } from 'react';
import Videos from 'components/Videos';
import { Heading } from 'styles/utils';

/* eslint-disable react/prop-types */

export default function VideosRoute(props) {
  const { match: { params = {} } } = props;

  return (
    <Fragment>
      <Heading>{params.year || 'Videos'}</Heading>
      <Videos {...props} />
    </Fragment>
  );
}
