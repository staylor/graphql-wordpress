import COMMENT_STATUS from 'enum/CommentStatus';

describe('Test enum values', () => {
  test('COMMENT_STATUS values', () => {
    expect(COMMENT_STATUS.getValues()).toMatchSnapshot();
  });
});
