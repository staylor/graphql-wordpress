/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ResponsiveImage_featuredMedia = {|
  +sourceUrl: ?string;
  +mediaDetails: ?{|
    +width: ?number;
    +height: ?number;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponsiveImage_featuredMedia",
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
    }
  ],
  "type": "Image"
};

module.exports = fragment;
