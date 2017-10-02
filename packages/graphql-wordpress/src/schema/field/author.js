import UserType from 'type/User';

export default {
  author: {
    type: UserType,
    description: 'The author object of the item.',
    resolve: (data, args, context, { rootValue: { loaders: { User } } }) =>
      data.author > 0 ? User.load(data.author) : null,
  },
};
