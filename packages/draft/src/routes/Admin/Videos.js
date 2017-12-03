import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import Checkbox from 'components/Field/Checkbox';
import { Table, Row, CellHeading, Cell, LoadMore } from 'styles/utils';
import { Heading } from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query VideosQuery($first: Int, $after: String) {
      videos(first: $first, after: $after) {
        edges {
          node {
            id
            title
          }
          cursor
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `,
  {
    options: ({ match: { params } }) => {
      const variables = { first: 10 };
      if (params.year) {
        variables.year = parseInt(params.year, 10);
      }
      return { variables };
    },
  }
)
export default class Videos extends Component {
  loadMore = e => {
    e.preventDefault();

    const { fetchMore, variables, videos } = this.props.data;

    return fetchMore({
      variables: {
        ...variables,
        after: videos.edges[videos.edges.length - 1].cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const mergedResult = {
          ...fetchMoreResult,
          videos: {
            ...fetchMoreResult.videos,
            edges: previousResult.videos.edges.concat(fetchMoreResult.videos.edges),
          },
        };

        return mergedResult;
      },
    });
  };

  render() {
    const { data: { loading, videos } } = this.props;

    if (loading && !videos) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Videos</Heading>
        <Table>
          <thead>
            <Row>
              <CellHeading>
                <Checkbox name="all" />
              </CellHeading>
              <CellHeading>Title</CellHeading>
            </Row>
          </thead>
          <tbody>
            {videos.edges.map(edge => (
              <Row key={edge.node.id}>
                <Cell>
                  <Checkbox name="deleteme" />
                </Cell>
                <Cell>
                  {edge.node.title} <Link to={`/video/${edge.node.id}`}>Edit</Link>
                </Cell>
              </Row>
            ))}
          </tbody>
        </Table>
        {videos.pageInfo.hasNextPage && <LoadMore onClick={this.loadMore}>MORE</LoadMore>}
      </Fragment>
    );
  }
}
