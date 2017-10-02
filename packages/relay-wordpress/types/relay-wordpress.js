declare module 'relay-wordpress' {
  declare type Props = {};

  declare type HierarchyItem = {
    parent: String,
    node: Object,
  };

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

  declare type ContentNodeProps = {
    content: Array<ContentNode>,
    component: any,
    onEmbedClick: () => void,
  };

  declare type ArchiveProps = {
    posts: Connection<Post>,
    relay?: RelayPaginationProp,
  };

  declare type MediaProps = {
    crop: string,
    media: Object,
  };

  declare type ImageSize = {
    name: string,
    sourceUrl: string,
  };

  declare type ImageProps = {
    sourceUrl: string,
    mediaDetails: {
      sizes: Array<ImageSize>,
    },
  };

  // App

  declare type AppProps = {
    viewer: {
      settings: Object,
      navMenu: Object,
      sidebar: Object,
    },
    children: any,
    router: any,
  };

  // Settings

  declare type SettingsProps = {
    intl: intlShape,
    settings: {
      title: string,
      description: string,
      language: string,
    },
  };

  // Post

  declare type Post = {
    id: string,
    date: string,
    content: Object,
    excerpt: Object,
    featuredMedia: Object,
  };

  declare type PostProps = {
    post: Post,
  };

  // Home

  declare type HomeProps = {
    viewer: {|
      readThis: Connection<Post>,
      watchThis: Connection<Post>,
      listenToThis: Connection<Post>,
      stickies: Connection<Post>,
    |},
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

  declare type SingleProps = {
    viewer: {|
      post: Singular & {
        date: string,
        excerpt: {|
          raw: string,
        |},
        tags: Array<PostTag>,
        comments: Connection<Comment>,
      },
    |},
  };

  // Page

  declare type PageProps = {
    viewer: {|
      page: Singular & {
        slug: string,
      },
    |},
  };

  // Search

  declare type SearchProps = {
    viewer: {|
      posts: Connection<Post> | null,
    |},
    relay: RelayRefetchProp,
  };

  // Date

  declare type DateProps = {
    viewer: {|
      posts: Connection<Post>,
    |},
    params: {
      month: string | number,
      day: string | number,
      year: string | number,
    },
    relay: RelayPaginationProp,
  };

  // Author

  declare type AuthorProps = {
    viewer: {|
      author: {
        id: string,
        name: string,
      },
      posts: Connection<Post>,
    |},
    relay: RelayPaginationProp,
  };

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

  declare type TermProps = {
    viewer: {|
      term: Term,
      posts: Connection<Post>,
    |},
    relay: RelayPaginationProp,
  };

  declare type ChartImage = {|
    url: string,
    height: number,
  |};

  // Charts
  declare type ChartItem = {|
    title: string,
    artist: string,
    releaseDate: string,
    releaseDateFormatted: string,
    url: string,
    copyright: string,
    images: Array<ChartImage>,
  |};

  declare type ITunesChart = {|
    title: string,
    copyright: string,
    updated: string,
    authorName: string,
    authorUri: string,
    items: Array<ChartItem>,
  |};

  declare type ChartProps = {
    viewer: {|
      chart: ITunesChart,
    |},
  };

  // Comments

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

  declare type CommentsProps = {
    post: string,
    comments: Connection<Comment>,
  };

  declare type AuthorAvatar = {
    size: number,
    url: string,
  };

  declare type EditCommentProps = {
    comment: Comment,
    token: string,
    onEditSubmit: () => void,
  };

  declare type CommentProps = {
    cookies: any,
    active: boolean,
    setReplyTo: () => void,
    comment: Comment,
    intl: intlShape,
    relay: Object,
  };

  declare type CommentFormProps = {
    cookies: any,
    post: string,
    replyTo: string,
    setReplyTo: () => void,
  };
}
