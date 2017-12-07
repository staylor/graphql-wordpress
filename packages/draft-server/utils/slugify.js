const slugify = require('slugify');

// eslint-disable-next-line
const removePattern = /[#,$*_+~.()\[\]\/'"!\-:@]/g;

export default value =>
  slugify(value, {
    lower: true,
    remove: removePattern,
  });
