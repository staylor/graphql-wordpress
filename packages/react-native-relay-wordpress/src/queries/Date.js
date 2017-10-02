import { graphql } from 'react-relay';

export default graphql`
  query Date_Query($year: Int!, $month: Int, $day: Int, $cursor: String, $count: Int = 10) {
    viewer {
      ...Date_viewer
    }
  }
`;
