import ChartType from 'type/Chart';

// eslint-disable-next-line no-underscore-dangle
const fields = ChartType._typeConfig.fields;

describe('Test Chart type', () => {
  test('Test name', () => {
    expect(ChartType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(ChartType.getFields())).toMatchSnapshot();
  });

  test('Test resolve title', () => {
    expect(fields.title.resolve({ title: { label: 'Hot 100' } })).toMatchSnapshot();
  });

  test('Test resolve copyright', () => {
    expect(fields.copyright.resolve({ rights: { label: 'Whatever ©' } })).toMatchSnapshot();
  });

  test('Test resolve updated', () => {
    expect(fields.updated.resolve({ updated: { label: '2017-04-20T04:20:00' } })).toMatchSnapshot();
  });

  test('Test resolve authorName', () => {
    expect(fields.authorName.resolve({ author: { name: { label: 'iTunes' } } })).toMatchSnapshot();
  });

  test('Test resolve authorUri', () => {
    expect(
      fields.authorUri.resolve({
        author: { uri: { label: 'https://scott.com' } },
      })
    ).toMatchSnapshot();
  });

  test('Test resolve items', () => {
    expect(fields.items.resolve({ entry: [{ title: 'Melodrama by Lorde' }] })).toMatchSnapshot();
  });
});
