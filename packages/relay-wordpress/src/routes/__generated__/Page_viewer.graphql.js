/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Page_viewer = {|
  +page: ?{|
    +id: string;
    +slug: ?string;
    +title: ?{|
      +raw: ?string;
    |};
    +content: ?{|
      +data: ?$ReadOnlyArray<?{| |}>;
    |};
    +featuredMedia: ?{|
      +sourceUrl?: ?string;
    |};
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "slug",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Page_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug",
          "type": "String"
        }
      ],
      "concreteType": "Page",
      "name": "page",
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
          "name": "slug",
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
          "concreteType": null,
          "name": "featuredMedia",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "Media_media",
              "args": null
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
                }
              ]
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
