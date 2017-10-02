import { graphql } from 'react-relay';

export default graphql`
  query App_Query($menuID: ID!, $sidebarID: ID!) {
    viewer {
      ...App_viewer
    }
  }
`;
