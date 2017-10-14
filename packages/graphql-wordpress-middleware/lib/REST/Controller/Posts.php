<?php
namespace GraphQL\REST\Controller;

use GraphQL\Parser\HTML;

class Posts extends \WP_REST_Posts_Controller
{
    // @codingStandardsIgnoreLine
    public function __construct( $post_type ) {
        parent::__construct($post_type);

        $this->namespace = 'graphql/v1';
    }

    // @codingStandardsIgnoreLine
    private function decode_text( $text ) {
        $stripped = preg_replace('#<script[^>]*?>.*?</script>#is', '', $text);
        return html_entity_decode(strip_tags($stripped));
    }

    // @codingStandardsIgnoreLine
    public function prepare_item_for_response( $post, $request ) {
        $response = parent::prepare_item_for_response($post, $request);

        $response->remove_link('self');
        $response->remove_link('collection');
        $response->remove_link('about');
        $response->remove_link('author');
        $response->remove_link('replies');
        $response->remove_link('version-history');
        $response->remove_link('https://api.w.org/attachment');
        $response->remove_link('https://api.w.org/term');
        $response->remove_link('https://api.w.org/featuredmedia');

        if ('view' === $request['context']) {
            $data = $response->get_data();

            $title = $this->decode_text($data['title']['rendered']);
            $data['title']['raw'] = trim($title);
            $content = $this->decode_text($data['content']['rendered']);
            $data['content']['raw'] = trim($content);
            if (empty($post->post_excerpt)) {
              $excerpt = $this->decode_text($data['excerpt']['rendered']);
              $data['excerpt']['raw'] = trim($excerpt);
            } else {
              $data['excerpt']['raw'] = $post->post_excerpt;
            }

            $nodes = new HTML($data['title']['rendered']);
            $data['title']['data'] = $nodes->getData();
            $nodes = new HTML($data['content']['rendered']);
            $data['content']['data'] = $nodes->getData();
            $nodes = new HTML($data['excerpt']['rendered']);
            $data['excerpt']['data'] = $nodes->getData();

            $response->set_data($data);
        }

        return $response;
    }
}
