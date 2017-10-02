/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Media_media = {|
  +__typename: string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Media_media",
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
      "name": "Image_image",
      "args": null
    }
  ],
  "type": "Media"
};

module.exports = fragment;
