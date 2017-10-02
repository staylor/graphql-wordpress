/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Single_viewer = {|
  +post: ?{|
    +id: string;
    +date: ?string;
    +title: ?{|
      +raw: ?string;
    |};
    +featuredMedia: ?{|
      +imageUrl?: ?string;
    |};
    +content: ?{|
      +data: ?$ReadOnlyArray<?{| |}>;
    |};
    +tags: ?$ReadOnlyArray<?{|
      +id: string;
      +name: ?string;
      +slug: ?string;
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id",
      "type": "ID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Single_viewer",
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
      "concreteType": "Post",
      "name": "post",
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
          "concreteType": "Tag",
          "name": "tags",
          "plural": true,
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
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "slug",
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
