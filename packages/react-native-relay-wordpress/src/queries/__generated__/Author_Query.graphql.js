/**
 * @flow
 * @relayHash 8840cc487c1f712b61593c5712ed22d5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Author_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query Author_Query(
  $id: ID!
) {
  viewer {
    ...Author_viewer
    id
  }
}

fragment Author_viewer on Viewer {
  author(id: $id) {
    id
    name
  }
  posts(author: $id, after: $cursor, first: $count) {
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
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Author_Query",
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
            "name": "Author_viewer",
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
  "name": "Author_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "Author_Query",
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
                "name": "id",
                "variableName": "id",
                "type": "ID"
              }
            ],
            "concreteType": "User",
            "name": "author",
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
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
                "name": "author",
                "variableName": "id",
                "type": "ID"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
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
                "name": "author",
                "variableName": "id",
                "type": "ID"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              }
            ],
            "handle": "connection",
            "name": "posts",
            "key": "Author_posts",
            "filters": [
              "author"
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
  "text": "query Author_Query(\n  $id: ID!\n) {\n  viewer {\n    ...Author_viewer\n    id\n  }\n}\n\nfragment Author_viewer on Viewer {\n  author(id: $id) {\n    id\n    name\n  }\n  posts(author: $id, after: $cursor, first: $count) {\n    edges {\n      node {\n        id\n        ...Post_post\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  title {\n    raw\n  }\n  content {\n    data {\n      __typename\n      ...Content_content\n    }\n  }\n  excerpt {\n    raw\n  }\n  featuredMedia {\n    __typename\n    ... on Image {\n      imageUrl: source_url\n      ...ResponsiveImage_featuredMedia\n      id\n    }\n    ... on Audio {\n      id\n    }\n    ... on Video {\n      id\n    }\n  }\n  ...PostLink_post\n}\n\nfragment Content_content on ContentNode {\n  __typename\n  ... on Embed {\n    ...Embed_node\n  }\n  ... on Text {\n    text\n  }\n  ... on Element {\n    ...Element_node\n    children {\n      __typename\n      ... on ContentNode {\n        __typename\n        ... on Embed {\n          ...Embed_node\n        }\n        ... on Text {\n          text\n        }\n        ... on Element {\n          ...Element_node\n        }\n      }\n      ... on Element {\n        children {\n          __typename\n          ... on ContentNode {\n            __typename\n            ... on Embed {\n              ...Embed_node\n            }\n            ... on Text {\n              text\n            }\n            ... on Element {\n              ...Element_node\n            }\n          }\n          ... on Element {\n            children {\n              __typename\n              ... on ContentNode {\n                __typename\n                ... on Embed {\n                  ...Embed_node\n                }\n                ... on Text {\n                  text\n                }\n                ... on Element {\n                  ...Element_node\n                }\n              }\n              ... on Element {\n                children {\n                  __typename\n                  ... on ContentNode {\n                    __typename\n                    ... on Embed {\n                      ...Embed_node\n                    }\n                    ... on Text {\n                      text\n                    }\n                    ... on Element {\n                      ...Element_node\n                    }\n                  }\n                  ... on Element {\n                    children {\n                      __typename\n                      ... on ContentNode {\n                        __typename\n                        ... on Embed {\n                          ...Embed_node\n                        }\n                        ... on Text {\n                          text\n                        }\n                        ... on Element {\n                          ...Element_node\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment ResponsiveImage_featuredMedia on Image {\n  source_url\n  media_details {\n    width\n    height\n  }\n}\n\nfragment PostLink_post on Post {\n  id\n  date\n  title {\n    raw\n  }\n}\n\nfragment Embed_node on Embed {\n  title\n  thumbnailUrl\n  html\n  width\n  height\n}\n\nfragment Element_node on Element {\n  tagName\n  attributes {\n    name\n    value\n  }\n}\n"
};

module.exports = batch;
