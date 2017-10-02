import { GraphQLString, GraphQLInt } from 'graphql';
import MEDIA_TYPE from 'enum/MediaType';
import Description from 'type/Description';
import Caption from 'type/Caption';
import MediaType from 'type/Media';

export const featuredMedia = () => ({
  type: MediaType,
  description: 'The featured media for the object.',
  resolve: ({ featured_media: featured }, args, context, { rootValue: { loaders: { Media } } }) =>
    featured > 0 ? Media.load(featured) : null,
});

export const description = {
  description: {
    type: Description,
  },
};

export const caption = {
  caption: {
    type: Caption,
  },
};

export const altText = {
  altText: {
    type: GraphQLString,
    description: 'Alternative text to display when attachment is not displayed.',
    resolve: media => media.alt_text,
  },
};

export const mediaType = {
  mediaType: {
    type: MEDIA_TYPE,
    resolve: media => media.media_type,
  },
};

export const mimeType = {
  mimeType: {
    type: GraphQLString,
    description: 'The attachment MIME type.',
    resolve: media => media.mime_type,
  },
};

export const sourceUrl = {
  sourceUrl: {
    type: GraphQLString,
    description: 'URL to the original attachment file.',
    resolve: media => media.source_url,
  },
};

export const dimensions = {
  width: {
    type: GraphQLInt,
    description: 'The width of the media, in pixels.',
  },
  height: {
    type: GraphQLInt,
    description: 'The height of the media, in pixels.',
  },
};

export const lengthFields = {
  length: {
    type: GraphQLInt,
    description: 'The length of the media, in seconds.',
  },
  lengthFormatted: {
    type: GraphQLString,
    resolve: details => details.length_formatted,
    description: 'The length of the media, in a readable time format. Example: "3:45"',
  },
};

export const fileFields = {
  fileSize: {
    type: GraphQLInt,
    resolve: details => details.filesize,
    description: 'The size of the file, in bytes.',
  },
  fileFormat: {
    type: GraphQLString,
    resolve: details => details.fileformat,
    description: 'The file format, perhaps different than mime-type.',
  },
};

export const dataFormat = {
  dataFormat: {
    type: GraphQLString,
    resolve: details => details.dataformat,
    description:
      'The media format, perhaps a subtype of mime. Example: "quicktime" < "video/quicktime" < "video/mp4"',
  },
};
