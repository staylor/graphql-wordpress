import PropTypes from 'prop-types';

export const settingsShape = PropTypes.shape({
  siteTitle: PropTypes.string,
  siteUrl: PropTypes.string,
});

export const mediaSettingsShape = PropTypes.shape({
  crops: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
});

export const socialSettingsShape = PropTypes.shape({
  facebookUrl: PropTypes.string,
  facebookAppId: PropTypes.string,
  twitterUsername: PropTypes.string,
  instagramUsername: PropTypes.string,
});
