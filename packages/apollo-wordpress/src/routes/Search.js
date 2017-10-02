import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import debounce from 'debounce';
import { ContentWrapper, Heading, Error, Loading } from 'wp-styled-components';
import { SearchBox, SearchInput, A11Y } from 'wp-styled-components/lib/Search';
import Archive from 'containers/Archive';
import SearchQuery from 'graphql/Search_Query.graphql';
import { SITE_URL } from 'utils/constants';

@graphql(SearchQuery, {
  options: {
    variables: {
      search: '',
      count: 10,
    },
  },
})
export default class Search extends Component {
  static propTypes = {
    data: PropTypes.shape({
      viewer: PropTypes.shape({
        posts: PropTypes.object,
      }),
      variables: PropTypes.object,
      refetch: PropTypes.func,
      fetchMore: PropTypes.func,
    }).isRequired,
  };

  input = null;

  state = {
    term: '',
  };

  doRefetch = debounce(() => {
    this.props.data
      .refetch({
        ...this.props.data.variables,
        search: this.state.term,
      })
      .catch(e => {
        if (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
      })
      .then(() => {
        this.input.blur();
      });
  }, 600);

  onChange = e => {
    this.setState({
      term: e.target.value,
    });
    this.doRefetch();
  };

  render() {
    const { data: { loading, error, variables, fetchMore, viewer } } = this.props;
    if (error) {
      return <Error />;
    }

    const pageInfo = viewer && viewer.posts && viewer.posts.pageInfo;

    let title = 'Search the Archive';
    const searching = this.state.term && (loading || !pageInfo);

    if (this.state.term) {
      if (searching) {
        title = `Searching the archive for “${this.state.term}”`;
      } else {
        title = `Search Results for “${this.state.term}”`;
      }
    }

    return (
      <ContentWrapper>
        <Helmet>
          <title>Search Results</title>
          <link rel="canonical" href={`${SITE_URL}/search`} />
        </Helmet>
        <Heading>{title}</Heading>
        <SearchBox>
          <form>
            <A11Y htmlFor="field-term">Search Term</A11Y>
            <SearchInput
              innerRef={input => {
                this.input = input;
              }}
              type="search"
              id="field-term"
              name="term"
              value={this.state.term}
              onChange={this.onChange}
            />
          </form>
          {searching && <Loading />}
        </SearchBox>
        {viewer &&
          viewer.posts &&
          !loading && <Archive {...{ variables, posts: viewer.posts, fetchMore }} />}
      </ContentWrapper>
    );
  }
}
