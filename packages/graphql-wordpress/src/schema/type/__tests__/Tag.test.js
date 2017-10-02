import TagType from 'type/Tag';

describe('Test Tag type', () => {
  test('Test name', () => {
    expect(TagType.name).toMatchSnapshot();
  });

  test('Test type', () => {
    expect(TagType.isTypeOf({ taxonomy: 'post_tag' })).toBe(true);
  });

  test('Test fields', () => {
    expect(Object.keys(TagType.getFields())).toMatchSnapshot();
  });
});
