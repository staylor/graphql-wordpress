import { graphql } from 'react-relay';

export default graphql`
  query Chart_Query {
    viewer {
      ...Chart_viewer
    }
  }
`;
