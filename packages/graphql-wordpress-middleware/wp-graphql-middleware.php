<?php
/*
Plugin Name: WordPress GraphQL Middleware
Plugin URI: https://github.com/staylor/wp-graphql/
Description: Adds missing REST routes to support a robust implementation of GraphQL, enabling headless WordPress themes
Version: 0.0.1
Author: Scott Taylor
Author URI: http://highforthis.com
*/
require_once __DIR__ . '/vendor/autoload.php';

// this catches regeneration
add_filter('oembed_dataparse', '\GraphQL\oembed_dataparse', 10, 3);
add_filter('rest_allow_anonymous_comments', '__return_true');
add_action('rest_api_init', '\GraphQL\REST\routes', 99);
add_action('rest_api_init', '\GraphQL\REST\api_filter_add_filters');
