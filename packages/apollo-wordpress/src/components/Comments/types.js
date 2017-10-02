import PropTypes from 'prop-types';

export const CommentConnectionType = PropTypes.shape({
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        parent: PropTypes.string,
      }),
    })
  ),
});

export const CommentType = PropTypes.shape({
  id: PropTypes.string,
  authorName: PropTypes.string,
  authorUrl: PropTypes.string,
  authorHash: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.shape({
    rendered: PropTypes.string,
    raw: PropTypes.string,
  }),
  authorAvatarUrls: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.number,
      url: PropTypes.string,
    })
  ),
  parent: PropTypes.string,
  post: PropTypes.string,
});
