import MEDIA_TYPE from 'enum/MediaType';

describe('Test enum values', () => {
  test('MEDIA_TYPE values', () => {
    expect(MEDIA_TYPE.getValues()).toMatchSnapshot();
  });
});
