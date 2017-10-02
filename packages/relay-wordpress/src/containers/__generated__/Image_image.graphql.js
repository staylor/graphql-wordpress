/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Image_image = {|
  +sourceUrl?: ?string;
  +mediaDetails?: ?{|
    +sizes: ?$ReadOnlyArray<?{|
      +name: ?string;
      +sourceUrl: ?string;
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Image_image",
  "selections": [
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
        }
      ]
    }
  ],
  "type": "Media"
};

module.exports = fragment;
