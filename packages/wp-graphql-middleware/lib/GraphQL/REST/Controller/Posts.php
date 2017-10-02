<?php
namespace GraphQL\REST\Controller;

class Posts extends \WP_REST_Posts_Controller
{
    // @codingStandardsIgnoreLine
    public function __construct( $post_type ) {
        parent::__construct( $post_type );

        $this->namespace = 'graphql/v1';
    }

    // @codingStandardsIgnoreLine
    private function decode_text( $text ) {
        $stripped = preg_replace( '#<script[^>]*?>.*?</script>#is', '', $text );
        return html_entity_decode( strip_tags( $stripped ) );
    }

    // @codingStandardsIgnoreLine
    public function prepare_item_for_response( $post, $request ) {
        $response = parent::prepare_item_for_response( $post, $request );

        $data = $response->get_data();

        if ('view' === $request['context']) {
            $data['content']['raw'] = $this->decode_text( $data['content']['rendered'] );
            $data['excerpt']['raw'] = empty( $post->post_excerpt ) ?
                $this->decode_text( $data['excerpt']['rendered'] ) :
                $post->post_excerpt;
        }

        $response->set_data( $data );

        return $response;
    }
}
