<?php
namespace GraphQL;

// @codingStandardsIgnoreLine
function encodeStr( $str ) {
    $list = get_html_translation_table( HTML_ENTITIES );
    unset( $list['"'], $list['<'], $list['>'], $list['&'] );
    $str = str_replace( "'", '&#039;' , $str );
    return addslashes( strtr( $str, $list ) );
}

// @codingStandardsIgnoreLine
function getFormattedHTML( $data ) {
    $escaped = [];
    foreach ($data as $key => $value) {
        if (is_string( $value )) {
            $escaped[ $key ] = encodeStr( $value );
        } else {
            $escaped[ $key ] = $value;
        }
    }

    // <iframe width="356" height="200" src="https://www.youtube.com/embed/rUplxePolH4?feature=oembed" frameborder="0" allowfullscreen></iframe>

    return sprintf(
        '<figure class="embed"><img src="%s" alt="%s" /><figcaption>%s</figcaption>' .
        '<script type="application/json">%s</script></figure>',
        // upgrade YouTube thumbnails
        str_replace( 'hqdefault', 'maxresdefault', $data['thumbnail_url'] ),
        esc_attr( $data['title'] ),
        $data['title'],
        json_encode( $escaped )
    );
}

// @codingStandardsIgnoreLine
function oembed_dataparse( $html, $response, $url ) {
    if (0 === strpos( $html, '<figure' )) {
        return $html;
    }

    $data = (array) $response;

    return getFormattedHTML( $data );
}
