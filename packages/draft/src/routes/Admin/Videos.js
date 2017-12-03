import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import Checkbox from 'components/Field/Checkbox';
import { offsetToCursor } from 'utils/base64';
import {
  Table,
  StripedRow,
  CellHeading,
  Cell,
  CheckboxCell,
  RowTitle,
  LoadMore,
} from 'styles/utils';
import { Heading, RowActions, Filters, Pagination } from './styled';

/* eslint-disable react/prop-types */

const PER_PAGE = 10;

@graphql(
  gql`
    query VideosQuery($first: Int, $after: String) {
      videos(first: $first, after: $after) {
        count
        edges {
          node {
            id
            title
            slug
            publishedAt
            year
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
      if (params.page) {
        const pageOffset = parseInt(params.page, 10) - 1;
        if (pageOffset > 0) {
          variables.after = offsetToCursor(pageOffset * PER_PAGE - 1);
        }
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
    const { data: { loading, videos }, match: { params } } = this.props;

    if (loading && !videos) {
      return <Loading />;
    }

    const Headers = (
      <tr>
        <CheckboxCell>
          <Checkbox name="all" />
        </CheckboxCell>
        <CellHeading>Title</CellHeading>
        <CellHeading>Slug</CellHeading>
        <CellHeading>Year</CellHeading>
        <CellHeading>Date</CellHeading>
      </tr>
    );

    const pages = Math.ceil(videos.count / PER_PAGE);
    const currentPage = params.page ? parseInt(params.page, 10) : 1;
    const paginated = currentPage && currentPage > 1;
    let previousUrl = null;
    let nextUrl = null;
    if (paginated) {
      if (currentPage - 1 > 1) {
        previousUrl = `/video/page/${currentPage - 1}`;
      } else {
        previousUrl = '/video';
      }
    }
    if (currentPage !== pages && videos.pageInfo.hasNextPage) {
      nextUrl = `/video/page/${currentPage + 1}`;
    }

    const PaginationMatrix = (
      <Pagination>
        <strong>{videos.count} items</strong>
        {paginated ? <Link to="/video">«</Link> : <span>«</span>}
        {previousUrl ? <Link to={previousUrl}>‹</Link> : <span>‹</span>}
        <strong>
          {paginated ? currentPage : 1} of {pages}
        </strong>
        {nextUrl ? <Link to={nextUrl}>›</Link> : <span>›</span>}
        {currentPage !== pages ? <Link to={`/video/page/${pages}`}>»</Link> : <span>»</span>}
      </Pagination>
    );

    return (
      <Fragment>
        <Heading>Videos</Heading>
        <Filters>{PaginationMatrix}</Filters>
        <Table>
          <thead>{Headers}</thead>
          <tbody>
            {videos.edges.map(({ node }) => {
              const date = new Date(node.publishedAt);
              const formattedDate = `${date.getMonth() +
                1}/${date.getDate()}/${date.getFullYear()}`;
              return (
                <StripedRow key={node.id}>
                  <CheckboxCell>
                    <Checkbox name="deleteme" />
                  </CheckboxCell>
                  <Cell>
                    <RowTitle>
                      <Link to={`/video/${node.id}`}>{node.title}</Link>
                    </RowTitle>
                    <RowActions>
                      <Link to={`/video/${node.id}`}>Edit</Link> |{' '}
                      <Link to={`/video/${node.id}`}>Trash</Link> |{' '}
                      <a href={`/video/${node.slug}`}>View</a>
                    </RowActions>
                  </Cell>
                  <Cell>{node.slug}</Cell>
                  <Cell>{node.year}</Cell>
                  <Cell>
                    Published<br />
                    {formattedDate}
                  </Cell>
                </StripedRow>
              );
            })}
          </tbody>
          <tfoot>{Headers}</tfoot>
        </Table>
        <Filters>{PaginationMatrix}</Filters>
        {videos.pageInfo.hasNextPage && <LoadMore onClick={this.loadMore}>MORE</LoadMore>}
      </Fragment>
    );
  }
}
