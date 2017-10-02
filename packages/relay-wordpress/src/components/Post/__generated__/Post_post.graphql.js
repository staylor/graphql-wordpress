/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Post_post = {|
  +id: string;
  +date: ?string;
  +content: ?{|
    +data: ?$ReadOnlyArray<?{|
      +__typename: string;
    |}>;
  |};
  +excerpt: ?{|
    +raw: ?string;
  |};
  +featuredMedia: ?{| |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Post_post",
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
              "kind": "FragmentSpread",
              "name": "ContentNode_content",
              "args": null
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
          "kind": "FragmentSpread",
          "name": "Media_media",
          "args": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PostLink_post",
      "args": null
    }
  ],
  "type": "Post"
};

module.exports = fragment;
