import { graphql } from 'react-relay';

export default graphql`
  query Home_Query(
    $stickiesTotal: Int = 2
    $watchThisTotal: Int = 5
    $readThisTotal: Int = 5
    $listenToThisTotal: Int = 5
  ) {
    viewer {
      ...Home_viewer
    }
  }
`;
