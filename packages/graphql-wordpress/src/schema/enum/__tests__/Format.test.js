import FORMAT from 'enum/Format';

describe('Test enum values', () => {
  test('FORMAT values', () => {
    expect(FORMAT.getValues()).toMatchSnapshot();
  });
});
