/**
 * @flow
 * @relayHash 711976bc51a63bb38cee2c10f0b7b075
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Term_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query Term_Query(
  $slug: String!
  $taxonomy: String!
  $cursor: String
  $count: Int = 10
) {
  viewer {
    ...Term_viewer
    id
  }
}

fragment Term_viewer on Viewer {
  term(slug: $slug, taxonomy: $taxonomy) {
    __typename
    id
    name
    slug
    taxonomy {
      rewrite {
        slug
      }
      labels {
        singular
        plural
      }
      id
    }
  }
  posts(term: $slug, taxonomy: $taxonomy, after: $cursor, first: $count) {
    edges {
      node {
        id
        ...Post_post
        __typename
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}

fragment Post_post on Post {
  id
  title {
    raw
  }
  content {
    data {
      __typename
      ...Content_content
    }
  }
  excerpt {
    raw
  }
  featuredMedia {
    __typename
    ... on Image {
      imageUrl: source_url
      ...ResponsiveImage_featuredMedia
      id
    }
    ... on Audio {
      id
    }
    ... on Video {
      id
    }
  }
  ...PostLink_post
}

fragment Content_content on ContentNode {
  __typename
  ... on Embed {
    ...Embed_node
  }
  ... on Text {
    text
  }
  ... on Element {
    ...Element_node
    children {
      __typename
      ... on ContentNode {
        __typename
        ... on Embed {
          ...Embed_node
        }
        ... on Text {
          text
        }
        ... on Element {
          ...Element_node
        }
      }
      ... on Element {
        children {
          __typename
          ... on ContentNode {
            __typename
            ... on Embed {
              ...Embed_node
            }
            ... on Text {
              text
            }
            ... on Element {
              ...Element_node
            }
          }
          ... on Element {
            children {
              __typename
              ... on ContentNode {
                __typename
                ... on Embed {
                  ...Embed_node
                }
                ... on Text {
                  text
                }
                ... on Element {
                  ...Element_node
                }
              }
              ... on Element {
                children {
                  __typename
                  ... on ContentNode {
                    __typename
                    ... on Embed {
                      ...Embed_node
                    }
                    ... on Text {
                      text
                    }
                    ... on Element {
                      ...Element_node
                    }
                  }
                  ... on Element {
                    children {
                      __typename
                      ... on ContentNode {
                        __typename
                        ... on Embed {
                          ...Embed_node
                        }
                        ... on Text {
                          text
                        }
                        ... on Element {
                          ...Element_node
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

fragment ResponsiveImage_featuredMedia on Image {
  source_url
  media_details {
    width
    height
  }
}

fragment PostLink_post on Post {
  id
  date
  title {
    raw
  }
}

fragment Embed_node on Embed {
  title
  thumbnailUrl
  html
  width
  height
}

fragment Element_node on Element {
  tagName
  attributes {
    name
    value
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "slug",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "taxonomy",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int",
        "defaultValue": 10
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Term_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Term_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Term_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "slug",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "taxonomy",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int",
        "defaultValue": 10
      }
    ],
    "kind": "Root",
    "name": "Term_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "slug",
                "variableName": "slug",
                "type": "String!"
              },
              {
                "kind": "Variable",
                "name": "taxonomy",
                "variableName": "taxonomy",
                "type": "String!"
              }
            ],
            "concreteType": null,
            "name": "term",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "slug",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Taxonomy",
                "name": "taxonomy",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Rewrite",
                    "name": "rewrite",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "slug",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Labels",
                    "name": "labels",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "singular",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "plural",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "taxonomy",
                "variableName": "taxonomy",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "term",
                "variableName": "slug",
                "type": "String"
              }
            ],
            "concreteType": "PostConnection",
            "name": "posts",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PostEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Post",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Title",
                        "name": "title",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "raw",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Content",
                        "name": "content",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "name": "data",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "__typename",
                                "storageKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "type": "Element",
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "tagName",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Meta",
                                    "name": "attributes",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "name",
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "value",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "name": "children",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "__typename",
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "type": "Element",
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "tagName",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Meta",
                                            "name": "attributes",
                                            "plural": true,
                                            "selections": [
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "name",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "value",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "args": null,
                                            "concreteType": null,
                                            "name": "children",
                                            "plural": true,
                                            "selections": [
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "__typename",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "InlineFragment",
                                                "type": "Element",
                                                "selections": [
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "args": null,
                                                    "name": "tagName",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "Meta",
                                                    "name": "attributes",
                                                    "plural": true,
                                                    "selections": [
                                                      {
                                                        "kind": "ScalarField",
                                                        "alias": null,
                                                        "args": null,
                                                        "name": "name",
                                                        "storageKey": null
                                                      },
                                                      {
                                                        "kind": "ScalarField",
                                                        "alias": null,
                                                        "args": null,
                                                        "name": "value",
                                                        "storageKey": null
                                                      }
                                                    ],
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": null,
                                                    "name": "children",
                                                    "plural": true,
                                                    "selections": [
                                                      {
                                                        "kind": "ScalarField",
                                                        "alias": null,
                                                        "args": null,
                                                        "name": "__typename",
                                                        "storageKey": null
                                                      },
                                                      {
                                                        "kind": "InlineFragment",
                                                        "type": "Element",
                                                        "selections": [
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "tagName",
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "args": null,
                                                            "concreteType": "Meta",
                                                            "name": "attributes",
                                                            "plural": true,
                                                            "selections": [
                                                              {
                                                                "kind": "ScalarField",
                                                                "alias": null,
                                                                "args": null,
                                                                "name": "name",
                                                                "storageKey": null
                                                              },
                                                              {
                                                                "kind": "ScalarField",
                                                                "alias": null,
                                                                "args": null,
                                                                "name": "value",
                                                                "storageKey": null
                                                              }
                                                            ],
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "name": "children",
                                                            "plural": true,
                                                            "selections": [
                                                              {
                                                                "kind": "ScalarField",
                                                                "alias": null,
                                                                "args": null,
                                                                "name": "__typename",
                                                                "storageKey": null
                                                              },
                                                              {
                                                                "kind": "InlineFragment",
                                                                "type": "Element",
                                                                "selections": [
                                                                  {
                                                                    "kind": "ScalarField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "name": "tagName",
                                                                    "storageKey": null
                                                                  },
                                                                  {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "concreteType": "Meta",
                                                                    "name": "attributes",
                                                                    "plural": true,
                                                                    "selections": [
                                                                      {
                                                                        "kind": "ScalarField",
                                                                        "alias": null,
                                                                        "args": null,
                                                                        "name": "name",
                                                                        "storageKey": null
                                                                      },
                                                                      {
                                                                        "kind": "ScalarField",
                                                                        "alias": null,
                                                                        "args": null,
                                                                        "name": "value",
                                                                        "storageKey": null
                                                                      }
                                                                    ],
                                                                    "storageKey": null
                                                                  },
                                                                  {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "concreteType": null,
                                                                    "name": "children",
                                                                    "plural": true,
                                                                    "selections": [
                                                                      {
                                                                        "kind": "ScalarField",
                                                                        "alias": null,
                                                                        "args": null,
                                                                        "name": "__typename",
                                                                        "storageKey": null
                                                                      },
                                                                      {
                                                                        "kind": "InlineFragment",
                                                                        "type": "Element",
                                                                        "selections": [
                                                                          {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "name": "tagName",
                                                                            "storageKey": null
                                                                          },
                                                                          {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "concreteType": "Meta",
                                                                            "name": "attributes",
                                                                            "plural": true,
                                                                            "selections": [
                                                                              {
                                                                                "kind": "ScalarField",
                                                                                "alias": null,
                                                                                "args": null,
                                                                                "name": "name",
                                                                                "storageKey": null
                                                                              },
                                                                              {
                                                                                "kind": "ScalarField",
                                                                                "alias": null,
                                                                                "args": null,
                                                                                "name": "value",
                                                                                "storageKey": null
                                                                              }
                                                                            ],
                                                                            "storageKey": null
                                                                          }
                                                                        ]
                                                                      },
                                                                      {
                                                                        "kind": "InlineFragment",
                                                                        "type": "Text",
                                                                        "selections": [
                                                                          {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "name": "text",
                                                                            "storageKey": null
                                                                          }
                                                                        ]
                                                                      },
                                                                      {
                                                                        "kind": "InlineFragment",
                                                                        "type": "Embed",
                                                                        "selections": [
                                                                          {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "name": "title",
                                                                            "storageKey": null
                                                                          },
                                                                          {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "name": "thumbnailUrl",
                                                                            "storageKey": null
                                                                          },
                                                                          {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "name": "html",
                                                                            "storageKey": null
                                                                          },
                                                                          {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "name": "width",
                                                                            "storageKey": null
                                                                          },
                                                                          {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "args": null,
                                                                            "name": "height",
                                                                            "storageKey": null
                                                                          }
                                                                        ]
                                                                      }
                                                                    ],
                                                                    "storageKey": null
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "kind": "InlineFragment",
                                                                "type": "Text",
                                                                "selections": [
                                                                  {
                                                                    "kind": "ScalarField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "name": "text",
                                                                    "storageKey": null
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "kind": "InlineFragment",
                                                                "type": "Embed",
                                                                "selections": [
                                                                  {
                                                                    "kind": "ScalarField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "name": "title",
                                                                    "storageKey": null
                                                                  },
                                                                  {
                                                                    "kind": "ScalarField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "name": "thumbnailUrl",
                                                                    "storageKey": null
                                                                  },
                                                                  {
                                                                    "kind": "ScalarField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "name": "html",
                                                                    "storageKey": null
                                                                  },
                                                                  {
                                                                    "kind": "ScalarField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "name": "width",
                                                                    "storageKey": null
                                                                  },
                                                                  {
                                                                    "kind": "ScalarField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "name": "height",
                                                                    "storageKey": null
                                                                  }
                                                                ]
                                                              }
                                                            ],
                                                            "storageKey": null
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "kind": "InlineFragment",
                                                        "type": "Text",
                                                        "selections": [
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "text",
                                                            "storageKey": null
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "kind": "InlineFragment",
                                                        "type": "Embed",
                                                        "selections": [
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "title",
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "thumbnailUrl",
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "html",
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "width",
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "height",
                                                            "storageKey": null
                                                          }
                                                        ]
                                                      }
                                                    ],
                                                    "storageKey": null
                                                  }
                                                ]
                                              },
                                              {
                                                "kind": "InlineFragment",
                                                "type": "Text",
                                                "selections": [
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "args": null,
                                                    "name": "text",
                                                    "storageKey": null
                                                  }
                                                ]
                                              },
                                              {
                                                "kind": "InlineFragment",
                                                "type": "Embed",
                                                "selections": [
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "args": null,
                                                    "name": "title",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "args": null,
                                                    "name": "thumbnailUrl",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "args": null,
                                                    "name": "html",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "args": null,
                                                    "name": "width",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "args": null,
                                                    "name": "height",
                                                    "storageKey": null
                                                  }
                                                ]
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "type": "Text",
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "text",
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "type": "Embed",
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "title",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "thumbnailUrl",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "html",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "width",
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "args": null,
                                            "name": "height",
                                            "storageKey": null
                                          }
                                        ]
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ]
                              },
                              {
                                "kind": "InlineFragment",
                                "type": "Text",
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "text",
                                    "storageKey": null
                                  }
                                ]
                              },
                              {
                                "kind": "InlineFragment",
                                "type": "Embed",
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "thumbnailUrl",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "html",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "width",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "height",
                                    "storageKey": null
                                  }
                                ]
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Excerpt",
                        "name": "excerpt",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "raw",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "name": "featuredMedia",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "__typename",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Video",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Audio",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Image",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": "imageUrl",
                                "args": null,
                                "name": "source_url",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "source_url",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageDetails",
                                "name": "media_details",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "width",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "height",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "date",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "hasPreviousPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "taxonomy",
                "variableName": "taxonomy",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "term",
                "variableName": "slug",
                "type": "String"
              }
            ],
            "handle": "connection",
            "name": "posts",
            "key": "Term_posts",
            "filters": [
              "term",
              "taxonomy"
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Term_Query(\n  $slug: String!\n  $taxonomy: String!\n  $cursor: String\n  $count: Int = 10\n) {\n  viewer {\n    ...Term_viewer\n    id\n  }\n}\n\nfragment Term_viewer on Viewer {\n  term(slug: $slug, taxonomy: $taxonomy) {\n    __typename\n    id\n    name\n    slug\n    taxonomy {\n      rewrite {\n        slug\n      }\n      labels {\n        singular\n        plural\n      }\n      id\n    }\n  }\n  posts(term: $slug, taxonomy: $taxonomy, after: $cursor, first: $count) {\n    edges {\n      node {\n        id\n        ...Post_post\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  title {\n    raw\n  }\n  content {\n    data {\n      __typename\n      ...Content_content\n    }\n  }\n  excerpt {\n    raw\n  }\n  featuredMedia {\n    __typename\n    ... on Image {\n      imageUrl: source_url\n      ...ResponsiveImage_featuredMedia\n      id\n    }\n    ... on Audio {\n      id\n    }\n    ... on Video {\n      id\n    }\n  }\n  ...PostLink_post\n}\n\nfragment Content_content on ContentNode {\n  __typename\n  ... on Embed {\n    ...Embed_node\n  }\n  ... on Text {\n    text\n  }\n  ... on Element {\n    ...Element_node\n    children {\n      __typename\n      ... on ContentNode {\n        __typename\n        ... on Embed {\n          ...Embed_node\n        }\n        ... on Text {\n          text\n        }\n        ... on Element {\n          ...Element_node\n        }\n      }\n      ... on Element {\n        children {\n          __typename\n          ... on ContentNode {\n            __typename\n            ... on Embed {\n              ...Embed_node\n            }\n            ... on Text {\n              text\n            }\n            ... on Element {\n              ...Element_node\n            }\n          }\n          ... on Element {\n            children {\n              __typename\n              ... on ContentNode {\n                __typename\n                ... on Embed {\n                  ...Embed_node\n                }\n                ... on Text {\n                  text\n                }\n                ... on Element {\n                  ...Element_node\n                }\n              }\n              ... on Element {\n                children {\n                  __typename\n                  ... on ContentNode {\n                    __typename\n                    ... on Embed {\n                      ...Embed_node\n                    }\n                    ... on Text {\n                      text\n                    }\n                    ... on Element {\n                      ...Element_node\n                    }\n                  }\n                  ... on Element {\n                    children {\n                      __typename\n                      ... on ContentNode {\n                        __typename\n                        ... on Embed {\n                          ...Embed_node\n                        }\n                        ... on Text {\n                          text\n                        }\n                        ... on Element {\n                          ...Element_node\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment ResponsiveImage_featuredMedia on Image {\n  source_url\n  media_details {\n    width\n    height\n  }\n}\n\nfragment PostLink_post on Post {\n  id\n  date\n  title {\n    raw\n  }\n}\n\nfragment Embed_node on Embed {\n  title\n  thumbnailUrl\n  html\n  width\n  height\n}\n\nfragment Element_node on Element {\n  tagName\n  attributes {\n    name\n    value\n  }\n}\n"
};

module.exports = batch;
