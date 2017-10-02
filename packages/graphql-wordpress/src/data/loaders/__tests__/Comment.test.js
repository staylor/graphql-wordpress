import getCommentLoaders from 'data/loaders/Comment';

const Comment = getCommentLoaders();

describe('Test Comment loader', () => {
  test('Load a comment', async () => {
    const comment = await Comment.load(13);
    expect(comment.getID()).toMatchSnapshot();
    expect(comment).toMatchSnapshot();
  });
});
