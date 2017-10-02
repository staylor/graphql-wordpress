import COMMENT_ORDERBY from 'enum/CommentOrderby';

describe('Test enum values', () => {
  test('COMMENT_ORDERBY values', () => {
    expect(COMMENT_ORDERBY.getValues()).toMatchSnapshot();
  });
});
