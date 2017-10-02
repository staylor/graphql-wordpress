import { graphql } from 'react-relay';

export default graphql`
  query Author_Query($id: ID!) {
    viewer {
      ...Author_viewer
    }
  }
`;
