import { graphql, createFragmentContainer } from 'react-relay';
import Embed from '@wonderboymusic/graphql-wordpress-native-components/lib/Embed';

export default createFragmentContainer(
  Embed,
  graphql`
    fragment Embed_node on Embed {
      title
      thumbnailUrl
      html
      width
      height
    }
  `
);
