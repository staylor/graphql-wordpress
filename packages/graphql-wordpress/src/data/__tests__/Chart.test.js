import Chart from 'data/Chart';

describe('Test Chart data access', () => {
  test('Get endpoint', () => {
    expect(Chart.getEndpoint()).toMatchSnapshot();
  });
});
