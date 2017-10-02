import { graphql } from 'react-relay';

export default graphql`
  query Search_Query($search: String, $count: Int = 10) {
    viewer {
      ...Search_viewer
    }
  }
`;
