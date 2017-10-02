import { GraphQLUnionType } from 'graphql';

import ImageType from 'type/Media/Image';
import AudioType from 'type/Media/Audio';
import VideoType from 'type/Media/Video';

const MediaType = new GraphQLUnionType({
  name: 'Media',
  types: [ImageType, AudioType, VideoType],
});

export default MediaType;
