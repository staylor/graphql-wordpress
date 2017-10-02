import Comment from 'data/Comment';
import * as utils from 'data/utils';

utils.default = jest.fn(() => ({
  data: {
    body: {
      id: 13,
      post: 1,
    },
    headers: {
      'set-cookie': 'foo=bar',
    },
  },
}));

utils.clearEndpointCache = jest.fn(() => Promise.resolve());

describe('Test Comment CRUD: create', () => {
  test('Test create', async () => {
    const input = {
      content: 'Cool comment!',
      authorEmail: 'scott.c.taylor@mac.com',
      authorName: 'Scott Taylor',
      post: 'UG9zdDoyNzEw',
    };
    const create = await Comment.create(input);
    expect(create).toMatchSnapshot();
  });

  test('Test create error: no input', async () => {
    const input = {};
    try {
      await Comment.create(input);
    } catch (e) {
      expect(e).toMatchSnapshot();
    }
  });

  test('Test create error: no post', async () => {
    const input = {
      authorEmail: 'scott.c.taylor@mac.com',
      authorName: 'Scott Taylor',
    };
    try {
      await Comment.create(input);
    } catch (e) {
      expect(e).toMatchSnapshot();
    }
  });
});
