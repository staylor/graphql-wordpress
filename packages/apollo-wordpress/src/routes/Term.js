import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import { ContentWrapper, Heading, Error, Loading } from 'wp-styled-components';
import Archive from 'containers/Archive';
import TermQuery from 'graphql/Term_Query.graphql';
import { SITE_URL } from 'utils/constants';

@graphql(TermQuery, {
  options: ({ params: { slug, tag = null } }) => {
    let taxonomy = 'category';
    if (tag) {
      taxonomy = 'tag';
    }
    return {
      variables: {
        slug,
        taxonomy,
        count: 10,
      },
    };
  },
})
export default class Term extends Component {
  static propTypes = {
    data: PropTypes.shape({
      fetchMore: PropTypes.func,
      variables: PropTypes.object,
      viewer: PropTypes.shape({
        term: PropTypes.object,
        posts: PropTypes.object,
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

    const { variables, fetchMore, viewer: { term, posts } } = this.props.data;

    const title = `${term.taxonomy.labels.singular}: ${term.name}`;
    const url = `${SITE_URL}/${term.taxonomy.rewrite.slug}/${term.slug}`;

    return (
      <ContentWrapper>
        <Helmet>
          <title>{title}</title>
          <link rel="canonical" href={url} />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={url} />
        </Helmet>
        <Heading>{title}</Heading>
        <Archive {...{ posts, fetchMore, variables }} />
      </ContentWrapper>
    );
  }
}
