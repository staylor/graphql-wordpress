import { graphql } from 'react-relay';

export default graphql`
  query Single_Query($id: ID!) {
    viewer {
      ...Single_viewer
    }
  }
`;
