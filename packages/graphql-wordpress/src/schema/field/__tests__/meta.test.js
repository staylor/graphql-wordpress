import meta from 'field/meta';

describe('Test schema type field definition', () => {
  const field = meta();

  test('Test meta field', () => {
    expect(field.type).toMatchSnapshot();
  });

  test('Test meta field resolver', () => {
    expect(field.resolve({ meta: { taco: 'bell', doritos: 'loco' } })).toMatchSnapshot();
  });

  test('Test meta field resolver null', () => {
    expect(field.resolve({ meta: null })).toBeNull();
  });
});
