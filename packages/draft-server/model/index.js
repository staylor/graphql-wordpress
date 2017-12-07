import Post from './Post';
import Tag from './Tag';
import Video from './Video';
import Settings from './Settings';

const models = { Post, Tag, Video, Settings };

export default function addModelsToContext(context) {
  const newContext = Object.assign({}, context);
  Object.keys(models).forEach(key => {
    newContext[key] = new models[key](newContext);
  });
  return newContext;
}
