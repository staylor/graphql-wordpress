import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import debounce from 'debounce';
import Loading from 'components/Loading';
import Checkbox from 'components/Field/Checkbox';
import Input from 'components/Field/Input';
import Select from 'components/Field/Select';
import { offsetToCursor, bindLoadMore } from 'utils/connection';
import {
  Table,
  StripedRow,
  CellHeading,
  Cell,
  CheckboxCell,
  RowTitle,
  LoadMore,
} from 'styles/utils';
import { Heading, RowActions, Filters, Pagination, SearchBox } from '../styled';

/* eslint-disable react/prop-types */

const PER_PAGE = 10;

@graphql(
  gql`
    query VideosQuery($first: Int, $after: String, $year: Int, $search: String, $tags: String) {
      videos(first: $first, after: $after, year: $year, search: $search, tags: $tags) {
        count
        years
        tags {
          name
          slug
        }
        edges {
          node {
            id
            title
            slug
            publishedAt
            year
            tags {
              name
              slug
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,
  {
    options: ({ match, location }) => {
      const queryParams = qs.parse(location.search);
      const { params } = match;

      const variables = { first: 10 };
      if (queryParams.search) {
        // $TODO: sanitize this
        variables.search = queryParams.search;
      }
      if (queryParams.tag) {
        variables.tags = queryParams.tag;
      }
      if (queryParams.year) {
        variables.year = parseInt(queryParams.year, 10);
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
  updateYear = year => {
    const params = {};
    if (year) {
      params.year = year;
    }
    this.props.history.push({
      pathname: '/video',
      search: qs.stringify(params),
    });
  };

  updateTag = tag => {
    const params = {};
    if (tag) {
      params.tag = tag;
    }
    this.props.history.push({
      pathname: '/video',
      search: qs.stringify(params),
    });
  };

  updateSearch = debounce(term => {
    const params = {};
    if (term) {
      params.search = term;
    }
    this.props.history.push({
      pathname: '/video',
      search: qs.stringify(params),
    });
  }, 600);

  constructor(props, context) {
    super(props, context);
    this.loadMore = bindLoadMore.call(this, 'videos');
  }

  render() {
    const { location, data: { loading, videos }, match: { params } } = this.props;

    if (loading && !videos) {
      return <Loading />;
    }

    const queryParams = qs.parse(location.search);

    const LinkTo = ({ to = '', children }) => (
      <Link to={{ pathname: `/video${to}`, search: location.search }}>{children}</Link>
    );

    const Headers = (
      <tr>
        <CheckboxCell>
          <Checkbox name="all" />
        </CheckboxCell>
        <CellHeading>Title</CellHeading>
        <CellHeading>Slug</CellHeading>
        <CellHeading>Tags</CellHeading>
        <CellHeading>Year</CellHeading>
        <CellHeading>Date</CellHeading>
      </tr>
    );

    const pages = videos.count > 0 ? Math.ceil(videos.count / PER_PAGE) : 0;
    const firstPage = pages === 0 ? 0 : 1;
    const currentPage = params.page ? parseInt(params.page, 10) : firstPage;
    const paginated = currentPage && currentPage > 1;
    let previousUrl = null;
    let nextUrl = null;
    if (paginated) {
      if (currentPage - 1 > 1) {
        previousUrl = `/page/${currentPage - 1}`;
      } else {
        previousUrl = '';
      }
    }
    if (currentPage !== pages && videos.pageInfo.hasNextPage) {
      nextUrl = `/page/${currentPage + 1}`;
    }

    const PaginationMatrix = (
      <Pagination>
        <strong>{videos.count} items</strong>
        {paginated ? <LinkTo>«</LinkTo> : <span>«</span>}
        {previousUrl === null ? <span>‹</span> : <LinkTo to={previousUrl}>‹</LinkTo>}
        <strong>
          {paginated ? currentPage : firstPage} of {pages}
        </strong>
        {nextUrl === null ? <span>›</span> : <LinkTo to={nextUrl}>›</LinkTo>}
        {currentPage !== pages ? <LinkTo to={`/page/${pages}`}>»</LinkTo> : <span>»</span>}
      </Pagination>
    );

    return (
      <Fragment>
        <Heading>Videos</Heading>
        <Filters>
          <Select
            placeholder="Select Year"
            value={queryParams.year}
            choices={videos.years}
            onChange={this.updateYear}
          />
          <Select placeholder="Select Tag" value={queryParams.tag} onChange={this.updateTag}>
            {videos.tags.map(tag => (
              <option key={tag.slug} value={tag.slug}>
                {tag.name}
              </option>
            ))}
          </Select>
          <SearchBox>
            <Input
              value={queryParams.search}
              placeholder="Search Videos"
              onChange={this.updateSearch}
            />
          </SearchBox>
          {PaginationMatrix}
        </Filters>
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
                      <LinkTo to={`/${node.id}`}>{node.title}</LinkTo>
                    </RowTitle>
                    <RowActions>
                      <LinkTo to={`/${node.id}`}>Edit</LinkTo> |{' '}
                      <LinkTo to={`/${node.id}`}>Trash</LinkTo> |{' '}
                      <a href={`/video/${node.slug}`}>View</a>
                    </RowActions>
                  </Cell>
                  <Cell>{node.slug}</Cell>
                  <Cell>
                    {node.tags.map(tag => (
                      <Link
                        key={tag.slug}
                        to={{
                          pathname: `/video`,
                          search: qs.stringify({ tag: tag.slug }),
                        }}
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </Cell>
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
