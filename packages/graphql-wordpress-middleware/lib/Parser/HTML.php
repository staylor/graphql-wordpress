<?php
namespace GraphQL\Parser;

use Masterminds\HTML5;

class HTML {
    private $dom;
    private $data = [];
    private $charMask = "\t\n\r\0\x0B";

    public function __construct($html) {
        ini_set('html_errors', 0);
        $doc = new HTML5();
        $trimmed = trim($html);
        $this->dom = $doc->loadHTMLFragment($trimmed);
        $this->walkNode($this->data, $this->dom);
    }

    public function getData() {
        return $this->data;
    }

    private function flattenAttributes($attributes) {
      return array_reduce($attributes, function ($carry, $item) {
          $carry[$item['name']] = $item['value'];
          return $carry;
      }, []);
    }

    private function findJSON($node) {
      foreach ($node['children'] as $child) {
          if ($child['tagName'] !== 'script') {
              continue;
          }
          $flatAttrs = $this->flattenAttributes($child['attributes']);
          if (empty($flatAttrs['type']) || $flatAttrs['type'] !== 'application/json') {
              continue;
          }
          return array_reduce($child['children'], function ($carry, $item) {
              $carry .= $item['text'];
              return $carry;
          }, '');
      }
    }

    private function findIframe($node) {
      $nodeCount = count($node['children']);
      if ($nodeCount > 1 || $nodeCount === 0) {
          return;
      }
      $first = reset( $node['children'] );
      if ($first['type'] === 'element' && $first['tagName'] === 'iframe') {
        return $first;
      }
    }

    private function findEmbed($node) {
        if (empty($node['attributes']) || $node['tagName'] !== 'figure') {
            return;
        }
        $flatAttrs = $this->flattenAttributes($node['attributes']);
        $attr = array_search('embed', $flatAttrs);
        if ($attr !== 'class') {
            return;
        }
        // it is one of our placeholders, just target the JSON
        $found = $this->findJSON($node);
        if (!$found) {
            return;
        }
        return json_decode($found, true);
    }

    private function walkNode(&$data, $node) {
        foreach ($node->childNodes as $node) {
            $parsed = [];
            if ($node instanceof \DOMElement) {
                $parsed['tagName'] = $node->tagName;
                if (! empty($node->attributes)) {
                    $parsed['attributes'] = [];
                    foreach ($node->attributes as $a) {
                        $parsed['attributes'][] = [
                            'name' => $a->name,
                            'value' => $a->value,
                        ];
                    }
                }
                if ($node->hasChildNodes()) {
                    $parsed['children'] = [];
                    $this->walkNode($parsed['children'], $node);
                }
                $parsed['type'] = 'element';

                $embed = $this->findEmbed($parsed);
                if ($embed) {
                    $parsed = $embed;
                    $parsed['type'] = 'embed';
                    $data[] = $parsed;
                    continue;
                }

                $iframe = $this->findIframe($parsed);
                if ($iframe) {
                    $parsed = $iframe;
                }
                $data[] = $parsed;
            } elseif ($node instanceof \DOMText) {
                $trimmed = trim($node->wholeText, $this->charMask);
                if (strlen($trimmed) === 0) {
                    continue;
                }
                $parsed['type'] = 'text';
                $parsed['text'] = $trimmed;
                $data[] = $parsed;
            } else {
                continue;
            }
        }
    }
}
