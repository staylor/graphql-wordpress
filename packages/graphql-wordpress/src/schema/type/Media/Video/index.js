import { GraphQLObjectType } from 'graphql';

import MediaInterface from 'interface/Media';
import mediaFields from 'type/Media/fields';
import VideoDetails from 'type/Media/Video/Details';
import { featuredMedia } from 'field/media';

const VideoType = new GraphQLObjectType({
  name: 'Video',
  description: 'An object.',
  interfaces: [MediaInterface],
  isTypeOf(media) {
    return media.mime_type.indexOf('video') === 0;
  },
  fields: () => ({
    ...mediaFields,
    mediaDetails: {
      type: VideoDetails,
      resolve: media => media.media_details,
    },
    featuredMedia: featuredMedia(),
  }),
});

export default VideoType;
