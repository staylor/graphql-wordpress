/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Content_content = $ReadOnlyArray<{|
  +__typename: "Text";
  +text: ?string;
|} | {|
  +__typename: "Element";
  +children: ?$ReadOnlyArray<?{|
    +__typename?: "Text";
    +text?: ?string;
  |} | {|
    +__typename?: "Element";
    +children: ?$ReadOnlyArray<?{|
      +__typename?: "Text";
      +text?: ?string;
    |} | {|
      +__typename?: "Element";
      +children: ?$ReadOnlyArray<?{|
        +__typename?: "Text";
        +text?: ?string;
      |} | {|
        +__typename?: "Element";
        +children: ?$ReadOnlyArray<?{|
          +__typename?: "Text";
          +text?: ?string;
        |} | {|
          +__typename?: "Element";
          +children: ?$ReadOnlyArray<?{|
            +__typename?: "Text";
            +text?: ?string;
          |} | {|
            // This will never be '%other', but we need some
            // value in case none of the concrete values match.
            +__typename: "%other";
          |}>;
        |} | {|
          // This will never be '%other', but we need some
          // value in case none of the concrete values match.
          +__typename: "%other";
        |}>;
      |} | {|
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        +__typename: "%other";
      |}>;
    |} | {|
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      +__typename: "%other";
    |}>;
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other";
  |}>;
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other";
|}>;
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Content_content",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "type": "Element",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Element_node",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": null,
          "name": "children",
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
              "kind": "InlineFragment",
              "type": "Element",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Element_node",
                  "args": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "name": "children",
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
                      "kind": "InlineFragment",
                      "type": "Element",
                      "selections": [
                        {
                          "kind": "FragmentSpread",
                          "name": "Element_node",
                          "args": null
                        },
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "args": null,
                          "concreteType": null,
                          "name": "children",
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
                              "kind": "InlineFragment",
                              "type": "Element",
                              "selections": [
                                {
                                  "kind": "FragmentSpread",
                                  "name": "Element_node",
                                  "args": null
                                },
                                {
                                  "kind": "LinkedField",
                                  "alias": null,
                                  "args": null,
                                  "concreteType": null,
                                  "name": "children",
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
                                      "kind": "InlineFragment",
                                      "type": "Element",
                                      "selections": [
                                        {
                                          "kind": "FragmentSpread",
                                          "name": "Element_node",
                                          "args": null
                                        },
                                        {
                                          "kind": "LinkedField",
                                          "alias": null,
                                          "args": null,
                                          "concreteType": null,
                                          "name": "children",
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
                                              "kind": "InlineFragment",
                                              "type": "Element",
                                              "selections": [
                                                {
                                                  "kind": "FragmentSpread",
                                                  "name": "Element_node",
                                                  "args": null
                                                }
                                              ]
                                            },
                                            {
                                              "kind": "InlineFragment",
                                              "type": "Text",
                                              "selections": [
                                                {
                                                  "kind": "ScalarField",
                                                  "alias": null,
                                                  "args": null,
                                                  "name": "text",
                                                  "storageKey": null
                                                }
                                              ]
                                            },
                                            {
                                              "kind": "InlineFragment",
                                              "type": "Embed",
                                              "selections": [
                                                {
                                                  "kind": "FragmentSpread",
                                                  "name": "Embed_node",
                                                  "args": null
                                                }
                                              ]
                                            }
                                          ],
                                          "storageKey": null
                                        }
                                      ]
                                    },
                                    {
                                      "kind": "InlineFragment",
                                      "type": "Text",
                                      "selections": [
                                        {
                                          "kind": "ScalarField",
                                          "alias": null,
                                          "args": null,
                                          "name": "text",
                                          "storageKey": null
                                        }
                                      ]
                                    },
                                    {
                                      "kind": "InlineFragment",
                                      "type": "Embed",
                                      "selections": [
                                        {
                                          "kind": "FragmentSpread",
                                          "name": "Embed_node",
                                          "args": null
                                        }
                                      ]
                                    }
                                  ],
                                  "storageKey": null
                                }
                              ]
                            },
                            {
                              "kind": "InlineFragment",
                              "type": "Text",
                              "selections": [
                                {
                                  "kind": "ScalarField",
                                  "alias": null,
                                  "args": null,
                                  "name": "text",
                                  "storageKey": null
                                }
                              ]
                            },
                            {
                              "kind": "InlineFragment",
                              "type": "Embed",
                              "selections": [
                                {
                                  "kind": "FragmentSpread",
                                  "name": "Embed_node",
                                  "args": null
                                }
                              ]
                            }
                          ],
                          "storageKey": null
                        }
                      ]
                    },
                    {
                      "kind": "InlineFragment",
                      "type": "Text",
                      "selections": [
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "text",
                          "storageKey": null
                        }
                      ]
                    },
                    {
                      "kind": "InlineFragment",
                      "type": "Embed",
                      "selections": [
                        {
                          "kind": "FragmentSpread",
                          "name": "Embed_node",
                          "args": null
                        }
                      ]
                    }
                  ],
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "InlineFragment",
              "type": "Text",
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "text",
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "InlineFragment",
              "type": "Embed",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Embed_node",
                  "args": null
                }
              ]
            }
          ],
          "storageKey": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "Text",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "text",
          "storageKey": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "Embed",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Embed_node",
          "args": null
        }
      ]
    }
  ],
  "type": "ContentNode"
};

module.exports = fragment;
