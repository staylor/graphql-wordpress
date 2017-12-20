import React, { Fragment } from 'react';
import Videos from 'components/Videos';
import { Heading } from 'styles/utils';

/* eslint-disable react/prop-types */

export default function HomeRoute(props) {
  return (
    <Fragment>
      <Heading>Latest Videos</Heading>
      <Videos {...props} />
    </Fragment>
  );
}
