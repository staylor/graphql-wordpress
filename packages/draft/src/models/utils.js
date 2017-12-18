import slugifyUtil from 'slugify';

// eslint-disable-next-line
const removePattern = /[#,$*_+~.()\[\]\/'"!\-:@]/g;

export function slugify(value) {
  return slugifyUtil(value, {
    lower: true,
    remove: removePattern,
  });
}

// eslint-disable-next-line
export async function getUniqueSlug(collection, slugToCheck) {
  const slugified = slugify(slugToCheck);
  let i = 0;
  let slug = slugified;

  const count = async checkSlug => collection.count({ slug: checkSlug });
  // eslint-disable-next-line no-await-in-loop
  while ((await count(slug)) > 0) {
    i += 1;
    slug = `${slugified}-${i}`;
  }
  return slug;
}
