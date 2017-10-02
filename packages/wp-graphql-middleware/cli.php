<?php
namespace GraphQL;

class Commands extends \WP_CLI_Command
{
    private $responses = [];

    // @codingStandardsIgnoreLine
    private function fetchURL( $url, $attr ) {
        global $wp_embed;

        $wp_embed->usecache = false;
        add_filter( 'oembed_ttl', [ $this, '__oembed_ttl' ] );
        add_filter( 'embed_oembed_html', [ $this, '__embed_oembed_html' ], 10, 2 );
        add_filter( 'oembed_dataparse', [ $this, '__oembed_dataparse' ], 10, 3 );
        $wp_embed->shortcode( $attr, $url );
    }

    // @codingStandardsIgnoreLine
    public function __oembed_ttl() {
        remove_filter( 'oembed_ttl', [ $this, __FUNCTION__ ] );
        return 0;
    }

    // @codingStandardsIgnoreLine
    private function parseIDs( $ids ) {
        global $wp_embed;

        $oembed = _wp_oembed_get_object();

        foreach ($ids as $id) {
            $post = get_post( $id );
            if ($post->post_status !== 'publish') {
                continue;
            }

            \WP_CLI::line(
                \WP_CLI::colorize( '%c' . sprintf( 'Finding URLs in: %d', $id ) . '%n' )
            );

            $matched = [];

            // PREG_SET_ORDER
            preg_match_all(
                '|^(\s*)(https?://[^\s<>"]+)(\s*)$|im',
                $post->post_content,
                $matches1,
                PREG_SET_ORDER
            );

            if (!empty( $matches1 )) {
                foreach ($matches1 as $m) {
                    $matched[] = $m[2];
                }
            }

            preg_match_all(
                '|(<p(?: [^>]*)?>\s*)(https?://[^\s<>"]+)(\s*<\/p>)|i',
                $post->post_content,
                $matches2,
                PREG_SET_ORDER
            );

            if (!empty( $matches2 )) {
                foreach ($matches2 as $m) {
                    $matched[] = $m[2];
                }
            }

            preg_match_all(
                '/' . get_shortcode_regex( [ 'embed' ] ) . '/s',
                $post->post_content,
                $matches3,
                PREG_SET_ORDER
            );

            if (!empty( $matches3 )) {
                foreach ($matches3 as $m) {
                    $matched[] = $m[5];
                }
            }

            if (! empty( $matched )) {
                foreach (array_unique( $matched ) as $match) {
                    \WP_CLI::line( '- ' . $match );
                    $data = $oembed->get_data( $match );
                    if (! empty( $data )) {
                        $this->responses[ $match ] = $data;
                        $GLOBALS['post'] = $post;
                        $this->fetchURL( $match, [ 'width' => 450, 'height' => 0 ] );
                        $this->fetchURL( $match, [ 'width' => 740, 'height' => 0 ] );
                        $GLOBALS['post'] = null;
                        \WP_CLI::line(
                            \WP_CLI::colorize( '%RJSON: %n' ) . json_encode( $data )
                        );
                    } else {
                        \WP_CLI::line(
                            \WP_CLI::colorize( '%YNo response - (could be) setting to draft...%n' )
                        );
                        continue;
                        // \WP_CLI::error( 'Quit due to error.' );
                        // wp_update_post( [ 'ID' => $id, 'post_status' => 'draft' ] );
                        // \WP_CLI::line(
                        //     \WP_CLI::colorize( '%Y' . $id . ' set to draft.%n' )
                        // );
                    }
                }
            } else {
                \WP_CLI::line(
                    \WP_CLI::colorize( '%3No matches: deleting oembed caches... %n' )
                );
                $wp_embed->delete_oembed_caches( $id );
                \WP_CLI::line(
                    \WP_CLI::colorize( '%R' . sprintf( 'Removed ombed data for: %d. ', $id ) . '%n' )
                );
            }
            clean_post_cache( $post );
        }
    }

    // @codingStandardsIgnoreLine
    public function __embed_oembed_html( $html, $url ) {
        remove_filter( 'embed_oembed_html', [ $this, __FUNCTION__ ] );

        if (empty( $this->responses[ $url ] ) ||
            0 === strpos( $html, '<figure' )) {
            \WP_CLI::line(
                \WP_CLI::colorize( '%3Skipping a match in ' . __FUNCTION__ . ' %n' )
            );
            return $html;
        }

        \WP_CLI::line(
            \WP_CLI::colorize( '%R' . __FUNCTION__ . ' HTML: %n' ) . $html
        );

        $data = (array) $this->responses[ $url ];

        $formatted = getFormattedHTML( $data );
        \WP_CLI::line(
            \WP_CLI::colorize( '%RFiltered HTML: %n' ) . $formatted
        );

        return $formatted;
    }

    // @codingStandardsIgnoreLine
    public function __oembed_dataparse( $html, $response, $url ) {
        remove_filter( 'oembed_dataparse', [ $this, __FUNCTION__ ] );

        if (0 === strpos( $html, '<figure' )) {
            \WP_CLI::line(
                \WP_CLI::colorize( '%3Skipping a match in ' . __FUNCTION__ . ' %n' )
            );
            return $html;
        }

        \WP_CLI::line(
            \WP_CLI::colorize( '%R' . __FUNCTION__ . ' HTML: %n' ) . $html
        );
        $data = (array) $response;

        $formatted = getFormattedHTML( $data );
        \WP_CLI::line(
            \WP_CLI::colorize( '%RFiltered HTML: %n' ) . $formatted
        );

        return $formatted;
    }

    private function parseID( $id ) {
        \WP_CLI::line( 'Regenerating oembed data...' );

        $this->parseIDs( [ $id ] );

        \WP_CLI::success( 'All done!' );
    }

    // @codingStandardsIgnoreLine
    private function regenerate() {
        global $wpdb;

        \WP_CLI::line( 'Regenerating oembed data...' );

        $sql = $wpdb->prepare(
            "SELECT DISTINCT post_id FROM $wpdb->postmeta WHERE meta_key LIKE %s",
            esc_sql( '_oembed_%' )
        );
        $ids = $wpdb->get_col( $sql );
        if (empty( $ids )) {
            $sql = $wpdb->prepare(
                "SELECT ID FROM $wpdb->posts WHERE post_content LIKE %s",
                esc_sql( '%http%' )
            );
            $ids = $wpdb->get_col( $sql );
        }

        $this->parseIDs( $ids );

        \WP_CLI::success( 'All done!' );
    }

    // @codingStandardsIgnoreLine
    private function unknown() {
        global $wpdb;

        \WP_CLI::line( 'Regenerating unknown oembed data...' );

        $sql = "SELECT DISTINCT post_id FROM $wpdb->postmeta WHERE meta_value = '{{unknown}}' " .
            " AND meta_key LIKE '_oembed_%'";
        $ids = $wpdb->get_col( $sql );

        $this->parseIDs( $ids );

        \WP_CLI::success( 'All done!' );
    }

    // @codingStandardsIgnoreLine
    public function oembed( $args ) {
        if ($args && 'regenerate' === $args[0]) {
            if (! empty( $args[1] )) {
                $this->parseID( $args[1] );
            } else {
                $this->regenerate();
            }
        } elseif ($args && 'unknown' === $args[0]) {
            $this->unknown();
        }
    }
}

\WP_CLI::add_command( 'graphql', Commands::class );
