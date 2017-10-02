<?php
namespace GraphQL\REST\Controller;

class Comments extends \WP_REST_Comments_Controller
{
    // @codingStandardsIgnoreLine
    public function __construct() {
        $this->namespace = 'graphql/v1';
        $this->rest_base = 'comments';

        $this->meta = new \WP_REST_Comment_Meta_Fields();
    }

    // @codingStandardsIgnoreLine
    public function prepare_item_for_response( $comment, $request ) {
        $response = parent::prepare_item_for_response( $comment, $request );

        $response->remove_link( 'self' );
        $response->remove_link( 'collection' );
        $response->remove_link( 'up' );
        $response->remove_link( 'in-reply-to' );
        $response->remove_link( 'children' );

        $data = $response->get_data();
        $value = $comment->comment_author .
            $comment->comment_author_email .
            $comment->comment_author_url;

        $owner = $value ? base64_encode( $value ) : '';
        $data['author_hash'] = $owner;
        if ('view' === $request['context']) {
            $data['content']['raw'] = $comment->comment_content;
        }
        $response->set_data( $data );

        if (! $comment->author &&
            'POST' === $request->get_method() &&
            '/comments' === substr( $request->get_route(), -9 )) {
            $comment_cookie_lifetime = apply_filters( 'comment_cookie_lifetime', 30000 );
            $format = '%s=%s; Path=/; Max-Age=' . $comment_cookie_lifetime . ';';

            $author_cookie = 'comment_author';
            $author_value = sprintf(
                $format,
                $author_cookie,
                $comment->comment_author
            );
            $response->header( 'Set-Cookie', $author_value, false );
            $email_cookie = 'comment_author_email';
            $email_value = sprintf(
                $format,
                $email_cookie,
                $comment->comment_author_email
            );
            $response->header( 'Set-Cookie', $email_value, false );
            $url_cookie = 'comment_author_url';
            $url_value = sprintf(
                $format,
                $url_cookie,
                esc_url( $comment->comment_author_url )
            );
            $response->header( 'Set-Cookie', $url_value, false );
        }

        return $response;
    }
}
