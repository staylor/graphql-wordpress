<?php
namespace GraphQL\REST\Controller;

class NavMenus extends \WP_REST_Controller
{
    // @codingStandardsIgnoreLine
    public function __construct() {
        $this->namespace = 'graphql/v1';
        $this->rest_base = 'nav-menus';
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

        register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<menu>[\w-]+)', [
          'args' => [
              'menu' => [
                  'description' => __( 'An alphanumeric identifier for the nav menu.' ),
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
    public function get_items_permissions_check( $request) {
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
    public function hydrate_menu( $menu ) {
        $nav_menu = [
            'id' => $menu->term_id,
            'name' => $menu->name,
            'slug' => $menu->slug,
            'description' => $menu->description,
        ];
        $menu_items = wp_get_nav_menu_items( $nav_menu['id' ] );
        $items = [];
        foreach ($menu_items as $menu_item) {
            $slug = null;
            $rewrite_slug = null;
            if ($menu_item->type === 'post_type') {
                $post_type = get_post_type_object( $menu_item->object );
                $rewrite_slug = empty( $post_type->rewrite['slug'] ) ? '' : $post_type->rewrite['slug' ];
                if ($menu_item->object_id) {
                    $post = get_post( $menu_item->object_id );
                    $slug = $post->post_name;
                }
            } elseif ($menu_item->type === 'taxonomy') {
                $taxonomy = get_taxonomy( $menu_item->object );
                $rewrite_slug = empty( $taxonomy->rewrite['slug'] ) ? '' : $taxonomy->rewrite['slug'];
                if ($menu_item->object_id) {
                    $term = get_term( $menu_item->object_id );
                    $slug = $term->slug;
                }
            }

            $db_id = (int) $menu_item->db_id;
            $object_id = (int) $menu_item->object_id;

            $item = [
                'id' => $db_id,
                'parent' => (int) $menu_item->menu_item_parent,
                'order' => (int) $menu_item->menu_order,
                'type' => $menu_item->type,
                'type_name' => $menu_item->object,
                'type_slug' => $rewrite_slug,
                'object_id' => $object_id ? $object_id : null,
                'object_slug' => $slug,
                'label' => $menu_item->type_label,
                'url' => $menu_item->url,
                'title' => $menu_item->title,
                'target' => $menu_item->target,
                'description' => $menu_item->description,
            ];
            $items[] = $item;
        }
        $nav_menu['items'] = $items;

        return $nav_menu;
    }

    // @codingStandardsIgnoreLine
    public function get_items( $request) {
        $data = [];
        $menus = wp_get_nav_menus();

        foreach ($menus as $menu) {
            $nav_menu = $this->hydrate_menu( $menu );
            $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
            $nav_menu = $this->add_additional_fields_to_object( $nav_menu, $request );
            $nav_menu = $this->filter_response_by_context( $nav_menu, $context );
            $data[] = $nav_menu;
        }

        if (empty( $data)) {
            // Response should still be returned as a JSON object when it is empty.
            $data = (object) $data;
        }

        return rest_ensure_response( $data );
    }

    // @codingStandardsIgnoreLine
    public function get_item_permissions_check( $request) {
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
    public function get_item( $request) {
        $menu = wp_get_nav_menu_object( $request['menu'] );
        $nav_menu = $this->hydrate_menu( $menu );

        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
        $nav_menu = $this->add_additional_fields_to_object( $nav_menu, $request );
        $nav_menu = $this->filter_response_by_context( $nav_menu, $context );

        $data = $this->prepare_item_for_response( $nav_menu, $request );
        return rest_ensure_response( $data );
    }

    // @codingStandardsIgnoreLine
    public function prepare_item_for_response( $nav_menu, $request) {
        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
        $data = $this->add_additional_fields_to_object( $nav_menu, $request );
        $data = $this->filter_response_by_context( $data, $context );

        // Wrap the data in a response object.
        $response = rest_ensure_response( $data );

        $response->add_links( [
            'collection' => [
                'href' => rest_url( sprintf( '%s/%s', $this->namespace, $this->rest_base )),
            ],
            'https://api.w.org/items' => [
                'href' => rest_url( sprintf( '%s/%s', $this->namespace, $this->rest_base )),
            ],
        ] );

        return apply_filters( 'rest_prepare_nav_menu', $response, $nav_menu, $request );
    }

    // @codingStandardsIgnoreLine
    public function get_item_schema() {
        $schema = [
            '$schema' => 'http://json-schema.org/schema#',
            'title' => 'nav menu',
            'type' => 'object',
            'properties' => [
                'id' => [
                    'description' => __( 'The unique identifier by which the nav menu will be called.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'name' => [
                    'description' => __( 'The name or title of the nav menu displayed in the Menus interface.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'description' => [
                    'description' => __( 'Description of the nav menu, displayed in the Nav Menu interface.' ),
                    'type' => 'string',
                    'context' => [ 'view', 'edit' ],
                    'readonly' => true,
                ],
                'items' => [
                    'description' => __( 'Widgets associated with the sidebar.' ),
                    'type' => 'array',
                    'items' => [
                        'type' => 'object',
                        'properties' => [
                            'id' => [
                                'description' => __( 'Unique identifier for the object.' ),
                                'type' => 'integer',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'parent' => [
                                'description' => __( 'Unique identifier for the object parent, if one exists.' ),
                                'type' => 'integer',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'order' => [
                                'description' =>
                                  __( 'The order of the item in relation to other items of its parent.' ),
                                'type' => 'integer',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'type' => [
                                'description' => __( 'The classification of object type.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'type_name' => [
                                'description' => __( 'The type of object within a classification.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'type_slug'    => [
                                'description' => __( 'The rewrite slug for the object type, if applicable.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'object_id' => [
                                'description' => __( 'The specific item object id, if applicable.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'object_slug' => [
                                'description' => __( 'The specific item object slug, if applicable.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'url' => [
                                'description' => __( 'The url for the item.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'title' => [
                                'description' => __( 'The display name for the item.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'target' => [
                                'description' => __( 'The target for the item.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
                            ],
                            'description' => [
                                'description' => __( 'A description of the item.' ),
                                'type' => 'string',
                                'context' => [ 'view', 'edit' ],
                                'readonly' => true,
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
