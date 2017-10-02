import Comment from 'data/Comment';
import * as utils from 'data/utils';

utils.default = jest.fn(() => ({
  data: {
    body: {
      id: 13,
      status: 'trash',
    },
  },
}));

utils.clearEndpointCache = jest.fn(() => Promise.resolve());

describe('Test Comment CRUD: delete', () => {
  test('Test delete', async () => {
    const input = {
      id: 13,
    };
    const deletion = await Comment.delete(input);
    expect(deletion).toMatchSnapshot();
  });
});
