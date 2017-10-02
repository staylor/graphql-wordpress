import { graphql } from 'react-relay';

export default graphql`
  query Term_Query($slug: String!, $taxonomy: String!, $cursor: String, $count: Int = 10) {
    viewer {
      ...Term_viewer
    }
  }
`;
