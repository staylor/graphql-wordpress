import QueryType from 'type/Query';

// eslint-disable-next-line no-underscore-dangle
const fields = QueryType._typeConfig.fields();

describe('Test Query type', () => {
  test('Test name', () => {
    expect(QueryType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(QueryType.getFields())).toMatchSnapshot();
  });

  test('Test resolve viewer', () => {
    expect(fields.viewer.resolve()).toMatchSnapshot();
  });
});
