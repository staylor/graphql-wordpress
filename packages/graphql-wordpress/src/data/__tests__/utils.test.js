import fetchData from 'data/utils';

jest.mock('../utils', () =>
  jest.fn(() =>
    Promise.resolve({
      data: {
        body: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
        headers: {
          'x-wp-total': 5,
        },
      },
    })
  )
);

describe('Test data fetching', () => {
  test('Data is returned', async () => {
    const data = await fetchData('/scott');
    expect(data).toMatchSnapshot();
  });
});
