import getMediaLoaders from 'data/loaders/Media';

const Media = getMediaLoaders();

describe('Test Media loader', () => {
  test('Load a media item', async () => {
    const media = await Media.load(13);
    expect(media.getID()).toMatchSnapshot();
    expect(media).toMatchSnapshot();
  });
});
