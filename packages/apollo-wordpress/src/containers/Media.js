import React from 'react';
import PropTypes from 'prop-types';
import Image from 'wp-styled-components/lib/Image';

const Media = ({ media, crop = null }) => {
  switch (media.__typename) {
    case 'Image':
      return <Image image={media} crop={crop} />;
    default:
      return null;
  }
};

Media.propTypes = {
  crop: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  media: PropTypes.object.isRequired,
};

Media.defaultProps = {
  crop: 'large',
};

export default Media;
