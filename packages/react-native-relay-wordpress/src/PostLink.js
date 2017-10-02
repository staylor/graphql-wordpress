import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { dateRegex } from './utils/regex';

export default createFragmentContainer(
  ({ post, children, style = null }) => {
    const [, year, month, day] = dateRegex.exec(post.date);
    const url = `/${year}/${month}/${day}/${post.id}`;
    return (
      <Link to={url} underlayColor="#eee">
        <View>
          <Text style={style}>
            {post.title.raw}
          </Text>
          {children}
        </View>
      </Link>
    );
  },
  graphql`
    fragment PostLink_post on Post {
      id
      date
      title {
        raw
      }
    }
  `
);
