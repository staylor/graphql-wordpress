import ChartItemType from 'type/Chart/ChartItem';

// eslint-disable-next-line no-underscore-dangle
const fields = ChartItemType._typeConfig.fields;

describe('Test ChartItem type', () => {
  test('Test name', () => {
    expect(ChartItemType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(ChartItemType.getFields())).toMatchSnapshot();
  });

  test('Test resolve title', () => {
    expect(fields.title.resolve({ 'im:name': { label: 'Melodrama' } })).toMatchSnapshot();
  });

  test('Test resolve artist', () => {
    expect(fields.artist.resolve({ 'im:artist': { label: 'Lorde' } })).toMatchSnapshot();
  });

  test('Test resolve releaseDate', () => {
    expect(
      fields.releaseDate.resolve({
        'im:releaseDate': { label: '2017-04-20T04:20:00' },
      })
    ).toMatchSnapshot();
  });

  test('Test resolve releaseDateFormatted', () => {
    expect(
      fields.releaseDateFormatted.resolve({
        'im:releaseDate': { attributes: { label: 'April 20, 2017' } },
      })
    ).toMatchSnapshot();
  });

  test('Test resolve url', () => {
    expect(
      fields.url.resolve({
        link: { attributes: { href: 'https://scott.com' } },
      })
    ).toMatchSnapshot();
  });

  test('Test resolve copyright', () => {
    expect(fields.copyright.resolve({ rights: { label: 'Big Boy Records' } })).toMatchSnapshot();
  });

  test('Test resolve images', () => {
    expect(
      fields.images.resolve({
        'im:image': [{ url: 'https://scott.com/avi.jpg', height: 80 }],
      })
    ).toMatchSnapshot();
  });
});
