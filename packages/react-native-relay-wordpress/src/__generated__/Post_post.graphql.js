/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Post_post = {|
  +id: string;
  +title: ?{|
    +raw: ?string;
  |};
  +content: ?{|
    +data: ?$ReadOnlyArray<?{| |}>;
  |};
  +excerpt: ?{|
    +raw: ?string;
  |};
  +featuredMedia: ?{|
    +imageUrl?: ?string;
  |};
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
              "kind": "FragmentSpread",
              "name": "Content_content",
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
              "kind": "FragmentSpread",
              "name": "ResponsiveImage_featuredMedia",
              "args": null
            }
          ]
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
