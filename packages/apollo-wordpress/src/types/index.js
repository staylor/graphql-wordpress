/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type AddCommentInput = {|
  authorEmail: string,
  authorName: string,
  content: string,
  post: string,
  authorUrl?: ?string,
  parent?: ?string,
  clientMutationId?: ?string,
|};

export type DeleteCommentInput = {|
  id: string,
  token: string,
  post: string,
  clientMutationId?: ?string,
|};

export type UpdateCommentInput = {|
  id: string,
  content: string,
  token: string,
  clientMutationId?: ?string,
|};

export type AddCommentMutationVariables = {|
  input: AddCommentInput,
|};

export type AddCommentMutation = {|
  addComment: ?{|
    comment: ?{|
      // Unique identifier for the object.
      id: string,
      // Display name for the object author.
      authorName: ?string,
      // URL for the object author.
      authorUrl: ?string,
      // Hashed representation of the comment author.
      authorHash: ?string,
      // The date the object was published, in the timezone of the site.
      date: ?string,
      content: ?{|
        // HTML for the object, transformed for display.
        rendered: ?string,
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      // Avatar URLs for the object author.
      authorAvatarUrls: ?Array<?{|
        size: ?number,
        url: ?string,
      |}>,
      // The ID for the parent of the object.
      parent: ?string,
      // The ID of the associated post object.
      post: ?string,
    |},
    cookies: ?string,
    status: ?string,
  |},
|};

export type DeleteCommentMutationVariables = {|
  input: DeleteCommentInput,
|};

export type DeleteCommentMutation = {|
  deleteComment: ?{|
    status: ?string,
  |},
|};

export type UpdateCommentMutationVariables = {|
  input: UpdateCommentInput,
|};

export type UpdateCommentMutation = {|
  updateComment: ?{|
    comment: ?{|
      // Unique identifier for the object.
      id: string,
      // Display name for the object author.
      authorName: ?string,
      // URL for the object author.
      authorUrl: ?string,
      // Hashed representation of the comment author.
      authorHash: ?string,
      // The date the object was published, in the timezone of the site.
      date: ?string,
      content: ?{|
        // HTML for the object, transformed for display.
        rendered: ?string,
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      // Avatar URLs for the object author.
      authorAvatarUrls: ?Array<?{|
        size: ?number,
        url: ?string,
      |}>,
      // The ID for the parent of the object.
      parent: ?string,
      // The ID of the associated post object.
      post: ?string,
    |},
    cookies: ?string,
    status: ?string,
  |},
|};

export type AppQueryVariables = {|
  menuID: string,
  sidebarID: string,
|};

export type AppQuery = {|
  viewer: ?{|
    settings: ?{|
      // Site title.
      title: ?string,
      // Site tagline.
      description: ?string,
      // Site locale code.
      language: ?string,
    |},
    navMenu: ?{|
      // Unique identifier for the object.
      id: string,
      // HTML title for the object.
      name: ?string,
      // Items associated with the menu.
      items: ?Array<?{|
        // Menu item ID.
        id: ?string,
        // The display name for the item.
        title: ?string,
        // The item url.
        url: ?string,
        // Menu item that this item is a child of.
        parent: ?string,
        // The order that this item appears in the menu.
        order: ?number,
        // The classification of object.
        type: ?string,
        // The type of object within a classification.
        typeName: ?string,
        // The rewrite slug for the object type.
        typeSlug: ?string,
        // An alphanumeric identifier for the object unique to its type.
        dataSlug: ?string,
        // Unique identifier for the object.
        dataID: ?string,
      |}>,
    |},
    sidebar: ?{|
      // HTML widgets associated with the sidebar.
      widgets: ?Array<?{|
        // Identifier for widget.
        id: ?string,
        // CSS class for the widget.
        classname: ?string,
        content: ?{|
          // HTML for the object, transformed for display.
          rendered: ?string,
        |},
      |}>,
    |},
  |},
|};

export type AuthorQueryVariables = {|
  id: string,
  cursor?: ?string,
  count?: ?number,
|};

export type AuthorQuery = {|
  viewer: ?{|
    author: ?{|
      // Unique identifier for the object.
      id: string,
      // HTML title for the object.
      name: ?string,
    |},
    // A list of results
    posts: ?{|
      // A list of edges.
      edges: ?Array<?{|
        // The item at the end of the edge
        node: ?{|
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          // The date the object was published, in the timezone of the site.
          date: ?string,
          title: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          content: ?{|
            data: ?Array<?(
              | {
                  __typename: 'Element',
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                      children: ?Array<?(
                                                        | {
                                                            tagName: ?string,
                                                            attributes: ?Array<?{|
                                                              // Name for the metadata field.
                                                              name: ?string,
                                                              // Value for the metadata field.
                                                              value: ?string,
                                                            |}>,
                                                            children: ?Array<?(
                                                              | {
                                                                  tagName: ?string,
                                                                  attributes: ?Array<?{|
                                                                    // Name for the metadata field.
                                                                    name: ?string,
                                                                    // Value for the metadata field.
                                                                    value: ?string,
                                                                  |}>,
                                                                }
                                                              | {
                                                                  text: ?string,
                                                                }
                                                              | {
                                                                  title: ?string,
                                                                  thumbnailUrl: ?string,
                                                                  html: ?string,
                                                                  width: ?number,
                                                                  height: ?number,
                                                                })>,
                                                          }
                                                        | {
                                                            text: ?string,
                                                          }
                                                        | {
                                                            title: ?string,
                                                            thumbnailUrl: ?string,
                                                            html: ?string,
                                                            width: ?number,
                                                            height: ?number,
                                                          })>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  __typename: 'Text',
                  text: ?string,
                }
              | {
                  __typename: 'Embed',
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          |},
          excerpt: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          // The featured media for the object.
          featuredMedia: ?(
            | {
                __typename: 'Image',
                // URL to the original attachment file.
                sourceUrl: ?string,
                mediaDetails: ?{|
                  sizes: ?Array<?{|
                    name: ?string,
                    sourceUrl: ?string,
                  |}>,
                |},
              }
            | {
                __typename: 'Audio',
              }
            | {
                __typename: 'Video',
              }),
        |},
        // A cursor for use in pagination
        cursor: string,
      |}>,
      // Information to aid in pagination.
      pageInfo: {|
        // When paginating backwards, the cursor to continue.
        startCursor: ?string,
        // When paginating forwards, the cursor to continue.
        endCursor: ?string,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      |},
    |},
  |},
|};

export type ChartQuery = {|
  viewer: ?{|
    chart: ?{|
      // Chart title.
      title: ?string,
      // Chart copyright notice.
      copyright: ?string,
      // Last updated timestamp.
      updated: ?string,
      // Chart author name.
      authorName: ?string,
      // Chart author URI.
      authorUri: ?string,
      // Chart items.
      items: ?Array<?{|
        // Album title.
        title: ?string,
        // Artist title.
        artist: ?string,
        // Album release date in ISO format.
        releaseDate: ?string,
        // Album release date, formatted for display.
        releaseDateFormatted: ?string,
        // Album URL.
        url: ?string,
        // Chart copyright notice.
        copyright: ?string,
        // Item images.
        images: ?Array<?{|
          // Image URL.
          url: ?string,
          // Image height.
          height: ?number,
        |}>,
      |}>,
    |},
  |},
|};

export type DateQueryVariables = {|
  year: number,
  month?: ?number,
  day?: ?number,
  cursor?: ?string,
  count?: ?number,
|};

export type DateQuery = {|
  viewer: ?{|
    // A list of results
    posts: ?{|
      // A list of edges.
      edges: ?Array<?{|
        // The item at the end of the edge
        node: ?{|
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          // The date the object was published, in the timezone of the site.
          date: ?string,
          title: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          content: ?{|
            data: ?Array<?(
              | {
                  __typename: 'Element',
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                      children: ?Array<?(
                                                        | {
                                                            tagName: ?string,
                                                            attributes: ?Array<?{|
                                                              // Name for the metadata field.
                                                              name: ?string,
                                                              // Value for the metadata field.
                                                              value: ?string,
                                                            |}>,
                                                            children: ?Array<?(
                                                              | {
                                                                  tagName: ?string,
                                                                  attributes: ?Array<?{|
                                                                    // Name for the metadata field.
                                                                    name: ?string,
                                                                    // Value for the metadata field.
                                                                    value: ?string,
                                                                  |}>,
                                                                }
                                                              | {
                                                                  text: ?string,
                                                                }
                                                              | {
                                                                  title: ?string,
                                                                  thumbnailUrl: ?string,
                                                                  html: ?string,
                                                                  width: ?number,
                                                                  height: ?number,
                                                                })>,
                                                          }
                                                        | {
                                                            text: ?string,
                                                          }
                                                        | {
                                                            title: ?string,
                                                            thumbnailUrl: ?string,
                                                            html: ?string,
                                                            width: ?number,
                                                            height: ?number,
                                                          })>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  __typename: 'Text',
                  text: ?string,
                }
              | {
                  __typename: 'Embed',
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          |},
          excerpt: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          // The featured media for the object.
          featuredMedia: ?(
            | {
                __typename: 'Image',
                // URL to the original attachment file.
                sourceUrl: ?string,
                mediaDetails: ?{|
                  sizes: ?Array<?{|
                    name: ?string,
                    sourceUrl: ?string,
                  |}>,
                |},
              }
            | {
                __typename: 'Audio',
              }
            | {
                __typename: 'Video',
              }),
        |},
        // A cursor for use in pagination
        cursor: string,
      |}>,
      // Information to aid in pagination.
      pageInfo: {|
        // When paginating backwards, the cursor to continue.
        startCursor: ?string,
        // When paginating forwards, the cursor to continue.
        endCursor: ?string,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      |},
    |},
  |},
|};

export type HomeQueryVariables = {|
  stickiesTotal?: ?number,
  watchThisTotal?: ?number,
  readThisTotal?: ?number,
  listenToThisTotal?: ?number,
|};

export type HomeQuery = {|
  viewer: ?{|
    // A list of results
    stickies: ?{|
      // A list of edges.
      edges: ?Array<?{|
        // The item at the end of the edge
        node: ?{|
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          // The date the object was published, in the timezone of the site.
          date: ?string,
          title: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          content: ?{|
            data: ?Array<?(
              | {
                  __typename: 'Element',
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                      children: ?Array<?(
                                                        | {
                                                            tagName: ?string,
                                                            attributes: ?Array<?{|
                                                              // Name for the metadata field.
                                                              name: ?string,
                                                              // Value for the metadata field.
                                                              value: ?string,
                                                            |}>,
                                                            children: ?Array<?(
                                                              | {
                                                                  tagName: ?string,
                                                                  attributes: ?Array<?{|
                                                                    // Name for the metadata field.
                                                                    name: ?string,
                                                                    // Value for the metadata field.
                                                                    value: ?string,
                                                                  |}>,
                                                                }
                                                              | {
                                                                  text: ?string,
                                                                }
                                                              | {
                                                                  title: ?string,
                                                                  thumbnailUrl: ?string,
                                                                  html: ?string,
                                                                  width: ?number,
                                                                  height: ?number,
                                                                })>,
                                                          }
                                                        | {
                                                            text: ?string,
                                                          }
                                                        | {
                                                            title: ?string,
                                                            thumbnailUrl: ?string,
                                                            html: ?string,
                                                            width: ?number,
                                                            height: ?number,
                                                          })>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  __typename: 'Text',
                  text: ?string,
                }
              | {
                  __typename: 'Embed',
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          |},
          excerpt: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          // The featured media for the object.
          featuredMedia: ?(
            | {
                __typename: 'Image',
                // URL to the original attachment file.
                sourceUrl: ?string,
                mediaDetails: ?{|
                  sizes: ?Array<?{|
                    name: ?string,
                    sourceUrl: ?string,
                  |}>,
                |},
              }
            | {
                __typename: 'Audio',
              }
            | {
                __typename: 'Video',
              }),
        |},
        // A cursor for use in pagination
        cursor: string,
      |}>,
      // Information to aid in pagination.
      pageInfo: {|
        // When paginating backwards, the cursor to continue.
        startCursor: ?string,
        // When paginating forwards, the cursor to continue.
        endCursor: ?string,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      |},
    |},
    // A list of results
    readThis: ?{|
      // A list of edges.
      edges: ?Array<?{|
        // The item at the end of the edge
        node: ?{|
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          // The date the object was published, in the timezone of the site.
          date: ?string,
          title: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          content: ?{|
            data: ?Array<?(
              | {
                  __typename: 'Element',
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                      children: ?Array<?(
                                                        | {
                                                            tagName: ?string,
                                                            attributes: ?Array<?{|
                                                              // Name for the metadata field.
                                                              name: ?string,
                                                              // Value for the metadata field.
                                                              value: ?string,
                                                            |}>,
                                                            children: ?Array<?(
                                                              | {
                                                                  tagName: ?string,
                                                                  attributes: ?Array<?{|
                                                                    // Name for the metadata field.
                                                                    name: ?string,
                                                                    // Value for the metadata field.
                                                                    value: ?string,
                                                                  |}>,
                                                                }
                                                              | {
                                                                  text: ?string,
                                                                }
                                                              | {
                                                                  title: ?string,
                                                                  thumbnailUrl: ?string,
                                                                  html: ?string,
                                                                  width: ?number,
                                                                  height: ?number,
                                                                })>,
                                                          }
                                                        | {
                                                            text: ?string,
                                                          }
                                                        | {
                                                            title: ?string,
                                                            thumbnailUrl: ?string,
                                                            html: ?string,
                                                            width: ?number,
                                                            height: ?number,
                                                          })>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  __typename: 'Text',
                  text: ?string,
                }
              | {
                  __typename: 'Embed',
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          |},
          excerpt: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          // The featured media for the object.
          featuredMedia: ?(
            | {
                __typename: 'Image',
                // URL to the original attachment file.
                sourceUrl: ?string,
                mediaDetails: ?{|
                  sizes: ?Array<?{|
                    name: ?string,
                    sourceUrl: ?string,
                  |}>,
                |},
              }
            | {
                __typename: 'Audio',
              }
            | {
                __typename: 'Video',
              }),
        |},
        // A cursor for use in pagination
        cursor: string,
      |}>,
      // Information to aid in pagination.
      pageInfo: {|
        // When paginating backwards, the cursor to continue.
        startCursor: ?string,
        // When paginating forwards, the cursor to continue.
        endCursor: ?string,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      |},
    |},
    // A list of results
    watchThis: ?{|
      // A list of edges.
      edges: ?Array<?{|
        // The item at the end of the edge
        node: ?{|
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          // The date the object was published, in the timezone of the site.
          date: ?string,
          title: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          content: ?{|
            data: ?Array<?(
              | {
                  __typename: 'Element',
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                      children: ?Array<?(
                                                        | {
                                                            tagName: ?string,
                                                            attributes: ?Array<?{|
                                                              // Name for the metadata field.
                                                              name: ?string,
                                                              // Value for the metadata field.
                                                              value: ?string,
                                                            |}>,
                                                            children: ?Array<?(
                                                              | {
                                                                  tagName: ?string,
                                                                  attributes: ?Array<?{|
                                                                    // Name for the metadata field.
                                                                    name: ?string,
                                                                    // Value for the metadata field.
                                                                    value: ?string,
                                                                  |}>,
                                                                }
                                                              | {
                                                                  text: ?string,
                                                                }
                                                              | {
                                                                  title: ?string,
                                                                  thumbnailUrl: ?string,
                                                                  html: ?string,
                                                                  width: ?number,
                                                                  height: ?number,
                                                                })>,
                                                          }
                                                        | {
                                                            text: ?string,
                                                          }
                                                        | {
                                                            title: ?string,
                                                            thumbnailUrl: ?string,
                                                            html: ?string,
                                                            width: ?number,
                                                            height: ?number,
                                                          })>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  __typename: 'Text',
                  text: ?string,
                }
              | {
                  __typename: 'Embed',
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          |},
          excerpt: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          // The featured media for the object.
          featuredMedia: ?(
            | {
                __typename: 'Image',
                // URL to the original attachment file.
                sourceUrl: ?string,
                mediaDetails: ?{|
                  sizes: ?Array<?{|
                    name: ?string,
                    sourceUrl: ?string,
                  |}>,
                |},
              }
            | {
                __typename: 'Audio',
              }
            | {
                __typename: 'Video',
              }),
        |},
        // A cursor for use in pagination
        cursor: string,
      |}>,
      // Information to aid in pagination.
      pageInfo: {|
        // When paginating backwards, the cursor to continue.
        startCursor: ?string,
        // When paginating forwards, the cursor to continue.
        endCursor: ?string,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      |},
    |},
    // A list of results
    listenToThis: ?{|
      // A list of edges.
      edges: ?Array<?{|
        // The item at the end of the edge
        node: ?{|
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          // The date the object was published, in the timezone of the site.
          date: ?string,
          title: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          content: ?{|
            data: ?Array<?(
              | {
                  __typename: 'Element',
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                      children: ?Array<?(
                                                        | {
                                                            tagName: ?string,
                                                            attributes: ?Array<?{|
                                                              // Name for the metadata field.
                                                              name: ?string,
                                                              // Value for the metadata field.
                                                              value: ?string,
                                                            |}>,
                                                            children: ?Array<?(
                                                              | {
                                                                  tagName: ?string,
                                                                  attributes: ?Array<?{|
                                                                    // Name for the metadata field.
                                                                    name: ?string,
                                                                    // Value for the metadata field.
                                                                    value: ?string,
                                                                  |}>,
                                                                }
                                                              | {
                                                                  text: ?string,
                                                                }
                                                              | {
                                                                  title: ?string,
                                                                  thumbnailUrl: ?string,
                                                                  html: ?string,
                                                                  width: ?number,
                                                                  height: ?number,
                                                                })>,
                                                          }
                                                        | {
                                                            text: ?string,
                                                          }
                                                        | {
                                                            title: ?string,
                                                            thumbnailUrl: ?string,
                                                            html: ?string,
                                                            width: ?number,
                                                            height: ?number,
                                                          })>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  __typename: 'Text',
                  text: ?string,
                }
              | {
                  __typename: 'Embed',
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          |},
          excerpt: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          // The featured media for the object.
          featuredMedia: ?(
            | {
                __typename: 'Image',
                // URL to the original attachment file.
                sourceUrl: ?string,
                mediaDetails: ?{|
                  sizes: ?Array<?{|
                    name: ?string,
                    sourceUrl: ?string,
                  |}>,
                |},
              }
            | {
                __typename: 'Audio',
              }
            | {
                __typename: 'Video',
              }),
        |},
        // A cursor for use in pagination
        cursor: string,
      |}>,
      // Information to aid in pagination.
      pageInfo: {|
        // When paginating backwards, the cursor to continue.
        startCursor: ?string,
        // When paginating forwards, the cursor to continue.
        endCursor: ?string,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      |},
    |},
  |},
|};

export type PageQueryVariables = {|
  slug: string,
|};

export type PageQuery = {|
  viewer: ?{|
    page: ?{|
      // Unique identifier for the object.
      id: string,
      // An alphanumeric identifier for the object unique to its type.
      slug: ?string,
      title: ?{|
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      content: ?{|
        data: ?Array<?(
          | {
              __typename: 'Element',
              tagName: ?string,
              attributes: ?Array<?{|
                // Name for the metadata field.
                name: ?string,
                // Value for the metadata field.
                value: ?string,
              |}>,
              children: ?Array<?(
                | {
                    tagName: ?string,
                    attributes: ?Array<?{|
                      // Name for the metadata field.
                      name: ?string,
                      // Value for the metadata field.
                      value: ?string,
                    |}>,
                    children: ?Array<?(
                      | {
                          tagName: ?string,
                          attributes: ?Array<?{|
                            // Name for the metadata field.
                            name: ?string,
                            // Value for the metadata field.
                            value: ?string,
                          |}>,
                          children: ?Array<?(
                            | {
                                tagName: ?string,
                                attributes: ?Array<?{|
                                  // Name for the metadata field.
                                  name: ?string,
                                  // Value for the metadata field.
                                  value: ?string,
                                |}>,
                                children: ?Array<?(
                                  | {
                                      tagName: ?string,
                                      attributes: ?Array<?{|
                                        // Name for the metadata field.
                                        name: ?string,
                                        // Value for the metadata field.
                                        value: ?string,
                                      |}>,
                                      children: ?Array<?(
                                        | {
                                            tagName: ?string,
                                            attributes: ?Array<?{|
                                              // Name for the metadata field.
                                              name: ?string,
                                              // Value for the metadata field.
                                              value: ?string,
                                            |}>,
                                            children: ?Array<?(
                                              | {
                                                  tagName: ?string,
                                                  attributes: ?Array<?{|
                                                    // Name for the metadata field.
                                                    name: ?string,
                                                    // Value for the metadata field.
                                                    value: ?string,
                                                  |}>,
                                                  children: ?Array<?(
                                                    | {
                                                        tagName: ?string,
                                                        attributes: ?Array<?{|
                                                          // Name for the metadata field.
                                                          name: ?string,
                                                          // Value for the metadata field.
                                                          value: ?string,
                                                        |}>,
                                                        children: ?Array<?(
                                                          | {
                                                              tagName: ?string,
                                                              attributes: ?Array<?{|
                                                                // Name for the metadata field.
                                                                name: ?string,
                                                                // Value for the metadata field.
                                                                value: ?string,
                                                              |}>,
                                                            }
                                                          | {
                                                              text: ?string,
                                                            }
                                                          | {
                                                              title: ?string,
                                                              thumbnailUrl: ?string,
                                                              html: ?string,
                                                              width: ?number,
                                                              height: ?number,
                                                            })>,
                                                      }
                                                    | {
                                                        text: ?string,
                                                      }
                                                    | {
                                                        title: ?string,
                                                        thumbnailUrl: ?string,
                                                        html: ?string,
                                                        width: ?number,
                                                        height: ?number,
                                                      })>,
                                                }
                                              | {
                                                  text: ?string,
                                                }
                                              | {
                                                  title: ?string,
                                                  thumbnailUrl: ?string,
                                                  html: ?string,
                                                  width: ?number,
                                                  height: ?number,
                                                })>,
                                          }
                                        | {
                                            text: ?string,
                                          }
                                        | {
                                            title: ?string,
                                            thumbnailUrl: ?string,
                                            html: ?string,
                                            width: ?number,
                                            height: ?number,
                                          })>,
                                    }
                                  | {
                                      text: ?string,
                                    }
                                  | {
                                      title: ?string,
                                      thumbnailUrl: ?string,
                                      html: ?string,
                                      width: ?number,
                                      height: ?number,
                                    })>,
                              }
                            | {
                                text: ?string,
                              }
                            | {
                                title: ?string,
                                thumbnailUrl: ?string,
                                html: ?string,
                                width: ?number,
                                height: ?number,
                              })>,
                        }
                      | {
                          text: ?string,
                        }
                      | {
                          title: ?string,
                          thumbnailUrl: ?string,
                          html: ?string,
                          width: ?number,
                          height: ?number,
                        })>,
                  }
                | {
                    text: ?string,
                  }
                | {
                    title: ?string,
                    thumbnailUrl: ?string,
                    html: ?string,
                    width: ?number,
                    height: ?number,
                  })>,
            }
          | {
              __typename: 'Text',
              text: ?string,
            }
          | {
              __typename: 'Embed',
              title: ?string,
              thumbnailUrl: ?string,
              html: ?string,
              width: ?number,
              height: ?number,
            })>,
      |},
      // The featured media for the object.
      featuredMedia: ?(
        | {
            // URL to the original attachment file.
            sourceUrl: ?string,
            __typename: 'Image',
            mediaDetails: ?{|
              sizes: ?Array<?{|
                name: ?string,
                sourceUrl: ?string,
              |}>,
            |},
          }
        | {
            __typename: 'Audio',
          }
        | {
            __typename: 'Video',
          }),
    |},
  |},
|};

export type SearchQueryVariables = {|
  search?: ?string,
  count?: ?number,
  cursor?: ?string,
|};

export type SearchQuery = {|
  viewer: ?{|
    // A list of results
    posts: ?{|
      // A list of edges.
      edges: ?Array<?{|
        // The item at the end of the edge
        node: ?{|
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          // The date the object was published, in the timezone of the site.
          date: ?string,
          title: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          content: ?{|
            data: ?Array<?(
              | {
                  __typename: 'Element',
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                      children: ?Array<?(
                                                        | {
                                                            tagName: ?string,
                                                            attributes: ?Array<?{|
                                                              // Name for the metadata field.
                                                              name: ?string,
                                                              // Value for the metadata field.
                                                              value: ?string,
                                                            |}>,
                                                            children: ?Array<?(
                                                              | {
                                                                  tagName: ?string,
                                                                  attributes: ?Array<?{|
                                                                    // Name for the metadata field.
                                                                    name: ?string,
                                                                    // Value for the metadata field.
                                                                    value: ?string,
                                                                  |}>,
                                                                }
                                                              | {
                                                                  text: ?string,
                                                                }
                                                              | {
                                                                  title: ?string,
                                                                  thumbnailUrl: ?string,
                                                                  html: ?string,
                                                                  width: ?number,
                                                                  height: ?number,
                                                                })>,
                                                          }
                                                        | {
                                                            text: ?string,
                                                          }
                                                        | {
                                                            title: ?string,
                                                            thumbnailUrl: ?string,
                                                            html: ?string,
                                                            width: ?number,
                                                            height: ?number,
                                                          })>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  __typename: 'Text',
                  text: ?string,
                }
              | {
                  __typename: 'Embed',
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          |},
          excerpt: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          // The featured media for the object.
          featuredMedia: ?(
            | {
                __typename: 'Image',
                // URL to the original attachment file.
                sourceUrl: ?string,
                mediaDetails: ?{|
                  sizes: ?Array<?{|
                    name: ?string,
                    sourceUrl: ?string,
                  |}>,
                |},
              }
            | {
                __typename: 'Audio',
              }
            | {
                __typename: 'Video',
              }),
        |},
        // A cursor for use in pagination
        cursor: string,
      |}>,
      // Information to aid in pagination.
      pageInfo: {|
        // When paginating backwards, the cursor to continue.
        startCursor: ?string,
        // When paginating forwards, the cursor to continue.
        endCursor: ?string,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      |},
    |},
  |},
|};

export type SingleQueryVariables = {|
  slug: string,
  commentCount?: ?number,
|};

export type SingleQuery = {|
  viewer: ?{|
    post: ?{|
      // Unique identifier for the object.
      id: string,
      // An alphanumeric identifier for the object unique to its type.
      slug: ?string,
      // The date the object was published, in the timezone of the site.
      date: ?string,
      title: ?{|
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      content: ?{|
        data: ?Array<?(
          | {
              __typename: 'Element',
              tagName: ?string,
              attributes: ?Array<?{|
                // Name for the metadata field.
                name: ?string,
                // Value for the metadata field.
                value: ?string,
              |}>,
              children: ?Array<?(
                | {
                    tagName: ?string,
                    attributes: ?Array<?{|
                      // Name for the metadata field.
                      name: ?string,
                      // Value for the metadata field.
                      value: ?string,
                    |}>,
                    children: ?Array<?(
                      | {
                          tagName: ?string,
                          attributes: ?Array<?{|
                            // Name for the metadata field.
                            name: ?string,
                            // Value for the metadata field.
                            value: ?string,
                          |}>,
                          children: ?Array<?(
                            | {
                                tagName: ?string,
                                attributes: ?Array<?{|
                                  // Name for the metadata field.
                                  name: ?string,
                                  // Value for the metadata field.
                                  value: ?string,
                                |}>,
                                children: ?Array<?(
                                  | {
                                      tagName: ?string,
                                      attributes: ?Array<?{|
                                        // Name for the metadata field.
                                        name: ?string,
                                        // Value for the metadata field.
                                        value: ?string,
                                      |}>,
                                      children: ?Array<?(
                                        | {
                                            tagName: ?string,
                                            attributes: ?Array<?{|
                                              // Name for the metadata field.
                                              name: ?string,
                                              // Value for the metadata field.
                                              value: ?string,
                                            |}>,
                                            children: ?Array<?(
                                              | {
                                                  tagName: ?string,
                                                  attributes: ?Array<?{|
                                                    // Name for the metadata field.
                                                    name: ?string,
                                                    // Value for the metadata field.
                                                    value: ?string,
                                                  |}>,
                                                  children: ?Array<?(
                                                    | {
                                                        tagName: ?string,
                                                        attributes: ?Array<?{|
                                                          // Name for the metadata field.
                                                          name: ?string,
                                                          // Value for the metadata field.
                                                          value: ?string,
                                                        |}>,
                                                        children: ?Array<?(
                                                          | {
                                                              tagName: ?string,
                                                              attributes: ?Array<?{|
                                                                // Name for the metadata field.
                                                                name: ?string,
                                                                // Value for the metadata field.
                                                                value: ?string,
                                                              |}>,
                                                            }
                                                          | {
                                                              text: ?string,
                                                            }
                                                          | {
                                                              title: ?string,
                                                              thumbnailUrl: ?string,
                                                              html: ?string,
                                                              width: ?number,
                                                              height: ?number,
                                                            })>,
                                                      }
                                                    | {
                                                        text: ?string,
                                                      }
                                                    | {
                                                        title: ?string,
                                                        thumbnailUrl: ?string,
                                                        html: ?string,
                                                        width: ?number,
                                                        height: ?number,
                                                      })>,
                                                }
                                              | {
                                                  text: ?string,
                                                }
                                              | {
                                                  title: ?string,
                                                  thumbnailUrl: ?string,
                                                  html: ?string,
                                                  width: ?number,
                                                  height: ?number,
                                                })>,
                                          }
                                        | {
                                            text: ?string,
                                          }
                                        | {
                                            title: ?string,
                                            thumbnailUrl: ?string,
                                            html: ?string,
                                            width: ?number,
                                            height: ?number,
                                          })>,
                                    }
                                  | {
                                      text: ?string,
                                    }
                                  | {
                                      title: ?string,
                                      thumbnailUrl: ?string,
                                      html: ?string,
                                      width: ?number,
                                      height: ?number,
                                    })>,
                              }
                            | {
                                text: ?string,
                              }
                            | {
                                title: ?string,
                                thumbnailUrl: ?string,
                                html: ?string,
                                width: ?number,
                                height: ?number,
                              })>,
                        }
                      | {
                          text: ?string,
                        }
                      | {
                          title: ?string,
                          thumbnailUrl: ?string,
                          html: ?string,
                          width: ?number,
                          height: ?number,
                        })>,
                  }
                | {
                    text: ?string,
                  }
                | {
                    title: ?string,
                    thumbnailUrl: ?string,
                    html: ?string,
                    width: ?number,
                    height: ?number,
                  })>,
            }
          | {
              __typename: 'Text',
              text: ?string,
            }
          | {
              __typename: 'Embed',
              title: ?string,
              thumbnailUrl: ?string,
              html: ?string,
              width: ?number,
              height: ?number,
            })>,
      |},
      excerpt: ?{|
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      // The featured media for the object.
      featuredMedia: ?(
        | {
            __typename: 'Image',
            // URL to the original attachment file.
            sourceUrl: ?string,
            mediaDetails: ?{|
              sizes: ?Array<?{|
                name: ?string,
                sourceUrl: ?string,
              |}>,
            |},
          }
        | {
            __typename: 'Audio',
          }
        | {
            __typename: 'Video',
          }),
      // The terms assigned to the object in the post_tag taxonomy.
      tags: ?Array<?{|
        // Unique identifier for the object.
        id: string,
        // HTML title for the object.
        name: ?string,
        // An alphanumeric identifier for the object unique to its type.
        slug: ?string,
      |}>,
      // A list of results
      comments: ?{|
        // A list of edges.
        edges: ?Array<?{|
          // The item at the end of the edge
          node: ?{|
            // Unique identifier for the object.
            id: string,
            // The ID for the parent of the object.
            parent: ?string,
            // Display name for the object author.
            authorName: ?string,
            // URL for the object author.
            authorUrl: ?string,
            // Hashed representation of the comment author.
            authorHash: ?string,
            // The date the object was published, in the timezone of the site.
            date: ?string,
            content: ?{|
              // HTML for the object, transformed for display.
              rendered: ?string,
              // Content for the object, as it exists in the database.
              raw: ?string,
            |},
            // Avatar URLs for the object author.
            authorAvatarUrls: ?Array<?{|
              size: ?number,
              url: ?string,
            |}>,
            // The ID of the associated post object.
            post: ?string,
          |},
        |}>,
      |},
    |},
  |},
|};

export type TermQueryVariables = {|
  slug: string,
  taxonomy: string,
  cursor?: ?string,
  count?: ?number,
|};

export type TermQuery = {|
  viewer: ?{|
    term: ?(
      | {
          // Unique identifier for the object.
          id: string,
          // HTML title for the object.
          name: ?string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          taxonomy: ?{|
            // Information that can be used to create pretty permalinks.
            rewrite: ?{|
              // An alphanumeric identifier for the object unique to its type.
              slug: ?string,
            |},
            labels: ?{|
              singular: ?string,
              plural: ?string,
            |},
          |},
        }
      | {
          // Unique identifier for the object.
          id: string,
          // HTML title for the object.
          name: ?string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          taxonomy: ?{|
            // Information that can be used to create pretty permalinks.
            rewrite: ?{|
              // An alphanumeric identifier for the object unique to its type.
              slug: ?string,
            |},
            labels: ?{|
              singular: ?string,
              plural: ?string,
            |},
          |},
        }),
    // A list of results
    posts: ?{|
      // A list of edges.
      edges: ?Array<?{|
        // The item at the end of the edge
        node: ?{|
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: ?string,
          // The date the object was published, in the timezone of the site.
          date: ?string,
          title: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          content: ?{|
            data: ?Array<?(
              | {
                  __typename: 'Element',
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                      children: ?Array<?(
                                                        | {
                                                            tagName: ?string,
                                                            attributes: ?Array<?{|
                                                              // Name for the metadata field.
                                                              name: ?string,
                                                              // Value for the metadata field.
                                                              value: ?string,
                                                            |}>,
                                                            children: ?Array<?(
                                                              | {
                                                                  tagName: ?string,
                                                                  attributes: ?Array<?{|
                                                                    // Name for the metadata field.
                                                                    name: ?string,
                                                                    // Value for the metadata field.
                                                                    value: ?string,
                                                                  |}>,
                                                                }
                                                              | {
                                                                  text: ?string,
                                                                }
                                                              | {
                                                                  title: ?string,
                                                                  thumbnailUrl: ?string,
                                                                  html: ?string,
                                                                  width: ?number,
                                                                  height: ?number,
                                                                })>,
                                                          }
                                                        | {
                                                            text: ?string,
                                                          }
                                                        | {
                                                            title: ?string,
                                                            thumbnailUrl: ?string,
                                                            html: ?string,
                                                            width: ?number,
                                                            height: ?number,
                                                          })>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  __typename: 'Text',
                  text: ?string,
                }
              | {
                  __typename: 'Embed',
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          |},
          excerpt: ?{|
            // Content for the object, as it exists in the database.
            raw: ?string,
          |},
          // The featured media for the object.
          featuredMedia: ?(
            | {
                __typename: 'Image',
                // URL to the original attachment file.
                sourceUrl: ?string,
                mediaDetails: ?{|
                  sizes: ?Array<?{|
                    name: ?string,
                    sourceUrl: ?string,
                  |}>,
                |},
              }
            | {
                __typename: 'Audio',
              }
            | {
                __typename: 'Video',
              }),
        |},
        // A cursor for use in pagination
        cursor: string,
      |}>,
      // Information to aid in pagination.
      pageInfo: {|
        // When paginating backwards, the cursor to continue.
        startCursor: ?string,
        // When paginating forwards, the cursor to continue.
        endCursor: ?string,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      |},
    |},
  |},
|};

export type Archive_postsFragment = {|
  // A list of edges.
  edges: ?Array<?{|
    // The item at the end of the edge
    node: ?{|
      // Unique identifier for the object.
      id: string,
      // An alphanumeric identifier for the object unique to its type.
      slug: ?string,
      // The date the object was published, in the timezone of the site.
      date: ?string,
      title: ?{|
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      content: ?{|
        data: ?Array<?(
          | {
              __typename: 'Element',
              tagName: ?string,
              attributes: ?Array<?{|
                // Name for the metadata field.
                name: ?string,
                // Value for the metadata field.
                value: ?string,
              |}>,
              children: ?Array<?(
                | {
                    tagName: ?string,
                    attributes: ?Array<?{|
                      // Name for the metadata field.
                      name: ?string,
                      // Value for the metadata field.
                      value: ?string,
                    |}>,
                    children: ?Array<?(
                      | {
                          tagName: ?string,
                          attributes: ?Array<?{|
                            // Name for the metadata field.
                            name: ?string,
                            // Value for the metadata field.
                            value: ?string,
                          |}>,
                          children: ?Array<?(
                            | {
                                tagName: ?string,
                                attributes: ?Array<?{|
                                  // Name for the metadata field.
                                  name: ?string,
                                  // Value for the metadata field.
                                  value: ?string,
                                |}>,
                                children: ?Array<?(
                                  | {
                                      tagName: ?string,
                                      attributes: ?Array<?{|
                                        // Name for the metadata field.
                                        name: ?string,
                                        // Value for the metadata field.
                                        value: ?string,
                                      |}>,
                                      children: ?Array<?(
                                        | {
                                            tagName: ?string,
                                            attributes: ?Array<?{|
                                              // Name for the metadata field.
                                              name: ?string,
                                              // Value for the metadata field.
                                              value: ?string,
                                            |}>,
                                            children: ?Array<?(
                                              | {
                                                  tagName: ?string,
                                                  attributes: ?Array<?{|
                                                    // Name for the metadata field.
                                                    name: ?string,
                                                    // Value for the metadata field.
                                                    value: ?string,
                                                  |}>,
                                                  children: ?Array<?(
                                                    | {
                                                        tagName: ?string,
                                                        attributes: ?Array<?{|
                                                          // Name for the metadata field.
                                                          name: ?string,
                                                          // Value for the metadata field.
                                                          value: ?string,
                                                        |}>,
                                                        children: ?Array<?(
                                                          | {
                                                              tagName: ?string,
                                                              attributes: ?Array<?{|
                                                                // Name for the metadata field.
                                                                name: ?string,
                                                                // Value for the metadata field.
                                                                value: ?string,
                                                              |}>,
                                                            }
                                                          | {
                                                              text: ?string,
                                                            }
                                                          | {
                                                              title: ?string,
                                                              thumbnailUrl: ?string,
                                                              html: ?string,
                                                              width: ?number,
                                                              height: ?number,
                                                            })>,
                                                      }
                                                    | {
                                                        text: ?string,
                                                      }
                                                    | {
                                                        title: ?string,
                                                        thumbnailUrl: ?string,
                                                        html: ?string,
                                                        width: ?number,
                                                        height: ?number,
                                                      })>,
                                                }
                                              | {
                                                  text: ?string,
                                                }
                                              | {
                                                  title: ?string,
                                                  thumbnailUrl: ?string,
                                                  html: ?string,
                                                  width: ?number,
                                                  height: ?number,
                                                })>,
                                          }
                                        | {
                                            text: ?string,
                                          }
                                        | {
                                            title: ?string,
                                            thumbnailUrl: ?string,
                                            html: ?string,
                                            width: ?number,
                                            height: ?number,
                                          })>,
                                    }
                                  | {
                                      text: ?string,
                                    }
                                  | {
                                      title: ?string,
                                      thumbnailUrl: ?string,
                                      html: ?string,
                                      width: ?number,
                                      height: ?number,
                                    })>,
                              }
                            | {
                                text: ?string,
                              }
                            | {
                                title: ?string,
                                thumbnailUrl: ?string,
                                html: ?string,
                                width: ?number,
                                height: ?number,
                              })>,
                        }
                      | {
                          text: ?string,
                        }
                      | {
                          title: ?string,
                          thumbnailUrl: ?string,
                          html: ?string,
                          width: ?number,
                          height: ?number,
                        })>,
                  }
                | {
                    text: ?string,
                  }
                | {
                    title: ?string,
                    thumbnailUrl: ?string,
                    html: ?string,
                    width: ?number,
                    height: ?number,
                  })>,
            }
          | {
              __typename: 'Text',
              text: ?string,
            }
          | {
              __typename: 'Embed',
              title: ?string,
              thumbnailUrl: ?string,
              html: ?string,
              width: ?number,
              height: ?number,
            })>,
      |},
      excerpt: ?{|
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      // The featured media for the object.
      featuredMedia: ?(
        | {
            __typename: 'Image',
            // URL to the original attachment file.
            sourceUrl: ?string,
            mediaDetails: ?{|
              sizes: ?Array<?{|
                name: ?string,
                sourceUrl: ?string,
              |}>,
            |},
          }
        | {
            __typename: 'Audio',
          }
        | {
            __typename: 'Video',
          }),
    |},
    // A cursor for use in pagination
    cursor: string,
  |}>,
  // Information to aid in pagination.
  pageInfo: {|
    // When paginating backwards, the cursor to continue.
    startCursor: ?string,
    // When paginating forwards, the cursor to continue.
    endCursor: ?string,
    // When paginating forwards, are there more items?
    hasNextPage: boolean,
    // When paginating backwards, are there more items?
    hasPreviousPage: boolean,
  |},
|};

export type Comment_commentFragment = {|
  // Unique identifier for the object.
  id: string,
  // Display name for the object author.
  authorName: ?string,
  // URL for the object author.
  authorUrl: ?string,
  // Hashed representation of the comment author.
  authorHash: ?string,
  // The date the object was published, in the timezone of the site.
  date: ?string,
  content: ?{|
    // HTML for the object, transformed for display.
    rendered: ?string,
    // Content for the object, as it exists in the database.
    raw: ?string,
  |},
  // Avatar URLs for the object author.
  authorAvatarUrls: ?Array<?{|
    size: ?number,
    url: ?string,
  |}>,
  // The ID for the parent of the object.
  parent: ?string,
  // The ID of the associated post object.
  post: ?string,
|};

export type Comments_commentsFragment = {|
  // A list of edges.
  edges: ?Array<?{|
    // The item at the end of the edge
    node: ?{|
      // Unique identifier for the object.
      id: string,
      // The ID for the parent of the object.
      parent: ?string,
      // Display name for the object author.
      authorName: ?string,
      // URL for the object author.
      authorUrl: ?string,
      // Hashed representation of the comment author.
      authorHash: ?string,
      // The date the object was published, in the timezone of the site.
      date: ?string,
      content: ?{|
        // HTML for the object, transformed for display.
        rendered: ?string,
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      // Avatar URLs for the object author.
      authorAvatarUrls: ?Array<?{|
        size: ?number,
        url: ?string,
      |}>,
      // The ID of the associated post object.
      post: ?string,
    |},
  |}>,
|};

export type ContentNode_contentFragment =
  | {
      __typename: 'Element',
      tagName: ?string,
      attributes: ?Array<?{|
        // Name for the metadata field.
        name: ?string,
        // Value for the metadata field.
        value: ?string,
      |}>,
      children: ?Array<?(
        | {
            tagName: ?string,
            attributes: ?Array<?{|
              // Name for the metadata field.
              name: ?string,
              // Value for the metadata field.
              value: ?string,
            |}>,
            children: ?Array<?(
              | {
                  tagName: ?string,
                  attributes: ?Array<?{|
                    // Name for the metadata field.
                    name: ?string,
                    // Value for the metadata field.
                    value: ?string,
                  |}>,
                  children: ?Array<?(
                    | {
                        tagName: ?string,
                        attributes: ?Array<?{|
                          // Name for the metadata field.
                          name: ?string,
                          // Value for the metadata field.
                          value: ?string,
                        |}>,
                        children: ?Array<?(
                          | {
                              tagName: ?string,
                              attributes: ?Array<?{|
                                // Name for the metadata field.
                                name: ?string,
                                // Value for the metadata field.
                                value: ?string,
                              |}>,
                              children: ?Array<?(
                                | {
                                    tagName: ?string,
                                    attributes: ?Array<?{|
                                      // Name for the metadata field.
                                      name: ?string,
                                      // Value for the metadata field.
                                      value: ?string,
                                    |}>,
                                    children: ?Array<?(
                                      | {
                                          tagName: ?string,
                                          attributes: ?Array<?{|
                                            // Name for the metadata field.
                                            name: ?string,
                                            // Value for the metadata field.
                                            value: ?string,
                                          |}>,
                                          children: ?Array<?(
                                            | {
                                                tagName: ?string,
                                                attributes: ?Array<?{|
                                                  // Name for the metadata field.
                                                  name: ?string,
                                                  // Value for the metadata field.
                                                  value: ?string,
                                                |}>,
                                                children: ?Array<?(
                                                  | {
                                                      tagName: ?string,
                                                      attributes: ?Array<?{|
                                                        // Name for the metadata field.
                                                        name: ?string,
                                                        // Value for the metadata field.
                                                        value: ?string,
                                                      |}>,
                                                    }
                                                  | {
                                                      text: ?string,
                                                    }
                                                  | {
                                                      title: ?string,
                                                      thumbnailUrl: ?string,
                                                      html: ?string,
                                                      width: ?number,
                                                      height: ?number,
                                                    })>,
                                              }
                                            | {
                                                text: ?string,
                                              }
                                            | {
                                                title: ?string,
                                                thumbnailUrl: ?string,
                                                html: ?string,
                                                width: ?number,
                                                height: ?number,
                                              })>,
                                        }
                                      | {
                                          text: ?string,
                                        }
                                      | {
                                          title: ?string,
                                          thumbnailUrl: ?string,
                                          html: ?string,
                                          width: ?number,
                                          height: ?number,
                                        })>,
                                  }
                                | {
                                    text: ?string,
                                  }
                                | {
                                    title: ?string,
                                    thumbnailUrl: ?string,
                                    html: ?string,
                                    width: ?number,
                                    height: ?number,
                                  })>,
                            }
                          | {
                              text: ?string,
                            }
                          | {
                              title: ?string,
                              thumbnailUrl: ?string,
                              html: ?string,
                              width: ?number,
                              height: ?number,
                            })>,
                      }
                    | {
                        text: ?string,
                      }
                    | {
                        title: ?string,
                        thumbnailUrl: ?string,
                        html: ?string,
                        width: ?number,
                        height: ?number,
                      })>,
                }
              | {
                  text: ?string,
                }
              | {
                  title: ?string,
                  thumbnailUrl: ?string,
                  html: ?string,
                  width: ?number,
                  height: ?number,
                })>,
          }
        | {
            text: ?string,
          }
        | {
            title: ?string,
            thumbnailUrl: ?string,
            html: ?string,
            width: ?number,
            height: ?number,
          })>,
    }
  | {
      __typename: 'Text',
      text: ?string,
    }
  | {
      __typename: 'Embed',
      title: ?string,
      thumbnailUrl: ?string,
      html: ?string,
      width: ?number,
      height: ?number,
    };

export type Element_nodeFragment = {|
  tagName: ?string,
  attributes: ?Array<?{|
    // Name for the metadata field.
    name: ?string,
    // Value for the metadata field.
    value: ?string,
  |}>,
|};

export type Embed_nodeFragment = {|
  title: ?string,
  thumbnailUrl: ?string,
  html: ?string,
  width: ?number,
  height: ?number,
|};

export type Image_imageFragment =
  | {
      // URL to the original attachment file.
      sourceUrl: ?string,
      mediaDetails: ?{|
        sizes: ?Array<?{|
          name: ?string,
          sourceUrl: ?string,
        |}>,
      |},
    }
  | {}
  | {};

export type Media_mediaFragment =
  | {
      __typename: 'Image',
      // URL to the original attachment file.
      sourceUrl: ?string,
      mediaDetails: ?{|
        sizes: ?Array<?{|
          name: ?string,
          sourceUrl: ?string,
        |}>,
      |},
    }
  | {
      __typename: 'Audio',
    }
  | {
      __typename: 'Video',
    };

export type NavMenu_navMenuFragment = {|
  // Unique identifier for the object.
  id: string,
  // HTML title for the object.
  name: ?string,
  // Items associated with the menu.
  items: ?Array<?{|
    // Menu item ID.
    id: ?string,
    // The display name for the item.
    title: ?string,
    // The item url.
    url: ?string,
    // Menu item that this item is a child of.
    parent: ?string,
    // The order that this item appears in the menu.
    order: ?number,
    // The classification of object.
    type: ?string,
    // The type of object within a classification.
    typeName: ?string,
    // The rewrite slug for the object type.
    typeSlug: ?string,
    // An alphanumeric identifier for the object unique to its type.
    dataSlug: ?string,
    // Unique identifier for the object.
    dataID: ?string,
  |}>,
|};

export type PostLink_postFragment = {|
  // An alphanumeric identifier for the object unique to its type.
  slug: ?string,
  // The date the object was published, in the timezone of the site.
  date: ?string,
  title: ?{|
    // Content for the object, as it exists in the database.
    raw: ?string,
  |},
|};

export type Post_postFragment = {|
  // Unique identifier for the object.
  id: string,
  // An alphanumeric identifier for the object unique to its type.
  slug: ?string,
  // The date the object was published, in the timezone of the site.
  date: ?string,
  title: ?{|
    // Content for the object, as it exists in the database.
    raw: ?string,
  |},
  content: ?{|
    data: ?Array<?(
      | {
          __typename: 'Element',
          tagName: ?string,
          attributes: ?Array<?{|
            // Name for the metadata field.
            name: ?string,
            // Value for the metadata field.
            value: ?string,
          |}>,
          children: ?Array<?(
            | {
                tagName: ?string,
                attributes: ?Array<?{|
                  // Name for the metadata field.
                  name: ?string,
                  // Value for the metadata field.
                  value: ?string,
                |}>,
                children: ?Array<?(
                  | {
                      tagName: ?string,
                      attributes: ?Array<?{|
                        // Name for the metadata field.
                        name: ?string,
                        // Value for the metadata field.
                        value: ?string,
                      |}>,
                      children: ?Array<?(
                        | {
                            tagName: ?string,
                            attributes: ?Array<?{|
                              // Name for the metadata field.
                              name: ?string,
                              // Value for the metadata field.
                              value: ?string,
                            |}>,
                            children: ?Array<?(
                              | {
                                  tagName: ?string,
                                  attributes: ?Array<?{|
                                    // Name for the metadata field.
                                    name: ?string,
                                    // Value for the metadata field.
                                    value: ?string,
                                  |}>,
                                  children: ?Array<?(
                                    | {
                                        tagName: ?string,
                                        attributes: ?Array<?{|
                                          // Name for the metadata field.
                                          name: ?string,
                                          // Value for the metadata field.
                                          value: ?string,
                                        |}>,
                                        children: ?Array<?(
                                          | {
                                              tagName: ?string,
                                              attributes: ?Array<?{|
                                                // Name for the metadata field.
                                                name: ?string,
                                                // Value for the metadata field.
                                                value: ?string,
                                              |}>,
                                              children: ?Array<?(
                                                | {
                                                    tagName: ?string,
                                                    attributes: ?Array<?{|
                                                      // Name for the metadata field.
                                                      name: ?string,
                                                      // Value for the metadata field.
                                                      value: ?string,
                                                    |}>,
                                                    children: ?Array<?(
                                                      | {
                                                          tagName: ?string,
                                                          attributes: ?Array<?{|
                                                            // Name for the metadata field.
                                                            name: ?string,
                                                            // Value for the metadata field.
                                                            value: ?string,
                                                          |}>,
                                                        }
                                                      | {
                                                          text: ?string,
                                                        }
                                                      | {
                                                          title: ?string,
                                                          thumbnailUrl: ?string,
                                                          html: ?string,
                                                          width: ?number,
                                                          height: ?number,
                                                        })>,
                                                  }
                                                | {
                                                    text: ?string,
                                                  }
                                                | {
                                                    title: ?string,
                                                    thumbnailUrl: ?string,
                                                    html: ?string,
                                                    width: ?number,
                                                    height: ?number,
                                                  })>,
                                            }
                                          | {
                                              text: ?string,
                                            }
                                          | {
                                              title: ?string,
                                              thumbnailUrl: ?string,
                                              html: ?string,
                                              width: ?number,
                                              height: ?number,
                                            })>,
                                      }
                                    | {
                                        text: ?string,
                                      }
                                    | {
                                        title: ?string,
                                        thumbnailUrl: ?string,
                                        html: ?string,
                                        width: ?number,
                                        height: ?number,
                                      })>,
                                }
                              | {
                                  text: ?string,
                                }
                              | {
                                  title: ?string,
                                  thumbnailUrl: ?string,
                                  html: ?string,
                                  width: ?number,
                                  height: ?number,
                                })>,
                          }
                        | {
                            text: ?string,
                          }
                        | {
                            title: ?string,
                            thumbnailUrl: ?string,
                            html: ?string,
                            width: ?number,
                            height: ?number,
                          })>,
                    }
                  | {
                      text: ?string,
                    }
                  | {
                      title: ?string,
                      thumbnailUrl: ?string,
                      html: ?string,
                      width: ?number,
                      height: ?number,
                    })>,
              }
            | {
                text: ?string,
              }
            | {
                title: ?string,
                thumbnailUrl: ?string,
                html: ?string,
                width: ?number,
                height: ?number,
              })>,
        }
      | {
          __typename: 'Text',
          text: ?string,
        }
      | {
          __typename: 'Embed',
          title: ?string,
          thumbnailUrl: ?string,
          html: ?string,
          width: ?number,
          height: ?number,
        })>,
  |},
  excerpt: ?{|
    // Content for the object, as it exists in the database.
    raw: ?string,
  |},
  // The featured media for the object.
  featuredMedia: ?(
    | {
        __typename: 'Image',
        // URL to the original attachment file.
        sourceUrl: ?string,
        mediaDetails: ?{|
          sizes: ?Array<?{|
            name: ?string,
            sourceUrl: ?string,
          |}>,
        |},
      }
    | {
        __typename: 'Audio',
      }
    | {
        __typename: 'Video',
      }),
|};

export type Settings_settingsFragment = {|
  // Site title.
  title: ?string,
  // Site tagline.
  description: ?string,
  // Site locale code.
  language: ?string,
|};

export type Sidebar_sidebarFragment = {|
  // HTML widgets associated with the sidebar.
  widgets: ?Array<?{|
    // Identifier for widget.
    id: ?string,
    // CSS class for the widget.
    classname: ?string,
    content: ?{|
      // HTML for the object, transformed for display.
      rendered: ?string,
    |},
  |}>,
|};

export type Walker_commentsFragment = {|
  // A list of edges.
  edges: ?Array<?{|
    // The item at the end of the edge
    node: ?{|
      // Unique identifier for the object.
      id: string,
      // The ID for the parent of the object.
      parent: ?string,
      // Display name for the object author.
      authorName: ?string,
      // URL for the object author.
      authorUrl: ?string,
      // Hashed representation of the comment author.
      authorHash: ?string,
      // The date the object was published, in the timezone of the site.
      date: ?string,
      content: ?{|
        // HTML for the object, transformed for display.
        rendered: ?string,
        // Content for the object, as it exists in the database.
        raw: ?string,
      |},
      // Avatar URLs for the object author.
      authorAvatarUrls: ?Array<?{|
        size: ?number,
        url: ?string,
      |}>,
      // The ID of the associated post object.
      post: ?string,
    |},
  |}>,
|};
