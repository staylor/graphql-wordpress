import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { ContentWrapper, Heading, Error, Loading } from 'wp-styled-components';
import Archive from 'containers/Archive';
import AuthorQuery from 'graphql/Author_Query.graphql';

/* eslint-disable react/prefer-stateless-function */

@graphql(AuthorQuery, {
  options: ({ params: { id } }) => ({
    variables: {
      id,
      count: 10,
    },
  }),
})
export default class Author extends Component {
  static propTypes = {
    data: PropTypes.shape({
      fetchMore: PropTypes.func,
      variables: PropTypes.object,
      viewer: PropTypes.shape({
        author: PropTypes.object,
        posts: PropTypes.object,
      }),
    }).isRequired,
  };

  render() {
    const { data: { loading, error } } = this.props;
    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    const { variables, fetchMore, viewer: { author, posts } } = this.props.data;
    return (
      <ContentWrapper>
        <Heading>{author.name}</Heading>
        <Archive {...{ posts, fetchMore, variables }} />
      </ContentWrapper>
    );
  }
}
