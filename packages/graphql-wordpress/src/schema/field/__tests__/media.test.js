import {
  featuredMedia,
  description,
  caption,
  altText,
  mediaType,
  mimeType,
  sourceUrl,
} from 'field/media';
import getLoaders from 'data/loaders';

const args = {};
const context = {};
const info = {
  rootValue: {
    loaders: getLoaders(),
  },
};

describe('Test schema type field definition', () => {
  test('Test featuredMedia field', () => {
    const field = featuredMedia();
    expect(field.type.name).toMatchSnapshot();
  });

  test('Test featuredMedia field resolver', async () => {
    const field = featuredMedia();
    const media = await field.resolve({ featured_media: 69 }, args, context, info);
    expect(media).toMatchSnapshot();
  });

  test('Test featuredMedia field resolver null', () => {
    const field = featuredMedia();
    expect(field.resolve({ featured_media: 0 }, args, context, info)).toBeNull();
  });

  test('Test description field', () => {
    const { description: field } = description;
    expect(field.type).toMatchSnapshot();
  });

  test('Test caption field', () => {
    const { caption: field } = caption;
    expect(field.type.name).toMatchSnapshot();
  });

  test('Test altText field', () => {
    const { altText: field } = altText;
    expect(field.type).toMatchSnapshot();
  });

  test('Test mediaType field', () => {
    const { mediaType: field } = mediaType;
    expect(field.type.name).toMatchSnapshot();
  });

  test('Test mimeType field', () => {
    const { mimeType: field } = mimeType;
    expect(field.type).toMatchSnapshot();
  });

  test('Test sourceUrl field', () => {
    const { sourceUrl: field } = sourceUrl;
    expect(field.type).toMatchSnapshot();
  });
});
