<?php
namespace GraphQL\REST\Controller;

class PostTypes extends \WP_REST_Post_Types_Controller
{
    // @codingStandardsIgnoreLine
    public function __construct() {
        $this->namespace = 'graphql/v1';
        $this->rest_base = 'types';
    }

    // @codingStandardsIgnoreLine
    public function prepare_item_for_response($post_type, $request) {
        $response = parent::prepare_item_for_response($post_type, $request);

        $response->remove_link('collection');
        $response->remove_link('https://api.w.org/items');

        $data = $response->get_data();

        $data['labels'] = [
            'plural' => $post_type->labels->name,
            'singular' => $post_type->labels->singular_name,
        ];

        unset($data['rest_base']);

        $response->set_data($data);

        return $response;
    }
}
