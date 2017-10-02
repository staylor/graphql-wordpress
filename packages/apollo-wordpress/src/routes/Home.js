import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Error, Loading } from 'wp-styled-components';
import {
  HomeWrapper,
  HomeSection,
  HomeHeader,
  ColumnA,
  ColumnB,
  MoreIn,
} from 'wp-styled-components/lib/Home';
import Archive from 'containers/Archive';
import HomeQuery from 'graphql/Home_Query.graphql';

@graphql(HomeQuery, {
  options: {
    variables: {
      stickiesTotal: 2,
      watchThisTotal: 5,
      readThisTotal: 5,
      listenToThisTotal: 5,
    },
  },
})
export default class Home extends Component {
  static propTypes = {
    data: PropTypes.shape({
      viewer: PropTypes.shape({
        readThis: PropTypes.object,
        watchThis: PropTypes.object,
        listenToThis: PropTypes.object,
        stickies: PropTypes.object,
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

    const { viewer: { readThis, watchThis, listenToThis, stickies } } = this.props.data;

    return (
      <HomeWrapper>
        <ColumnA>
          <HomeSection>
            <HomeHeader>Latest</HomeHeader>
            <Archive posts={stickies} />
          </HomeSection>
          <HomeSection>
            <HomeHeader>Read This</HomeHeader>
            <Archive posts={readThis} />
            <MoreIn to={'/music/read-this'}>
              More posts in <em>Read This</em> »
            </MoreIn>
          </HomeSection>
        </ColumnA>
        <ColumnB>
          <HomeSection>
            <HomeHeader>Watch This</HomeHeader>
            <Archive posts={watchThis} />
            <MoreIn to={'/music/watch-this'}>
              More posts in <em>Watch This</em> »
            </MoreIn>
          </HomeSection>
          <HomeSection>
            <HomeHeader>Listen to This</HomeHeader>
            <Archive posts={listenToThis} />
            <MoreIn to={'/music/listen-to-this'}>
              More posts in <em>Listen To This</em> »
            </MoreIn>
          </HomeSection>
        </ColumnB>
      </HomeWrapper>
    );
  }
}
