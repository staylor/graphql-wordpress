import ChartItemImageType from 'type/Chart/ChartItemImage';

// eslint-disable-next-line no-underscore-dangle
const fields = ChartItemImageType._typeConfig.fields;

describe('Test ChartItem type', () => {
  test('Test name', () => {
    expect(ChartItemImageType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(ChartItemImageType.getFields())).toMatchSnapshot();
  });

  test('Test resolve url', () => {
    expect(fields.url.resolve({ label: 'https://scott.com/image.jpg' })).toMatchSnapshot();
  });

  test('Test resolve height', () => {
    expect(fields.height.resolve({ attributes: { height: 80 } })).toMatchSnapshot();
  });
});
