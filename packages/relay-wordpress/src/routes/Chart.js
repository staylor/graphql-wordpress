// @flow
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { ArticleWrapper, Error } from '@wonderboymusic/graphql-wordpress-components';
import { Title, List, Item, Image } from '@wonderboymusic/graphql-wordpress-components/lib/Chart';

type ChartImage = {|
  url: string,
  height: number,
|};

type ChartItem = {|
  title: string,
  artist: string,
  releaseDate: string,
  releaseDateFormatted: string,
  url: string,
  copyright: string,
  images: Array<ChartImage>,
|};

type ITunesChart = {|
  title: string,
  copyright: string,
  updated: string,
  authorName: string,
  authorUri: string,
  items: Array<ChartItem>,
|};

type ChartProps = {
  viewer: {|
    chart: ITunesChart,
  |},
};

const Chart = ({ viewer: { chart } }: ChartProps) => {
  if (!chart) {
    return <Error />;
  }

  return (
    <ArticleWrapper>
      <header>
        <Title>
          <a href={chart.authorUri}>{chart.authorName}</a>
        </Title>
      </header>
      <List>
        {chart.items.map(({ title, url, artist, releaseDateFormatted, images }) => (
          <Item key={url}>
            {images.length && <Image src={images[0].url} alt="" />}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title} - {artist}
            </a>
            <p>
              <strong>Released:</strong> {releaseDateFormatted}
            </p>
          </Item>
        ))}
      </List>
    </ArticleWrapper>
  );
};

export default createFragmentContainer(
  Chart,
  graphql`
    fragment Chart_viewer on Viewer {
      chart {
        title
        copyright
        updated
        authorName
        authorUri
        items {
          title
          artist
          releaseDate
          releaseDateFormatted
          url
          copyright
          images {
            url
            height
          }
        }
      }
    }
  `
);
