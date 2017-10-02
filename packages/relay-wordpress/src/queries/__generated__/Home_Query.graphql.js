/**
 * @flow
 * @relayHash 5a77adfff95807f22d25574a66e924e8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Home_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query Home_Query(
  $stickiesTotal: Int = 2
  $watchThisTotal: Int = 5
  $readThisTotal: Int = 5
  $listenToThisTotal: Int = 5
) {
  viewer {
    ...Home_viewer
    id
  }
}

fragment Home_viewer on Viewer {
  stickies: posts(sticky: true, first: $stickiesTotal) {
    edges {
      node {
        ...Post_post
        id
      }
      cursor
    }
  }
  readThis: posts(category: "read-this", sticky: false, first: $readThisTotal) {
    edges {
      node {
        ...Post_post
        id
      }
      cursor
    }
  }
  watchThis: posts(category: "watch-this", first: $watchThisTotal) {
    edges {
      node {
        ...Post_post
        id
      }
      cursor
    }
  }
  listenToThis: posts(category: "listen-to-this", first: $listenToThisTotal) {
    edges {
      node {
        ...Post_post
        id
      }
      cursor
    }
  }
}

fragment Post_post on Post {
  id
  date
  content {
    data {
      __typename
      ...ContentNode_content
    }
  }
  excerpt {
    raw
  }
  featuredMedia {
    __typename
    ...Media_media
    ... on Image {
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

fragment ContentNode_content on ContentNode {
  __typename
  ... on Embed {
    ...Embed_node
  }
  ... on Text {
    text
  }
  ... on Element {
    tagName
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
          tagName
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
              tagName
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
                  tagName
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
                      tagName
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
                          tagName
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
                              tagName
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
                                  tagName
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
                                      tagName
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
          }
        }
      }
    }
  }
}

fragment Media_media on Media {
  __typename
  ...Image_image
}

fragment PostLink_post on Post {
  id
  date
  title {
    raw
  }
}

fragment Image_image on Media {
  ... on Image {
    sourceUrl
    mediaDetails {
      sizes {
        name
        sourceUrl
      }
    }
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
        "name": "stickiesTotal",
        "type": "Int",
        "defaultValue": 2
      },
      {
        "kind": "LocalArgument",
        "name": "watchThisTotal",
        "type": "Int",
        "defaultValue": 5
      },
      {
        "kind": "LocalArgument",
        "name": "readThisTotal",
        "type": "Int",
        "defaultValue": 5
      },
      {
        "kind": "LocalArgument",
        "name": "listenToThisTotal",
        "type": "Int",
        "defaultValue": 5
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Home_Query",
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
            "name": "Home_viewer",
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
  "name": "Home_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "stickiesTotal",
        "type": "Int",
        "defaultValue": 2
      },
      {
        "kind": "LocalArgument",
        "name": "watchThisTotal",
        "type": "Int",
        "defaultValue": 5
      },
      {
        "kind": "LocalArgument",
        "name": "readThisTotal",
        "type": "Int",
        "defaultValue": 5
      },
      {
        "kind": "LocalArgument",
        "name": "listenToThisTotal",
        "type": "Int",
        "defaultValue": 5
      }
    ],
    "kind": "Root",
    "name": "Home_Query",
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
            "alias": "stickies",
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "stickiesTotal",
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "sticky",
                "value": true,
                "type": "Boolean"
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
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "date",
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
                                "alias": null,
                                "args": null,
                                "name": "sourceUrl",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageDetails",
                                "name": "mediaDetails",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "MediaSize",
                                    "name": "sizes",
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
                                        "name": "sourceUrl",
                                        "storageKey": null
                                      }
                                    ],
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
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "readThis",
            "args": [
              {
                "kind": "Literal",
                "name": "category",
                "value": "read-this",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "readThisTotal",
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "sticky",
                "value": false,
                "type": "Boolean"
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
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "date",
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
                                "alias": null,
                                "args": null,
                                "name": "sourceUrl",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageDetails",
                                "name": "mediaDetails",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "MediaSize",
                                    "name": "sizes",
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
                                        "name": "sourceUrl",
                                        "storageKey": null
                                      }
                                    ],
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
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "watchThis",
            "args": [
              {
                "kind": "Literal",
                "name": "category",
                "value": "watch-this",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "watchThisTotal",
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
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "date",
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
                                "alias": null,
                                "args": null,
                                "name": "sourceUrl",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageDetails",
                                "name": "mediaDetails",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "MediaSize",
                                    "name": "sizes",
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
                                        "name": "sourceUrl",
                                        "storageKey": null
                                      }
                                    ],
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
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "listenToThis",
            "args": [
              {
                "kind": "Literal",
                "name": "category",
                "value": "listen-to-this",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "listenToThisTotal",
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
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "date",
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
                                "alias": null,
                                "args": null,
                                "name": "sourceUrl",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageDetails",
                                "name": "mediaDetails",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "MediaSize",
                                    "name": "sizes",
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
                                        "name": "sourceUrl",
                                        "storageKey": null
                                      }
                                    ],
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
    ]
  },
  "text": "query Home_Query(\n  $stickiesTotal: Int = 2\n  $watchThisTotal: Int = 5\n  $readThisTotal: Int = 5\n  $listenToThisTotal: Int = 5\n) {\n  viewer {\n    ...Home_viewer\n    id\n  }\n}\n\nfragment Home_viewer on Viewer {\n  stickies: posts(sticky: true, first: $stickiesTotal) {\n    edges {\n      node {\n        ...Post_post\n        id\n      }\n      cursor\n    }\n  }\n  readThis: posts(category: \"read-this\", sticky: false, first: $readThisTotal) {\n    edges {\n      node {\n        ...Post_post\n        id\n      }\n      cursor\n    }\n  }\n  watchThis: posts(category: \"watch-this\", first: $watchThisTotal) {\n    edges {\n      node {\n        ...Post_post\n        id\n      }\n      cursor\n    }\n  }\n  listenToThis: posts(category: \"listen-to-this\", first: $listenToThisTotal) {\n    edges {\n      node {\n        ...Post_post\n        id\n      }\n      cursor\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  date\n  content {\n    data {\n      __typename\n      ...ContentNode_content\n    }\n  }\n  excerpt {\n    raw\n  }\n  featuredMedia {\n    __typename\n    ...Media_media\n    ... on Image {\n      id\n    }\n    ... on Audio {\n      id\n    }\n    ... on Video {\n      id\n    }\n  }\n  ...PostLink_post\n}\n\nfragment ContentNode_content on ContentNode {\n  __typename\n  ... on Embed {\n    ...Embed_node\n  }\n  ... on Text {\n    text\n  }\n  ... on Element {\n    tagName\n    ...Element_node\n    children {\n      __typename\n      ... on ContentNode {\n        __typename\n        ... on Embed {\n          ...Embed_node\n        }\n        ... on Text {\n          text\n        }\n        ... on Element {\n          tagName\n          ...Element_node\n        }\n      }\n      ... on Element {\n        children {\n          __typename\n          ... on ContentNode {\n            __typename\n            ... on Embed {\n              ...Embed_node\n            }\n            ... on Text {\n              text\n            }\n            ... on Element {\n              tagName\n              ...Element_node\n            }\n          }\n          ... on Element {\n            children {\n              __typename\n              ... on ContentNode {\n                __typename\n                ... on Embed {\n                  ...Embed_node\n                }\n                ... on Text {\n                  text\n                }\n                ... on Element {\n                  tagName\n                  ...Element_node\n                }\n              }\n              ... on Element {\n                children {\n                  __typename\n                  ... on ContentNode {\n                    __typename\n                    ... on Embed {\n                      ...Embed_node\n                    }\n                    ... on Text {\n                      text\n                    }\n                    ... on Element {\n                      tagName\n                      ...Element_node\n                    }\n                  }\n                  ... on Element {\n                    children {\n                      __typename\n                      ... on ContentNode {\n                        __typename\n                        ... on Embed {\n                          ...Embed_node\n                        }\n                        ... on Text {\n                          text\n                        }\n                        ... on Element {\n                          tagName\n                          ...Element_node\n                        }\n                      }\n                      ... on Element {\n                        children {\n                          __typename\n                          ... on ContentNode {\n                            __typename\n                            ... on Embed {\n                              ...Embed_node\n                            }\n                            ... on Text {\n                              text\n                            }\n                            ... on Element {\n                              tagName\n                              ...Element_node\n                            }\n                          }\n                          ... on Element {\n                            children {\n                              __typename\n                              ... on ContentNode {\n                                __typename\n                                ... on Embed {\n                                  ...Embed_node\n                                }\n                                ... on Text {\n                                  text\n                                }\n                                ... on Element {\n                                  tagName\n                                  ...Element_node\n                                }\n                              }\n                              ... on Element {\n                                children {\n                                  __typename\n                                  ... on ContentNode {\n                                    __typename\n                                    ... on Embed {\n                                      ...Embed_node\n                                    }\n                                    ... on Text {\n                                      text\n                                    }\n                                    ... on Element {\n                                      tagName\n                                      ...Element_node\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Media_media on Media {\n  __typename\n  ...Image_image\n}\n\nfragment PostLink_post on Post {\n  id\n  date\n  title {\n    raw\n  }\n}\n\nfragment Image_image on Media {\n  ... on Image {\n    sourceUrl\n    mediaDetails {\n      sizes {\n        name\n        sourceUrl\n      }\n    }\n  }\n}\n\nfragment Embed_node on Embed {\n  title\n  thumbnailUrl\n  html\n  width\n  height\n}\n\nfragment Element_node on Element {\n  tagName\n  attributes {\n    name\n    value\n  }\n}\n"
};

module.exports = batch;
