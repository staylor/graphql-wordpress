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
        $response = parent::prepare_item_for_response($comment, $request);

        $response->remove_link('self');
        $response->remove_link('collection');
        $response->remove_link('up');
        $response->remove_link('in-reply-to');
        $response->remove_link('children');

        $data = $response->get_data();

        $authorHash = \GraphQL\getAuthorHash($comment);
        $data['author_hash'] = $authorHash;
        if ('view' === $request['context']) {
            $data['content']['raw'] = $comment->comment_content;
        }
        $response->set_data($data);

        if (! $comment->author &&
            \WP_REST_Server::CREATABLE === $request->get_method() &&
            $this->rest_base === substr($request->get_route(), -8)) {
            $commentCookieLifetime = apply_filters('comment_cookie_lifetime', 30000);
            $format = '%s=%s; Path=/; Max-Age=' . $commentCookieLifetime . ';';

            // author, email, and url cookies are simply a convenience for
            // pre-populating form values

            $authorCookie = sprintf(
                $format,
                'comment_author',
                $comment->comment_author
            );
            $response->header('Set-Cookie', $authorCookie, false);

            $emailCookie = sprintf(
                $format,
                'comment_author_email',
                $comment->comment_author_email
            );
            $response->header('Set-Cookie', $emailCookie, false);

            $urlCookie = sprintf(
                $format,
                'comment_author_url',
                esc_url($comment->comment_author_url)
            );
            $response->header('Set-Cookie', $urlCookie, false);

            $tokenCookie = sprintf(
                '%s=%s; Path=/; Max-Age=' . DAY_IN_SECONDS . ';',
                urlencode(\GraphQL\getCommentEditTokenKey($comment)),
                \GraphQL\getCommentEditTokenValue($comment)
            );
            $response->header('Set-Cookie', $tokenCookie, false);
        }

        return $response;
    }

    // Anonymous users can edit their comments for 24 hours if they have this cookie
    // @codingStandardsIgnoreLine
    public function checkToken($token, $comment) {
        $value = \GraphQL\getCommentEditTokenValue($comment);
        return $token === $value;
    }

    // @codingStandardsIgnoreLine
    public function update_item_permissions_check($request) {
        $check = parent::update_item_permissions_check($request);
        if (true === $check) {
            return $check;
        }
        $comment = $this->get_comment($request['id']);
        $token = $request['token'];
        if (!$token) {
            return false;
        }
        return $this->checkToken($token, $comment);
    }

    // @codingStandardsIgnoreLine
    public function delete_item_permissions_check($request) {
        $check = parent::delete_item_permissions_check($request);
        if (true === $check) {
            return $check;
        }
        $comment = $this->get_comment($request['id']);
        $token = $request['token'];
        if (!$token) {
            return false;
        }
        return $this->checkToken($token, $comment);
    }
}
