import { graphql, createFragmentContainer } from 'react-relay';
import Element from '@wonderboymusic/graphql-wordpress-native-components/lib/Element';

export default createFragmentContainer(
  Element,
  graphql`
    fragment Element_node on Element {
      tagName
      attributes {
        name
        value
      }
    }
  `
);
