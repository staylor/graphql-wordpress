import { graphql } from 'react-relay';

export default graphql`
  query Wrapper_Query($menuID: ID!) {
    viewer {
      settings {
        title
        description
        language
      }
      navMenu(id: $menuID) {
        ...NavMenu_navMenu
      }
    }
  }
`;
