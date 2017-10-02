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

describe('Test Comment CRUD: update', () => {
  test('Test update', async () => {
    const input = {
      id: 13,
      content: 'Updated comment!',
    };
    const update = await Comment.update(input);
    expect(update).toMatchSnapshot();
  });
});
