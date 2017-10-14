<?php
namespace GraphQL\REST\Controller;

class Settings extends \WP_REST_Settings_Controller
{
    // @codingStandardsIgnoreLine
    public function __construct() {
        $this->namespace = 'graphql/v1';
        $this->rest_base = 'settings';
    }

    // @codingStandardsIgnoreLine
    public function get_item_permissions_check($request) {
        return \WP_REST_Server::READABLE === $request->get_method();
    }
}
