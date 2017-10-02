import getChartLoaders from 'data/loaders/Chart';

jest.mock('../../utils', () =>
  jest.fn(() => ({
    data: {
      body: {
        feed: {
          author: {
            name: { label: 'iTunes Store' },
            uri: { label: 'http://www.apple.com/itunes/' },
          },
          entry: [
            {
              'im:name': { label: 'Melodrama' },
              'im:image': [
                {
                  label:
                    'http://is2.mzstatic.com/image/thumb/Music122/v4/ac/be/a8/acbea8bd-3102-1634-d2bf-07a678fd2a84/UMG_cvrart_00602557477641_01_RGB72_1800x1800_17UMGIM81023.jpg/55x55bb-85.jpg',
                  attributes: { height: '55' },
                },
                {
                  label:
                    'http://is3.mzstatic.com/image/thumb/Music122/v4/ac/be/a8/acbea8bd-3102-1634-d2bf-07a678fd2a84/UMG_cvrart_00602557477641_01_RGB72_1800x1800_17UMGIM81023.jpg/60x60bb-85.jpg',
                  attributes: { height: '60' },
                },
                {
                  label:
                    'http://is5.mzstatic.com/image/thumb/Music122/v4/ac/be/a8/acbea8bd-3102-1634-d2bf-07a678fd2a84/UMG_cvrart_00602557477641_01_RGB72_1800x1800_17UMGIM81023.jpg/170x170bb-85.jpg',
                  attributes: { height: '170' },
                },
              ],
              'im:itemCount': { label: '11' },
              'im:price': {
                label: '$10.99',
                attributes: { amount: '10.99000', currency: 'USD' },
              },
              'im:contentType': {
                'im:contentType': {
                  attributes: { term: 'Album', label: 'Album' },
                },
                attributes: { term: 'Music', label: 'Music' },
              },
              rights: { label: '℗ 2017 Universal Music New Zealand Limited' },
              title: { label: 'Melodrama - Lorde' },
              link: {
                attributes: {
                  rel: 'alternate',
                  type: 'text/html',
                  href: 'https://itunes.apple.com/us/album/melodrama/id1211010237?uo=2',
                },
              },
              id: {
                label: 'https://itunes.apple.com/us/album/melodrama/id1211010237?uo=2',
                attributes: { 'im:id': '1211010237' },
              },
              'im:artist': {
                label: 'Lorde',
                attributes: {
                  href: 'https://itunes.apple.com/us/artist/lorde/id602767352?uo=2',
                },
              },
              category: {
                attributes: {
                  'im:id': '20',
                  term: 'Alternative',
                  scheme: 'https://itunes.apple.com/us/genre/music-alternative/id20?uo=2',
                  label: 'Alternative',
                },
              },
              'im:releaseDate': {
                label: '2017-06-16T00:00:00-07:00',
                attributes: { label: 'June 16, 2017' },
              },
            },
          ],
        },
      },
    },
  }))
);

const Chart = getChartLoaders();

describe('Test Chart loader', () => {
  test('Load a chart', async () => {
    const chart = await Chart.load();
    expect(chart.getID()).toMatchSnapshot();
    expect(chart).toMatchSnapshot();
  });
});
