<?php
namespace GraphQL\REST;

// @codingStandardsIgnoreLine
function routes() {
    $controller = new Controller\Comments();
    $controller->register_routes();

    $controller = new Controller\Taxonomies();
    $controller->register_routes();

    $controller = new Controller\PostTypes();
    $controller->register_routes();

    $controller = new Controller\Sidebars();
    $controller->register_routes();

    $controller = new Controller\NavMenus();
    $controller->register_routes();

    $controller = new Controller\Settings();
    $controller->register_routes();

    $controller = new Controller\Posts( 'post' );
    $controller->register_routes();
}

// @codingStandardsIgnoreLine
function api_filter_add_filter_param( $args, $request ) {
    // Bail out if no filter parameter is set.
    if (empty( $request['filter'] ) || ! is_array( $request['filter'] )) {
        return $args;
    }
    $filter = $request['filter'];
    if (isset( $filter['posts_per_page'] )
        && ( (int) $filter['posts_per_page'] >= 1
        && (int) $filter['posts_per_page'] <= 100 )) {
        $args['post_per_page'] = $filter['posts_per_page'];
    }
    global $wp;
    $vars = apply_filters( 'query_vars', $wp->public_query_vars );
    foreach ($vars as $var) {
        if (isset( $filter[ $var ] )) {
            $args[ $var ] = $filter[ $var ];
        }
    }
    return $args;
}

// @codingStandardsIgnoreLine
function api_filter_add_filters() {
    foreach (get_post_types( array( 'show_in_rest' => true ), 'objects' ) as $post_type) {
        add_filter( 'rest_' . $post_type->name . '_query', __NAMESPACE__ . '\api_filter_add_filter_param', 10, 2 );
    }
}
