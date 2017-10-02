<?php
namespace GraphQL\REST\Controller;

class Sidebars extends \WP_REST_Controller
{
    // @codingStandardsIgnoreLine
    public function __construct() {
        $this->namespace = 'graphql/v1';
        $this->rest_base = 'sidebars';
    }

    // @codingStandardsIgnoreLine
    public function register_routes() {
        register_rest_route( $this->namespace, '/' . $this->rest_base, [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [ $this, 'get_items' ],
                'permission_callback' => [ $this, 'get_items_permissions_check' ],
                'args' => $this->get_collection_params(),
            ],
            'schema' => [ $this, 'get_public_item_schema' ],
        ] );

        register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<sidebar>[\w-]+)', [
            'args' => [
                'sidebar' => [
                    'description' => __( 'An alphanumeric identifier for the sidebar.' ),
                    'type' => 'string',
                ],
            ],
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [ $this, 'get_item' ],
                'permission_callback' => [ $this, 'get_item_permissions_check' ],
                'args' => [
                    'context' => $this->get_context_param( [ 'default' => 'view' ] ),
                ],
            ],
            'schema' => [ $this, 'get_public_item_schema' ],
        ] );
    }

    // @codingStandardsIgnoreLine
    public function get_items_permissions_check($request) {
        if ('edit' === $request['context'] && ! current_user_can( 'edit_theme_options' )) {
            return new WP_Error(
                'rest_cannot_view',
                __( 'Sorry, you are not allowed to edit theme options on this site.' ),
                [ 'status' => rest_authorization_required_code() ]
            );
        }
        return true;
    }

    // @codingStandardsIgnoreLine
    protected function hydrate_widgets($sidebar, $widget_ids) {
        global $wp_registered_widgets;

        $widgets = [];
        foreach ($widget_ids as $widget_id) {
            if (! isset( $wp_registered_widgets[ $widget_id ] )) {
                continue;
            }

            $widget = $wp_registered_widgets[ $widget_id ];
            $merged = array_merge( $sidebar, [
                'widget_id' => $widget_id,
                'widget_name' => $widget['name']
            ] );
            $params = array_merge(
                [ $merged ],
                (array) $widget['params']
            );

            // Substitute HTML id and class attributes into before_widget
            $classname_ = '';
            foreach ((array) $widget['classname'] as $cn) {
                if (is_string($cn)) {
                    $classname_ .= '_' . $cn;
                } elseif (is_object($cn)) {
                    $classname_ .= '_' . get_class($cn);
                }
            }

            $classname_ = ltrim($classname_, '_');
            $params[0]['before_widget'] = sprintf($params[0]['before_widget'], $widget_id, $classname_);

            $params = apply_filters( 'dynamic_sidebar_params', $params );

            if (! is_callable( $widget['callback'] )) {
                continue;
            }

            ob_start();
            do_action( 'dynamic_sidebar', $widget );
            call_user_func_array( $widget['callback'], $params );
            $rendered = ob_get_clean();

            $widgets[] = [
                'id' => $widget['id'],
                'name' => $widget['name'],
                'classname' => $widget['classname'],
                'description' => $widget['description'],
                'content' => [
                    'rendered' => $rendered,
                ],
            ];
        }

        return $widgets;
    }

    // @codingStandardsIgnoreLine
    public function get_items($request) {
        global $wp_registered_sidebars;

        $data = [];
        $sidebars_widgets = wp_get_sidebars_widgets();

        foreach ($sidebars_widgets as $sidebar_id => $widget_ids) {
            if (!isset( $wp_registered_sidebars[ $sidebar_id ])) {
                continue;
            }

            $sidebar = $wp_registered_sidebars[ $sidebar_id ];
            $sidebar['widgets'] = $this->hydrate_widgets( $sidebar, $widget_ids );

            $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
            $sidebar = $this->add_additional_fields_to_object( $sidebar, $request );
            $sidebar = $this->filter_response_by_context( $sidebar, $context );
            $data[] = $sidebar;
        }

        if (empty( $data)) {
            // Response should still be returned as a JSON object when it is empty.
            $data = (object) $data;
        }

        return rest_ensure_response( $data );
    }

    // @codingStandardsIgnoreLine
    public function get_item_permissions_check($request) {
        if ('edit' === $request['context'] && ! current_user_can( 'edit_theme_options' )) {
            return new WP_Error(
                'rest_forbidden_context',
                __( 'Sorry, you are not allowed to edit theme options on this site.' ),
                [ 'status' => rest_authorization_required_code() ]
            );
        }
        return true;
    }

    // @codingStandardsIgnoreLine
    public function get_item($request) {
        global $wp_registered_sidebars, $wp_registered_widgets;

        $sidebar_id = $request['sidebar'];
        if (empty( $sidebar_id ) || empty( $wp_registered_sidebars[ $sidebar_id ] )) {
            return null;
        }

        $sidebars_widgets = wp_get_sidebars_widgets();
        if (empty( $sidebars_widgets[ $sidebar_id ] )) {
            return null;
        }

        $sidebar = $wp_registered_sidebars[ $sidebar_id ];
        $widget_ids = $sidebars_widgets[ $sidebar_id ];
        $sidebar['widgets'] = $this->hydrate_widgets( $sidebar, $widget_ids );

        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
        $sidebar = $this->add_additional_fields_to_object( $sidebar, $request );
        $sidebar = $this->filter_response_by_context( $sidebar, $context );

        $data = $this->prepare_item_for_response( $sidebar, $request );
        return rest_ensure_response( $data );
    }

    // @codingStandardsIgnoreLine
    public function prepare_item_for_response($sidebar, $request) {
        $base = 'sidebars';
        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
        $data = $this->add_additional_fields_to_object( $sidebar, $request );
        $data = $this->filter_response_by_context( $data, $context );

        // Wrap the data in a response object.
        $response = rest_ensure_response( $data );

        $response->add_links( [
            'collection' => [
                'href' => rest_url( sprintf( '%s/%s', $this->namespace, $this->rest_base ) ),
            ],
            'https://api.w.org/items' => [
                'href' => rest_url( sprintf( 'wp/v2/%s', $base ) ),
            ],
        ] );

        return apply_filters( 'rest_prepare_sidebar', $response, $sidebar, $request );
    }

    // @codingStandardsIgnoreLine
    public function get_item_schema() {
        $schema = [
            '$schema' => 'http://json-schema.org/schema#',
            'title' => 'sidebar',
            'type' => 'object',
            'properties' => [
                'id' => [
                    'description' => __( 'The unique identifier by which the sidebar will be called.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'name' => [
                    'description' => __( 'The name or title of the sidebar displayed in the Widgets interface.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'description' => [
                    'description' => __( 'Description of the sidebar, displayed in the Widgets interface.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'class' => [
                    'description' => __( 'Extra CSS class to assign to the sidebar in the Widgets interface.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'before_widget' => [
                    'description' =>
                      __( 'HTML content to prepend to each widget\'s HTML output when assigned to this sidebar.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'after_widget' => [
                    'description' =>
                      __( 'HTML content to append to each widget\'s HTML output when assigned to this sidebar.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'before_title' => [
                    'description' => __( 'HTML content to prepend to the sidebar title when displayed.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'after_title' => [
                    'description' => __( 'HTML content to append to the sidebar title when displayed.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'widgets' => [
                    'description' => __( 'Widgets associated with the sidebar.' ),
                    'type' => 'array',
                    'items' => [
                        'type' => 'object',
                        'properties' => [
                            'id' => [
                                'description' => __( 'The widget id.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'name' => [
                                'description' => __( 'The widget name.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'classname' => [
                                'description' => __( 'The widget classname.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'description' => [
                                'description' => __( 'The widget description.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'content' => [
                                'description' => __( 'The content for the object.' ),
                                'type' => 'object',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                                'properties' => [
                                    'rendered' => [
                                        'description' => __( 'HTML content for the object, transformed for display.' ),
                                        'type' => 'string',
                                        'context' => [ 'view', 'edit' ],
                                        'readonly' => true,
                                    ],
                                ],
                            ],
                        ],
                    ],
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
            ],
        ];
        return $this->add_additional_fields_schema( $schema );
    }

    // @codingStandardsIgnoreLine
    public function get_collection_params() {
        return [];
    }
}
