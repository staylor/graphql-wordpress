import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import { offsetToCursor } from 'utils/connection';
import { RowTitle } from 'styles/utils';
import { Heading, HeaderAdd, RowActions } from '../styled';
import ListTable from '../ListTable';

/* eslint-disable react/prop-types */

const PER_PAGE = 20;

const columns = [
  {
    label: 'Title',
    render: post => (
      <Fragment>
        <RowTitle>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </RowTitle>
        <RowActions>
          <Link to={`/post/${post.id}`}>Edit</Link> | <Link to={`/post/${post.id}`}>Trash</Link> |{' '}
          <a href={`/post/${post.slug}`}>View</a>
        </RowActions>
      </Fragment>
    ),
  },
  {
    label: 'Slug',
    prop: 'slug',
  },
];

@graphql(
  gql`
    query PostsQuery($first: Int, $after: String, $search: String) {
      posts(first: $first, after: $after, search: $search) {
        count
        edges {
          node {
            id
            title
            slug
            tags {
              name
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `,
  {
    options: ({ match }) => {
      const { params } = match;

      const variables = { first: 10 };
      if (params.page) {
        const pageOffset = parseInt(params.page, 10) - 1;
        if (pageOffset > 0) {
          variables.after = offsetToCursor(pageOffset * PER_PAGE - 1);
        }
      }
      // This ensures that the table is up to date when posts are mutated.
      // The alternative is to specify refetchQueries on all Post mutations.
      return { variables, fetchPolicy: 'cache-and-network' };
    },
  }
)
export default class Posts extends Component {
  render() {
    const { location, match, data: { loading, posts } } = this.props;

    if (loading && !posts) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Heading>Posts</Heading>
        <HeaderAdd to="/post/add">Add Post</HeaderAdd>
        <ListTable {...{ location, match, columns }} data={posts} path="/post" />
      </Fragment>
    );
  }
}
