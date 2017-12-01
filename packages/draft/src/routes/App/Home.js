import React, { Fragment } from 'react';
import Videos from 'components/Videos';

/* eslint-disable react/prop-types */

export default function HomeRoute(props) {
  return (
    <Fragment>
      <Videos {...props} />
    </Fragment>
  );
}
