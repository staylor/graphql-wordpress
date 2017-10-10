// @flow
import * as React from 'react';
import debounce from 'debounce';
import { graphql, createRefetchContainer } from 'react-relay';
import Helmet from 'react-helmet';
import { ContentWrapper, Heading, Loading } from '@wonderboymusic/graphql-wordpress-components';
import {
  SearchBox,
  SearchInput,
  A11Y,
} from '@wonderboymusic/graphql-wordpress-components/lib/Search';
import { LoadMore } from '@wonderboymusic/graphql-wordpress-components/lib/Archive';
import SearchQuery from 'queries/Search';
import Archive from 'containers/Archive';
import { SITE_URL } from 'utils/constants';
import type { Variables } from 'react-relay';
import type { SearchProps, SearchState } from 'relay-wordpress';

const PAGE_SIZE = 10;

class Search extends React.Component<SearchProps, SearchState> {
  state = {
    fetching: false,
    term: '',
  };

  count = PAGE_SIZE;

  refetchVariables = (fragmentVariables: Variables) => ({
    ...fragmentVariables,
    search: this.state.term,
  });

  doRefetch = debounce(() => {
    this.props.relay.refetch(
      {
        count: this.count,
        search: this.state.term,
      },
      null,
      e => {
        if (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
        this.setState({ fetching: false });
      }
    );
  }, 600);

  onChange = (e: Event & { target: HTMLInputElement }) => {
    this.setState({
      fetching: true,
      [e.target.name]: e.target.value,
    });

    this.count = PAGE_SIZE;
    this.doRefetch();
  };

  loadMore = () => {
    this.count += PAGE_SIZE;
    this.doRefetch();
  };

  render() {
    const { viewer: { posts = {} } } = this.props;
    let title = 'Search the Archive';
    if (this.state.term) {
      if (this.state.fetching) {
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
        <SearchBox>
          <Heading>{title}</Heading>
          <form>
            <A11Y htmlFor="field-term">Search Term</A11Y>
            <SearchInput
              type="search"
              id="field-term"
              name="term"
              value={this.state.term}
              onChange={this.onChange}
            />
          </form>
          {this.state.fetching && <Loading />}
        </SearchBox>
        {posts && [
          <Archive key="archive" posts={posts} />,
          posts.pageInfo.hasNextPage && (
            <LoadMore key="button" onClick={() => this.loadMore()}>
              MORE
            </LoadMore>
          ),
        ]}
      </ContentWrapper>
    );
  }
}

export default createRefetchContainer(
  Search,
  graphql`
    fragment Search_viewer on Viewer {
      posts(search: $search, first: $count) @connection(key: "Search_posts") {
        edges {
          node {
            ...Post_post
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
  SearchQuery
);
