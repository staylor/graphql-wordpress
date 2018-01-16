import React from 'react';
import Video from 'components/Videos/Video';
import { TwitterRedraftDecorator } from 'components/Editor/decorators/TwitterDecorator';
import { uploadUrl } from 'utils/media';
import {
  Paragraph,
  Title,
  Heading,
  SubHeading,
  BoldHeading,
  List,
  OrderedList,
  Embed,
  Image,
} from './styled';

// just a helper to add a <br /> after a block
const addBreaklines = children => children.map(child => [child, <br />]);

export default {
  /**
   * These callbacks will be called recursively to render a nested structure
   */
  inline: {
    // The key passed here is just an index based on rendering order inside a block
    BOLD: (children, { key }) => <strong key={key}>{children}</strong>,
    ITALIC: (children, { key }) => <em key={key}>{children}</em>,
    UNDERLINE: (children, { key }) => <u key={key}>{children}</u>,
    CODE: (children, { key }) => <code key={key}>{children}</code>,
  },
  /**
   * Blocks receive children and depth
   * Note that children are an array of blocks with same styling,
   */
  blocks: {
    unstyled: (children, { keys }) =>
      children.map((child, i) => <Paragraph key={keys[i]}>{child}</Paragraph>),
    blockquote: (children, { keys }) => (
      <blockquote key={keys.join('|')}>{addBreaklines(children)}</blockquote>
    ),
    'header-one': (children, { keys }) =>
      children.map((child, i) => <Title key={keys[i]}>{child}</Title>),
    'header-two': (children, { keys }) =>
      children.map((child, i) => <Heading key={keys[i]}>{child}</Heading>),
    'header-three': (children, { keys }) =>
      children.map((child, i) => <SubHeading key={keys[i]}>{child}</SubHeading>),
    'header-four': (children, { keys }) =>
      children.map((child, i) => <BoldHeading key={keys[i]}>{child}</BoldHeading>),
    // You can also access the original keys of the blocks
    'code-block': (children, { keys }) => <pre key={keys[0]}>{addBreaklines(children)}</pre>,
    // or depth for nested lists
    'unordered-list-item': (children, { depth, keys }) => (
      <List key={keys[keys.length - 1]} className={`ul-level-${depth}`}>
        {children.map(child => <li>{child}</li>)}
      </List>
    ),
    'ordered-list-item': (children, { depth, keys }) => (
      <OrderedList key={keys.join('|')} className={`ol-level-${depth}`}>
        {children.map((child, index) => <li key={keys[index]}>{child}</li>)}
      </OrderedList>
    ),

    // If your blocks use meta data it can also be accessed like keys
    // atomic: (children, { keys, data }) => children.map((child, i) => <Atomic key={keys[i] {...data[i]} />),
    // atomic: (children, data) =>
    //   children.map((child, i) => {
    //     console.log(data);
    //   }),
  },
  entities: {
    // key is the entity key value from raw
    LINK: (children, data, { key }) => (
      <a key={key} href={data.href}>
        {children}
      </a>
    ),
    EMBED: (children, data, { key }) => (
      <Embed key={key} dangerouslySetInnerHTML={{ __html: data.html }} />
    ),
    IMAGE: (children, data, { key }) => {
      const { image } = data;
      const crop = image.crops.find(c => c.width === 640);
      return <Image key={key} src={uploadUrl(image.destination, crop.fileName)} />;
    },
    VIDEO: (children, data, { key }) => {
      const { video } = data;
      return <Video key={key} video={video} embed />;
    },
  },
  decorators: [TwitterRedraftDecorator],
};
