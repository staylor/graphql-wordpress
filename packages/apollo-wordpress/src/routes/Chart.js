import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { ArticleWrapper } from 'wp-styled-components';
import { Title, List, Item, Image, Error, Loading } from 'wp-styled-components/lib/Chart';
import ChartQuery from 'graphql/Chart_Query.graphql';

@graphql(ChartQuery)
export default class Chart extends Component {
  static propTypes = {
    data: PropTypes.shape({
      viewer: PropTypes.shape({
        chart: PropTypes.object,
      }),
    }).isRequired,
  };

  render() {
    const { data: { error, loading } } = this.props;
    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    const { viewer: { chart } } = this.props.data;
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
  }
}
