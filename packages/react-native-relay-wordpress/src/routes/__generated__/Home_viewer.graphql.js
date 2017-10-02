/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Home_viewer = {|
  +stickies: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
      |};
      +cursor: string;
    |}>;
  |};
  +readThis: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
      |};
      +cursor: string;
    |}>;
  |};
  +watchThis: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
      |};
      +cursor: string;
    |}>;
  |};
  +listenToThis: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
      |};
      +cursor: string;
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "stickiesTotal",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "readThisTotal",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "watchThisTotal",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "listenToThisTotal",
      "type": "Int"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_viewer",
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
                  "kind": "FragmentSpread",
                  "name": "Post_post",
                  "args": null
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
                  "kind": "FragmentSpread",
                  "name": "Post_post",
                  "args": null
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
                  "kind": "FragmentSpread",
                  "name": "Post_post",
                  "args": null
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
                  "kind": "FragmentSpread",
                  "name": "Post_post",
                  "args": null
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
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;
