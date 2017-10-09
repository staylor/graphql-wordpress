// @flow
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import {
  HomeWrapper,
  HomeSection,
  HomeHeader,
  ColumnA,
  ColumnB,
  MoreIn,
} from '@wonderboymusic/graphql-wordpress-components/lib/Home';
import Archive from 'containers/Archive';
import type { HomeProps } from 'relay-wordpress';

const Home = ({ viewer: { readThis, watchThis, listenToThis, stickies } }: HomeProps) => (
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

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_viewer on Viewer {
      stickies: posts(sticky: true, first: $stickiesTotal) {
        edges {
          node {
            ...Post_post
          }
          cursor
        }
      }
      readThis: posts(category: "read-this", sticky: false, first: $readThisTotal) {
        edges {
          node {
            ...Post_post
          }
          cursor
        }
      }
      watchThis: posts(category: "watch-this", first: $watchThisTotal) {
        edges {
          node {
            ...Post_post
          }
          cursor
        }
      }
      listenToThis: posts(category: "listen-to-this", first: $listenToThisTotal) {
        edges {
          node {
            ...Post_post
          }
          cursor
        }
      }
    }
  `
);
