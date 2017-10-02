<?php
namespace GraphQL\REST\Controller;

class Taxonomies extends \WP_REST_Taxonomies_Controller
{
    // @codingStandardsIgnoreLine
    public function __construct() {
        $this->namespace = 'graphql/v1';
        $this->rest_base = 'taxonomies';
    }

    // @codingStandardsIgnoreLine
    public function prepare_item_for_response( $taxonomy, $request ) {
        $response = parent::prepare_item_for_response( $taxonomy, $request );

        $response->remove_link( 'collection' );
        $response->remove_link( 'https://api.w.org/items' );

        $data = $response->get_data();

        $data['rewrite'] = [
            'slug' => $taxonomy->rewrite['slug'],
        ];

        $data['labels'] = [
            'plural' => $taxonomy->labels->name,
            'singular' => $taxonomy->labels->singular_name,
        ];

        unset( $data['rest_base'] );

        $response->set_data( $data );

        return $response;
    }
}
