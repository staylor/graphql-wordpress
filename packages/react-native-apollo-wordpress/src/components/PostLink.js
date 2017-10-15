import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { dateRegex } from 'utils/regex';

/* eslint-disable react/prop-types */

export default ({ post, children, style = null }) => {
  const [, year, month, day] = dateRegex.exec(post.date);
  const url = `/${year}/${month}/${day}/${post.id}`;
  return (
    <Link to={url} underlayColor="#eee">
      <View>
        <Text style={style}>{post.title.raw}</Text>
        {children}
      </View>
    </Link>
  );
};
