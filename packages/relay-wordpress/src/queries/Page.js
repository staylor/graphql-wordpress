import { graphql } from 'react-relay';

export default graphql`
  query Page_Query($slug: String!) {
    viewer {
      ...Page_viewer
    }
  }
`;
