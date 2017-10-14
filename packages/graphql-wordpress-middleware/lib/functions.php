<?php
namespace GraphQL;

// @codingStandardsIgnoreLine
function encodeStr($str) {
    $list = get_html_translation_table(HTML_ENTITIES);
    unset($list['"'], $list['<'], $list['>'], $list['&']);
    $str = str_replace("'", '&#039;', $str);
    return addslashes(strtr($str, $list));
}

// @codingStandardsIgnoreLine
function getFormattedHTML($data) {
    $escaped = [];
    foreach ($data as $key => $value) {
        if (is_string($value)) {
            $escaped[ $key ] = encodeStr($value);
        } else {
            $escaped[ $key ] = $value;
        }
    }

    return sprintf(
        '<figure class="embed"><img src="%s" alt="%s" /><figcaption>%s</figcaption>' .
        '<script type="application/json">%s</script></figure>',
        // upgrade YouTube thumbnails
        str_replace('hqdefault', 'maxresdefault', $data['thumbnail_url']),
        esc_attr($data['title']),
        $data['title'],
        json_encode($escaped)
    );
}

// @codingStandardsIgnoreLine
function oembed_dataparse($html, $response, $url) {
    if (0 === strpos($html, '<figure')) {
        return $html;
    }

    $data = (array) $response;

    return getFormattedHTML($data);
}

// @codingStandardsIgnoreLine
function toGlobalID($comment) {
    return base64_encode('Comment:' . $comment->comment_ID);
}

// this can be used to toggle UI on the front end for owners
// this value is not sufficient for submission
// @codingStandardsIgnoreLine
function getAuthorHash($comment) {
    // this value is available on the frontend as an opaque ID
    $graphqlID = toGlobalID($comment);
    return md5($graphqlID . $comment->comment_author_email);
}

// @codingStandardsIgnoreLine
function getCommentEditTokenKey($comment) {
    return 'token_' . toGlobalID($comment);
}

// @codingStandardsIgnoreLine
function getCommentEditTokenValue($comment) {
    // wp_hash() uses internal keys and salts, not spoofable on frontend
    // author_hash is creatable on frontend, but wp_hash is not
    return wp_hash(getAuthorHash($comment));
}
