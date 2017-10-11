declare module 'relay-wordpress' {
  declare type Edge<T> = {
    node: T,
    cursor: string,
  };

  declare type PageInfo = {
    startCursor?: string,
    endCursor?: string,
    hasNextPage?: boolean,
    hasPreviousPage?: boolean,
  };

  declare type Connection<T> = {
    edges: Array<Edge<T>>,
    pageInfo: PageInfo,
  };

  declare type Meta = {
    name: string,
    value: any,
  };

  declare type Text = {
    text: string,
  };

  declare type Embed = {
    title: string,
    thumbnailUrl: string,
    html: string,
    width: number,
    height: number,
  };

  declare type Element = {
    tagName: string,
    attributes: Array<Meta>,
    children: Array<Text | Embed | Element>,
  };

  declare type ContentNode = Text | Embed | Element;

  // Post

  declare type Post = {
    id: string,
    date: string,
    content: Object,
    excerpt: Object,
    featuredMedia: Object,
  };

  // Singular

  declare type Singular = {
    id: string,
    title: {|
      raw: string,
    |},
    content: {|
      data: Array<ContentNode>,
    |},
    featuredMedia: {
      sourceUrl?: string,
      media: Object,
    },
  };

  // Single

  declare type PostTag = {|
    id: string,
    name: string,
    slug: string,
  |};

  // Term

  declare type Term = {|
    id: string,
    name: string,
    slug: string,
    taxonomy: {|
      rewrite: {
        slug: string,
      },
      labels: {
        singular: string,
        plural: string,
      },
    |},
  |};

  // Comments

  declare type AuthorAvatar = {
    size: number,
    url: string,
  };

  declare type Comment = {
    id: string,
    authorName: string,
    authorUrl: string,
    authorHash: string,
    date: string,
    content: {|
      rendered: string,
      raw: string,
    |},
    authorAvatarUrls: Array<AuthorAvatar>,
    parent: string,
    post: string,
  };
}
