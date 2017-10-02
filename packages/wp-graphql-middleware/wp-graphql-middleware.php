<?php
/*
Plugin Name: WordPress GraphQL Middleware
Plugin URI: https://github.com/staylor/wp-graphql/
Description: Adds missing REST routes to support a robust implementation of GraphQL, enabling headless WordPress themes
Version: 0.0.1
Author: Scott Taylor
Author URI: http://highforthis.com
*/
$dir = __DIR__ . '/lib/GraphQL/REST/Controller';

require_once $dir . '/Comments.php';
require_once $dir . '/Sidebars.php';
require_once $dir . '/NavMenus.php';
require_once $dir . '/Taxonomies.php';
require_once $dir . '/PostTypes.php';
require_once $dir . '/Settings.php';
require_once $dir . '/Posts.php';
require_once __DIR__ . '/lib/functions.php';
require_once __DIR__ . '/lib/rest-api.php';

// this catches regeneration
add_filter( 'oembed_dataparse', '\GraphQL\oembed_dataparse', 10, 3 );
add_filter( 'rest_allow_anonymous_comments', '__return_true' );
add_action( 'rest_api_init', '\GraphQL\REST\routes', 99 );
add_action( 'rest_api_init', '\GraphQL\REST\api_filter_add_filters' );
