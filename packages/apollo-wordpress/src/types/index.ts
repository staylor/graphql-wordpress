/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type AddCommentInput = {
  authorEmail: string,
  authorName: string,
  content: string,
  post: string,
  authorUrl?: string | null,
  parent?: string | null,
  clientMutationId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
  token: string,
  post: string,
  clientMutationId?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  content: string,
  token: string,
  clientMutationId?: string | null,
};

export type AddCommentMutationVariables = {
  input: AddCommentInput,
};

export type AddCommentMutation = {
  addComment:  {
    comment:  {
      // Unique identifier for the object.
      id: string,
      // Display name for the object author.
      authorName: string | null,
      // URL for the object author.
      authorUrl: string | null,
      // Hashed representation of the comment author.
      authorHash: string | null,
      // The date the object was published, in the timezone of the site.
      date: string | null,
      content:  {
        // HTML for the object, transformed for display.
        rendered: string | null,
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      // Avatar URLs for the object author.
      authorAvatarUrls:  Array< {
        size: number | null,
        url: string | null,
      } | null > | null,
      // The ID for the parent of the object.
      parent: string | null,
      // The ID of the associated post object.
      post: string | null,
    } | null,
    cookies: string | null,
    status: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    status: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment:  {
    comment:  {
      // Unique identifier for the object.
      id: string,
      // Display name for the object author.
      authorName: string | null,
      // URL for the object author.
      authorUrl: string | null,
      // Hashed representation of the comment author.
      authorHash: string | null,
      // The date the object was published, in the timezone of the site.
      date: string | null,
      content:  {
        // HTML for the object, transformed for display.
        rendered: string | null,
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      // Avatar URLs for the object author.
      authorAvatarUrls:  Array< {
        size: number | null,
        url: string | null,
      } | null > | null,
      // The ID for the parent of the object.
      parent: string | null,
      // The ID of the associated post object.
      post: string | null,
    } | null,
    cookies: string | null,
    status: string | null,
  } | null,
};

export type AppQueryVariables = {
  menuID: string,
  sidebarID: string,
};

export type AppQuery = {
  viewer:  {
    settings:  {
      // Site title.
      title: string | null,
      // Site tagline.
      description: string | null,
      // Site locale code.
      language: string | null,
    } | null,
    navMenu:  {
      // Unique identifier for the object.
      id: string,
      // HTML title for the object.
      name: string | null,
      // Items associated with the menu.
      items:  Array< {
        // Menu item ID.
        id: string | null,
        // The display name for the item.
        title: string | null,
        // The item url.
        url: string | null,
        // Menu item that this item is a child of.
        parent: string | null,
        // The order that this item appears in the menu.
        order: number | null,
        // The classification of object.
        type: string | null,
        // The type of object within a classification.
        typeName: string | null,
        // The rewrite slug for the object type.
        typeSlug: string | null,
        // An alphanumeric identifier for the object unique to its type.
        dataSlug: string | null,
        // Unique identifier for the object.
        dataID: string | null,
      } | null > | null,
    } | null,
    sidebar:  {
      // HTML widgets associated with the sidebar.
      widgets:  Array< {
        // Identifier for widget.
        id: string | null,
        // CSS class for the widget.
        classname: string | null,
        content:  {
          // HTML for the object, transformed for display.
          rendered: string | null,
        } | null,
      } | null > | null,
    } | null,
  } | null,
};

export type AuthorQueryVariables = {
  id: string,
  cursor?: string | null,
  count?: number | null,
};

export type AuthorQuery = {
  viewer:  {
    author:  {
      // Unique identifier for the object.
      id: string,
      // HTML title for the object.
      name: string | null,
    } | null,
    // A list of results
    posts:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge
        node:  {
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: string | null,
          // The date the object was published, in the timezone of the site.
          date: string | null,
          title:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          content:  {
            data:  Array<( {
                __typename: "Element",
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                            children:  Array<( {
                                                tagName: string | null,
                                                attributes:  Array< {
                                                  // Name for the metadata field.
                                                  name: string | null,
                                                  // Value for the metadata field.
                                                  value: string | null,
                                                } | null > | null,
                                              } | {
                                                text: string | null,
                                              } | {
                                                title: string | null,
                                                thumbnailUrl: string | null,
                                                html: string | null,
                                                width: number | null,
                                                height: number | null,
                                              }
                                            ) | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                __typename: "Text",
                text: string | null,
              } | {
                __typename: "Embed",
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | null,
          excerpt:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          // The featured media for the object.
          featuredMedia: ( {
              __typename: "Image",
              // URL to the original attachment file.
              sourceUrl: string | null,
              mediaDetails:  {
                sizes:  Array< {
                  name: string | null,
                  sourceUrl: string | null,
                } | null > | null,
              } | null,
            } | {
              __typename: "Audio",
            } | {
              __typename: "Video",
            }
          ) | null,
        } | null,
        // A cursor for use in pagination
        cursor: string,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating backwards, the cursor to continue.
        startCursor: string | null,
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      },
    } | null,
  } | null,
};

export type ChartQuery = {
  viewer:  {
    chart:  {
      // Chart title.
      title: string | null,
      // Chart copyright notice.
      copyright: string | null,
      // Last updated timestamp.
      updated: string | null,
      // Chart author name.
      authorName: string | null,
      // Chart author URI.
      authorUri: string | null,
      // Chart items.
      items:  Array< {
        // Album title.
        title: string | null,
        // Artist title.
        artist: string | null,
        // Album release date in ISO format.
        releaseDate: string | null,
        // Album release date, formatted for display.
        releaseDateFormatted: string | null,
        // Album URL.
        url: string | null,
        // Chart copyright notice.
        copyright: string | null,
        // Item images.
        images:  Array< {
          // Image URL.
          url: string | null,
          // Image height.
          height: number | null,
        } | null > | null,
      } | null > | null,
    } | null,
  } | null,
};

export type DateQueryVariables = {
  year: number,
  month?: number | null,
  day?: number | null,
  cursor?: string | null,
  count?: number | null,
};

export type DateQuery = {
  viewer:  {
    // A list of results
    posts:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge
        node:  {
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: string | null,
          // The date the object was published, in the timezone of the site.
          date: string | null,
          title:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          content:  {
            data:  Array<( {
                __typename: "Element",
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                            children:  Array<( {
                                                tagName: string | null,
                                                attributes:  Array< {
                                                  // Name for the metadata field.
                                                  name: string | null,
                                                  // Value for the metadata field.
                                                  value: string | null,
                                                } | null > | null,
                                              } | {
                                                text: string | null,
                                              } | {
                                                title: string | null,
                                                thumbnailUrl: string | null,
                                                html: string | null,
                                                width: number | null,
                                                height: number | null,
                                              }
                                            ) | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                __typename: "Text",
                text: string | null,
              } | {
                __typename: "Embed",
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | null,
          excerpt:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          // The featured media for the object.
          featuredMedia: ( {
              __typename: "Image",
              // URL to the original attachment file.
              sourceUrl: string | null,
              mediaDetails:  {
                sizes:  Array< {
                  name: string | null,
                  sourceUrl: string | null,
                } | null > | null,
              } | null,
            } | {
              __typename: "Audio",
            } | {
              __typename: "Video",
            }
          ) | null,
        } | null,
        // A cursor for use in pagination
        cursor: string,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating backwards, the cursor to continue.
        startCursor: string | null,
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      },
    } | null,
  } | null,
};

export type HomeQueryVariables = {
  stickiesTotal?: number | null,
  watchThisTotal?: number | null,
  readThisTotal?: number | null,
  listenToThisTotal?: number | null,
};

export type HomeQuery = {
  viewer:  {
    // A list of results
    stickies:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge
        node:  {
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: string | null,
          // The date the object was published, in the timezone of the site.
          date: string | null,
          title:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          content:  {
            data:  Array<( {
                __typename: "Element",
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                            children:  Array<( {
                                                tagName: string | null,
                                                attributes:  Array< {
                                                  // Name for the metadata field.
                                                  name: string | null,
                                                  // Value for the metadata field.
                                                  value: string | null,
                                                } | null > | null,
                                              } | {
                                                text: string | null,
                                              } | {
                                                title: string | null,
                                                thumbnailUrl: string | null,
                                                html: string | null,
                                                width: number | null,
                                                height: number | null,
                                              }
                                            ) | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                __typename: "Text",
                text: string | null,
              } | {
                __typename: "Embed",
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | null,
          excerpt:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          // The featured media for the object.
          featuredMedia: ( {
              __typename: "Image",
              // URL to the original attachment file.
              sourceUrl: string | null,
              mediaDetails:  {
                sizes:  Array< {
                  name: string | null,
                  sourceUrl: string | null,
                } | null > | null,
              } | null,
            } | {
              __typename: "Audio",
            } | {
              __typename: "Video",
            }
          ) | null,
        } | null,
        // A cursor for use in pagination
        cursor: string,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating backwards, the cursor to continue.
        startCursor: string | null,
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      },
    } | null,
    // A list of results
    readThis:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge
        node:  {
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: string | null,
          // The date the object was published, in the timezone of the site.
          date: string | null,
          title:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          content:  {
            data:  Array<( {
                __typename: "Element",
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                            children:  Array<( {
                                                tagName: string | null,
                                                attributes:  Array< {
                                                  // Name for the metadata field.
                                                  name: string | null,
                                                  // Value for the metadata field.
                                                  value: string | null,
                                                } | null > | null,
                                              } | {
                                                text: string | null,
                                              } | {
                                                title: string | null,
                                                thumbnailUrl: string | null,
                                                html: string | null,
                                                width: number | null,
                                                height: number | null,
                                              }
                                            ) | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                __typename: "Text",
                text: string | null,
              } | {
                __typename: "Embed",
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | null,
          excerpt:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          // The featured media for the object.
          featuredMedia: ( {
              __typename: "Image",
              // URL to the original attachment file.
              sourceUrl: string | null,
              mediaDetails:  {
                sizes:  Array< {
                  name: string | null,
                  sourceUrl: string | null,
                } | null > | null,
              } | null,
            } | {
              __typename: "Audio",
            } | {
              __typename: "Video",
            }
          ) | null,
        } | null,
        // A cursor for use in pagination
        cursor: string,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating backwards, the cursor to continue.
        startCursor: string | null,
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      },
    } | null,
    // A list of results
    watchThis:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge
        node:  {
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: string | null,
          // The date the object was published, in the timezone of the site.
          date: string | null,
          title:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          content:  {
            data:  Array<( {
                __typename: "Element",
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                            children:  Array<( {
                                                tagName: string | null,
                                                attributes:  Array< {
                                                  // Name for the metadata field.
                                                  name: string | null,
                                                  // Value for the metadata field.
                                                  value: string | null,
                                                } | null > | null,
                                              } | {
                                                text: string | null,
                                              } | {
                                                title: string | null,
                                                thumbnailUrl: string | null,
                                                html: string | null,
                                                width: number | null,
                                                height: number | null,
                                              }
                                            ) | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                __typename: "Text",
                text: string | null,
              } | {
                __typename: "Embed",
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | null,
          excerpt:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          // The featured media for the object.
          featuredMedia: ( {
              __typename: "Image",
              // URL to the original attachment file.
              sourceUrl: string | null,
              mediaDetails:  {
                sizes:  Array< {
                  name: string | null,
                  sourceUrl: string | null,
                } | null > | null,
              } | null,
            } | {
              __typename: "Audio",
            } | {
              __typename: "Video",
            }
          ) | null,
        } | null,
        // A cursor for use in pagination
        cursor: string,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating backwards, the cursor to continue.
        startCursor: string | null,
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      },
    } | null,
    // A list of results
    listenToThis:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge
        node:  {
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: string | null,
          // The date the object was published, in the timezone of the site.
          date: string | null,
          title:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          content:  {
            data:  Array<( {
                __typename: "Element",
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                            children:  Array<( {
                                                tagName: string | null,
                                                attributes:  Array< {
                                                  // Name for the metadata field.
                                                  name: string | null,
                                                  // Value for the metadata field.
                                                  value: string | null,
                                                } | null > | null,
                                              } | {
                                                text: string | null,
                                              } | {
                                                title: string | null,
                                                thumbnailUrl: string | null,
                                                html: string | null,
                                                width: number | null,
                                                height: number | null,
                                              }
                                            ) | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                __typename: "Text",
                text: string | null,
              } | {
                __typename: "Embed",
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | null,
          excerpt:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          // The featured media for the object.
          featuredMedia: ( {
              __typename: "Image",
              // URL to the original attachment file.
              sourceUrl: string | null,
              mediaDetails:  {
                sizes:  Array< {
                  name: string | null,
                  sourceUrl: string | null,
                } | null > | null,
              } | null,
            } | {
              __typename: "Audio",
            } | {
              __typename: "Video",
            }
          ) | null,
        } | null,
        // A cursor for use in pagination
        cursor: string,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating backwards, the cursor to continue.
        startCursor: string | null,
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      },
    } | null,
  } | null,
};

export type PageQueryVariables = {
  slug: string,
};

export type PageQuery = {
  viewer:  {
    page:  {
      // Unique identifier for the object.
      id: string,
      // An alphanumeric identifier for the object unique to its type.
      slug: string | null,
      title:  {
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      content:  {
        data:  Array<( {
            __typename: "Element",
            tagName: string | null,
            attributes:  Array< {
              // Name for the metadata field.
              name: string | null,
              // Value for the metadata field.
              value: string | null,
            } | null > | null,
            children:  Array<( {
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                text: string | null,
              } | {
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | {
            __typename: "Text",
            text: string | null,
          } | {
            __typename: "Embed",
            title: string | null,
            thumbnailUrl: string | null,
            html: string | null,
            width: number | null,
            height: number | null,
          }
        ) | null > | null,
      } | null,
      // The featured media for the object.
      featuredMedia: ( {
          // URL to the original attachment file.
          sourceUrl: string | null,
          __typename: "Image",
          mediaDetails:  {
            sizes:  Array< {
              name: string | null,
              sourceUrl: string | null,
            } | null > | null,
          } | null,
        } | {
          __typename: "Audio",
        } | {
          __typename: "Video",
        }
      ) | null,
    } | null,
  } | null,
};

export type SearchQueryVariables = {
  search?: string | null,
  count?: number | null,
  cursor?: string | null,
};

export type SearchQuery = {
  viewer:  {
    // A list of results
    posts:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge
        node:  {
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: string | null,
          // The date the object was published, in the timezone of the site.
          date: string | null,
          title:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          content:  {
            data:  Array<( {
                __typename: "Element",
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                            children:  Array<( {
                                                tagName: string | null,
                                                attributes:  Array< {
                                                  // Name for the metadata field.
                                                  name: string | null,
                                                  // Value for the metadata field.
                                                  value: string | null,
                                                } | null > | null,
                                              } | {
                                                text: string | null,
                                              } | {
                                                title: string | null,
                                                thumbnailUrl: string | null,
                                                html: string | null,
                                                width: number | null,
                                                height: number | null,
                                              }
                                            ) | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                __typename: "Text",
                text: string | null,
              } | {
                __typename: "Embed",
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | null,
          excerpt:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          // The featured media for the object.
          featuredMedia: ( {
              __typename: "Image",
              // URL to the original attachment file.
              sourceUrl: string | null,
              mediaDetails:  {
                sizes:  Array< {
                  name: string | null,
                  sourceUrl: string | null,
                } | null > | null,
              } | null,
            } | {
              __typename: "Audio",
            } | {
              __typename: "Video",
            }
          ) | null,
        } | null,
        // A cursor for use in pagination
        cursor: string,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating backwards, the cursor to continue.
        startCursor: string | null,
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      },
    } | null,
  } | null,
};

export type SingleQueryVariables = {
  slug: string,
  commentCount?: number | null,
};

export type SingleQuery = {
  viewer:  {
    post:  {
      // Unique identifier for the object.
      id: string,
      // An alphanumeric identifier for the object unique to its type.
      slug: string | null,
      // The date the object was published, in the timezone of the site.
      date: string | null,
      title:  {
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      content:  {
        data:  Array<( {
            __typename: "Element",
            tagName: string | null,
            attributes:  Array< {
              // Name for the metadata field.
              name: string | null,
              // Value for the metadata field.
              value: string | null,
            } | null > | null,
            children:  Array<( {
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                text: string | null,
              } | {
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | {
            __typename: "Text",
            text: string | null,
          } | {
            __typename: "Embed",
            title: string | null,
            thumbnailUrl: string | null,
            html: string | null,
            width: number | null,
            height: number | null,
          }
        ) | null > | null,
      } | null,
      excerpt:  {
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      // The featured media for the object.
      featuredMedia: ( {
          __typename: "Image",
          // URL to the original attachment file.
          sourceUrl: string | null,
          mediaDetails:  {
            sizes:  Array< {
              name: string | null,
              sourceUrl: string | null,
            } | null > | null,
          } | null,
        } | {
          __typename: "Audio",
        } | {
          __typename: "Video",
        }
      ) | null,
      // The terms assigned to the object in the post_tag taxonomy.
      tags:  Array< {
        // Unique identifier for the object.
        id: string,
        // HTML title for the object.
        name: string | null,
        // An alphanumeric identifier for the object unique to its type.
        slug: string | null,
      } | null > | null,
      // A list of results
      comments:  {
        // A list of edges.
        edges:  Array< {
          // The item at the end of the edge
          node:  {
            // Unique identifier for the object.
            id: string,
            // The ID for the parent of the object.
            parent: string | null,
            // Display name for the object author.
            authorName: string | null,
            // URL for the object author.
            authorUrl: string | null,
            // Hashed representation of the comment author.
            authorHash: string | null,
            // The date the object was published, in the timezone of the site.
            date: string | null,
            content:  {
              // HTML for the object, transformed for display.
              rendered: string | null,
              // Content for the object, as it exists in the database.
              raw: string | null,
            } | null,
            // Avatar URLs for the object author.
            authorAvatarUrls:  Array< {
              size: number | null,
              url: string | null,
            } | null > | null,
            // The ID of the associated post object.
            post: string | null,
          } | null,
        } | null > | null,
      } | null,
    } | null,
  } | null,
};

export type TermQueryVariables = {
  slug: string,
  taxonomy: string,
  cursor?: string | null,
  count?: number | null,
};

export type TermQuery = {
  viewer:  {
    term: ( {
        // Unique identifier for the object.
        id: string,
        // HTML title for the object.
        name: string | null,
        // An alphanumeric identifier for the object unique to its type.
        slug: string | null,
        taxonomy:  {
          // Information that can be used to create pretty permalinks.
          rewrite:  {
            // An alphanumeric identifier for the object unique to its type.
            slug: string | null,
          } | null,
          labels:  {
            singular: string | null,
            plural: string | null,
          } | null,
        } | null,
      } | {
        // Unique identifier for the object.
        id: string,
        // HTML title for the object.
        name: string | null,
        // An alphanumeric identifier for the object unique to its type.
        slug: string | null,
        taxonomy:  {
          // Information that can be used to create pretty permalinks.
          rewrite:  {
            // An alphanumeric identifier for the object unique to its type.
            slug: string | null,
          } | null,
          labels:  {
            singular: string | null,
            plural: string | null,
          } | null,
        } | null,
      }
    ) | null,
    // A list of results
    posts:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge
        node:  {
          // Unique identifier for the object.
          id: string,
          // An alphanumeric identifier for the object unique to its type.
          slug: string | null,
          // The date the object was published, in the timezone of the site.
          date: string | null,
          title:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          content:  {
            data:  Array<( {
                __typename: "Element",
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                            children:  Array<( {
                                                tagName: string | null,
                                                attributes:  Array< {
                                                  // Name for the metadata field.
                                                  name: string | null,
                                                  // Value for the metadata field.
                                                  value: string | null,
                                                } | null > | null,
                                              } | {
                                                text: string | null,
                                              } | {
                                                title: string | null,
                                                thumbnailUrl: string | null,
                                                html: string | null,
                                                width: number | null,
                                                height: number | null,
                                              }
                                            ) | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                __typename: "Text",
                text: string | null,
              } | {
                __typename: "Embed",
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | null,
          excerpt:  {
            // Content for the object, as it exists in the database.
            raw: string | null,
          } | null,
          // The featured media for the object.
          featuredMedia: ( {
              __typename: "Image",
              // URL to the original attachment file.
              sourceUrl: string | null,
              mediaDetails:  {
                sizes:  Array< {
                  name: string | null,
                  sourceUrl: string | null,
                } | null > | null,
              } | null,
            } | {
              __typename: "Audio",
            } | {
              __typename: "Video",
            }
          ) | null,
        } | null,
        // A cursor for use in pagination
        cursor: string,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating backwards, the cursor to continue.
        startCursor: string | null,
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
        // When paginating backwards, are there more items?
        hasPreviousPage: boolean,
      },
    } | null,
  } | null,
};

export type Archive_postsFragment = {
  // A list of edges.
  edges:  Array< {
    // The item at the end of the edge
    node:  {
      // Unique identifier for the object.
      id: string,
      // An alphanumeric identifier for the object unique to its type.
      slug: string | null,
      // The date the object was published, in the timezone of the site.
      date: string | null,
      title:  {
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      content:  {
        data:  Array<( {
            __typename: "Element",
            tagName: string | null,
            attributes:  Array< {
              // Name for the metadata field.
              name: string | null,
              // Value for the metadata field.
              value: string | null,
            } | null > | null,
            children:  Array<( {
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                        children:  Array<( {
                                            tagName: string | null,
                                            attributes:  Array< {
                                              // Name for the metadata field.
                                              name: string | null,
                                              // Value for the metadata field.
                                              value: string | null,
                                            } | null > | null,
                                          } | {
                                            text: string | null,
                                          } | {
                                            title: string | null,
                                            thumbnailUrl: string | null,
                                            html: string | null,
                                            width: number | null,
                                            height: number | null,
                                          }
                                        ) | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                text: string | null,
              } | {
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | {
            __typename: "Text",
            text: string | null,
          } | {
            __typename: "Embed",
            title: string | null,
            thumbnailUrl: string | null,
            html: string | null,
            width: number | null,
            height: number | null,
          }
        ) | null > | null,
      } | null,
      excerpt:  {
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      // The featured media for the object.
      featuredMedia: ( {
          __typename: "Image",
          // URL to the original attachment file.
          sourceUrl: string | null,
          mediaDetails:  {
            sizes:  Array< {
              name: string | null,
              sourceUrl: string | null,
            } | null > | null,
          } | null,
        } | {
          __typename: "Audio",
        } | {
          __typename: "Video",
        }
      ) | null,
    } | null,
    // A cursor for use in pagination
    cursor: string,
  } | null > | null,
  // Information to aid in pagination.
  pageInfo:  {
    // When paginating backwards, the cursor to continue.
    startCursor: string | null,
    // When paginating forwards, the cursor to continue.
    endCursor: string | null,
    // When paginating forwards, are there more items?
    hasNextPage: boolean,
    // When paginating backwards, are there more items?
    hasPreviousPage: boolean,
  },
};

export type Comment_commentFragment = {
  // Unique identifier for the object.
  id: string,
  // Display name for the object author.
  authorName: string | null,
  // URL for the object author.
  authorUrl: string | null,
  // Hashed representation of the comment author.
  authorHash: string | null,
  // The date the object was published, in the timezone of the site.
  date: string | null,
  content:  {
    // HTML for the object, transformed for display.
    rendered: string | null,
    // Content for the object, as it exists in the database.
    raw: string | null,
  } | null,
  // Avatar URLs for the object author.
  authorAvatarUrls:  Array< {
    size: number | null,
    url: string | null,
  } | null > | null,
  // The ID for the parent of the object.
  parent: string | null,
  // The ID of the associated post object.
  post: string | null,
};

export type Comments_commentsFragment = {
  // A list of edges.
  edges:  Array< {
    // The item at the end of the edge
    node:  {
      // Unique identifier for the object.
      id: string,
      // The ID for the parent of the object.
      parent: string | null,
      // Display name for the object author.
      authorName: string | null,
      // URL for the object author.
      authorUrl: string | null,
      // Hashed representation of the comment author.
      authorHash: string | null,
      // The date the object was published, in the timezone of the site.
      date: string | null,
      content:  {
        // HTML for the object, transformed for display.
        rendered: string | null,
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      // Avatar URLs for the object author.
      authorAvatarUrls:  Array< {
        size: number | null,
        url: string | null,
      } | null > | null,
      // The ID of the associated post object.
      post: string | null,
    } | null,
  } | null > | null,
};

export type ContentNode_contentFragment = ( {
      __typename: "Element",
      tagName: string | null,
      attributes:  Array< {
        // Name for the metadata field.
        name: string | null,
        // Value for the metadata field.
        value: string | null,
      } | null > | null,
      children:  Array<( {
          tagName: string | null,
          attributes:  Array< {
            // Name for the metadata field.
            name: string | null,
            // Value for the metadata field.
            value: string | null,
          } | null > | null,
          children:  Array<( {
              tagName: string | null,
              attributes:  Array< {
                // Name for the metadata field.
                name: string | null,
                // Value for the metadata field.
                value: string | null,
              } | null > | null,
              children:  Array<( {
                  tagName: string | null,
                  attributes:  Array< {
                    // Name for the metadata field.
                    name: string | null,
                    // Value for the metadata field.
                    value: string | null,
                  } | null > | null,
                  children:  Array<( {
                      tagName: string | null,
                      attributes:  Array< {
                        // Name for the metadata field.
                        name: string | null,
                        // Value for the metadata field.
                        value: string | null,
                      } | null > | null,
                      children:  Array<( {
                          tagName: string | null,
                          attributes:  Array< {
                            // Name for the metadata field.
                            name: string | null,
                            // Value for the metadata field.
                            value: string | null,
                          } | null > | null,
                          children:  Array<( {
                              tagName: string | null,
                              attributes:  Array< {
                                // Name for the metadata field.
                                name: string | null,
                                // Value for the metadata field.
                                value: string | null,
                              } | null > | null,
                              children:  Array<( {
                                  tagName: string | null,
                                  attributes:  Array< {
                                    // Name for the metadata field.
                                    name: string | null,
                                    // Value for the metadata field.
                                    value: string | null,
                                  } | null > | null,
                                  children:  Array<( {
                                      tagName: string | null,
                                      attributes:  Array< {
                                        // Name for the metadata field.
                                        name: string | null,
                                        // Value for the metadata field.
                                        value: string | null,
                                      } | null > | null,
                                    } | {
                                      text: string | null,
                                    } | {
                                      title: string | null,
                                      thumbnailUrl: string | null,
                                      html: string | null,
                                      width: number | null,
                                      height: number | null,
                                    }
                                  ) | null > | null,
                                } | {
                                  text: string | null,
                                } | {
                                  title: string | null,
                                  thumbnailUrl: string | null,
                                  html: string | null,
                                  width: number | null,
                                  height: number | null,
                                }
                              ) | null > | null,
                            } | {
                              text: string | null,
                            } | {
                              title: string | null,
                              thumbnailUrl: string | null,
                              html: string | null,
                              width: number | null,
                              height: number | null,
                            }
                          ) | null > | null,
                        } | {
                          text: string | null,
                        } | {
                          title: string | null,
                          thumbnailUrl: string | null,
                          html: string | null,
                          width: number | null,
                          height: number | null,
                        }
                      ) | null > | null,
                    } | {
                      text: string | null,
                    } | {
                      title: string | null,
                      thumbnailUrl: string | null,
                      html: string | null,
                      width: number | null,
                      height: number | null,
                    }
                  ) | null > | null,
                } | {
                  text: string | null,
                } | {
                  title: string | null,
                  thumbnailUrl: string | null,
                  html: string | null,
                  width: number | null,
                  height: number | null,
                }
              ) | null > | null,
            } | {
              text: string | null,
            } | {
              title: string | null,
              thumbnailUrl: string | null,
              html: string | null,
              width: number | null,
              height: number | null,
            }
          ) | null > | null,
        } | {
          text: string | null,
        } | {
          title: string | null,
          thumbnailUrl: string | null,
          html: string | null,
          width: number | null,
          height: number | null,
        }
      ) | null > | null,
    } | {
      __typename: "Text",
      text: string | null,
    } | {
      __typename: "Embed",
      title: string | null,
      thumbnailUrl: string | null,
      html: string | null,
      width: number | null,
      height: number | null,
    }
  );

export type Element_nodeFragment = {
  tagName: string | null,
  attributes:  Array< {
    // Name for the metadata field.
    name: string | null,
    // Value for the metadata field.
    value: string | null,
  } | null > | null,
};

export type Embed_nodeFragment = {
  title: string | null,
  thumbnailUrl: string | null,
  html: string | null,
  width: number | null,
  height: number | null,
};

export type Image_imageFragment = ( {
      // URL to the original attachment file.
      sourceUrl: string | null,
      mediaDetails:  {
        sizes:  Array< {
          name: string | null,
          sourceUrl: string | null,
        } | null > | null,
      } | null,
    } | {
    } | {
    }
  );

export type Media_mediaFragment = ( {
      __typename: "Image",
      // URL to the original attachment file.
      sourceUrl: string | null,
      mediaDetails:  {
        sizes:  Array< {
          name: string | null,
          sourceUrl: string | null,
        } | null > | null,
      } | null,
    } | {
      __typename: "Audio",
    } | {
      __typename: "Video",
    }
  );

export type NavMenu_navMenuFragment = {
  // Unique identifier for the object.
  id: string,
  // HTML title for the object.
  name: string | null,
  // Items associated with the menu.
  items:  Array< {
    // Menu item ID.
    id: string | null,
    // The display name for the item.
    title: string | null,
    // The item url.
    url: string | null,
    // Menu item that this item is a child of.
    parent: string | null,
    // The order that this item appears in the menu.
    order: number | null,
    // The classification of object.
    type: string | null,
    // The type of object within a classification.
    typeName: string | null,
    // The rewrite slug for the object type.
    typeSlug: string | null,
    // An alphanumeric identifier for the object unique to its type.
    dataSlug: string | null,
    // Unique identifier for the object.
    dataID: string | null,
  } | null > | null,
};

export type PostLink_postFragment = {
  // An alphanumeric identifier for the object unique to its type.
  slug: string | null,
  // The date the object was published, in the timezone of the site.
  date: string | null,
  title:  {
    // Content for the object, as it exists in the database.
    raw: string | null,
  } | null,
};

export type Post_postFragment = {
  // Unique identifier for the object.
  id: string,
  // An alphanumeric identifier for the object unique to its type.
  slug: string | null,
  // The date the object was published, in the timezone of the site.
  date: string | null,
  title:  {
    // Content for the object, as it exists in the database.
    raw: string | null,
  } | null,
  content:  {
    data:  Array<( {
        __typename: "Element",
        tagName: string | null,
        attributes:  Array< {
          // Name for the metadata field.
          name: string | null,
          // Value for the metadata field.
          value: string | null,
        } | null > | null,
        children:  Array<( {
            tagName: string | null,
            attributes:  Array< {
              // Name for the metadata field.
              name: string | null,
              // Value for the metadata field.
              value: string | null,
            } | null > | null,
            children:  Array<( {
                tagName: string | null,
                attributes:  Array< {
                  // Name for the metadata field.
                  name: string | null,
                  // Value for the metadata field.
                  value: string | null,
                } | null > | null,
                children:  Array<( {
                    tagName: string | null,
                    attributes:  Array< {
                      // Name for the metadata field.
                      name: string | null,
                      // Value for the metadata field.
                      value: string | null,
                    } | null > | null,
                    children:  Array<( {
                        tagName: string | null,
                        attributes:  Array< {
                          // Name for the metadata field.
                          name: string | null,
                          // Value for the metadata field.
                          value: string | null,
                        } | null > | null,
                        children:  Array<( {
                            tagName: string | null,
                            attributes:  Array< {
                              // Name for the metadata field.
                              name: string | null,
                              // Value for the metadata field.
                              value: string | null,
                            } | null > | null,
                            children:  Array<( {
                                tagName: string | null,
                                attributes:  Array< {
                                  // Name for the metadata field.
                                  name: string | null,
                                  // Value for the metadata field.
                                  value: string | null,
                                } | null > | null,
                                children:  Array<( {
                                    tagName: string | null,
                                    attributes:  Array< {
                                      // Name for the metadata field.
                                      name: string | null,
                                      // Value for the metadata field.
                                      value: string | null,
                                    } | null > | null,
                                    children:  Array<( {
                                        tagName: string | null,
                                        attributes:  Array< {
                                          // Name for the metadata field.
                                          name: string | null,
                                          // Value for the metadata field.
                                          value: string | null,
                                        } | null > | null,
                                      } | {
                                        text: string | null,
                                      } | {
                                        title: string | null,
                                        thumbnailUrl: string | null,
                                        html: string | null,
                                        width: number | null,
                                        height: number | null,
                                      }
                                    ) | null > | null,
                                  } | {
                                    text: string | null,
                                  } | {
                                    title: string | null,
                                    thumbnailUrl: string | null,
                                    html: string | null,
                                    width: number | null,
                                    height: number | null,
                                  }
                                ) | null > | null,
                              } | {
                                text: string | null,
                              } | {
                                title: string | null,
                                thumbnailUrl: string | null,
                                html: string | null,
                                width: number | null,
                                height: number | null,
                              }
                            ) | null > | null,
                          } | {
                            text: string | null,
                          } | {
                            title: string | null,
                            thumbnailUrl: string | null,
                            html: string | null,
                            width: number | null,
                            height: number | null,
                          }
                        ) | null > | null,
                      } | {
                        text: string | null,
                      } | {
                        title: string | null,
                        thumbnailUrl: string | null,
                        html: string | null,
                        width: number | null,
                        height: number | null,
                      }
                    ) | null > | null,
                  } | {
                    text: string | null,
                  } | {
                    title: string | null,
                    thumbnailUrl: string | null,
                    html: string | null,
                    width: number | null,
                    height: number | null,
                  }
                ) | null > | null,
              } | {
                text: string | null,
              } | {
                title: string | null,
                thumbnailUrl: string | null,
                html: string | null,
                width: number | null,
                height: number | null,
              }
            ) | null > | null,
          } | {
            text: string | null,
          } | {
            title: string | null,
            thumbnailUrl: string | null,
            html: string | null,
            width: number | null,
            height: number | null,
          }
        ) | null > | null,
      } | {
        __typename: "Text",
        text: string | null,
      } | {
        __typename: "Embed",
        title: string | null,
        thumbnailUrl: string | null,
        html: string | null,
        width: number | null,
        height: number | null,
      }
    ) | null > | null,
  } | null,
  excerpt:  {
    // Content for the object, as it exists in the database.
    raw: string | null,
  } | null,
  // The featured media for the object.
  featuredMedia: ( {
      __typename: "Image",
      // URL to the original attachment file.
      sourceUrl: string | null,
      mediaDetails:  {
        sizes:  Array< {
          name: string | null,
          sourceUrl: string | null,
        } | null > | null,
      } | null,
    } | {
      __typename: "Audio",
    } | {
      __typename: "Video",
    }
  ) | null,
};

export type Settings_settingsFragment = {
  // Site title.
  title: string | null,
  // Site tagline.
  description: string | null,
  // Site locale code.
  language: string | null,
};

export type Sidebar_sidebarFragment = {
  // HTML widgets associated with the sidebar.
  widgets:  Array< {
    // Identifier for widget.
    id: string | null,
    // CSS class for the widget.
    classname: string | null,
    content:  {
      // HTML for the object, transformed for display.
      rendered: string | null,
    } | null,
  } | null > | null,
};

export type Walker_commentsFragment = {
  // A list of edges.
  edges:  Array< {
    // The item at the end of the edge
    node:  {
      // Unique identifier for the object.
      id: string,
      // The ID for the parent of the object.
      parent: string | null,
      // Display name for the object author.
      authorName: string | null,
      // URL for the object author.
      authorUrl: string | null,
      // Hashed representation of the comment author.
      authorHash: string | null,
      // The date the object was published, in the timezone of the site.
      date: string | null,
      content:  {
        // HTML for the object, transformed for display.
        rendered: string | null,
        // Content for the object, as it exists in the database.
        raw: string | null,
      } | null,
      // Avatar URLs for the object author.
      authorAvatarUrls:  Array< {
        size: number | null,
        url: string | null,
      } | null > | null,
      // The ID of the associated post object.
      post: string | null,
    } | null,
  } | null > | null,
};
