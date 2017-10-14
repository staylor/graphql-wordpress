[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# WordPress Styled Components

## Warning

This is not really for public consumption yet, but ride the lightning if you must.

## Intro

This is a common package used by my GraphQL-powered apps: [relay-wordpress](https://github.com/staylor/graphql-wordpress/tree/master/packages/relay-wordpress) and [apollo-wordpress](https://github.com/staylor/graphql-wordpress/tree/master/packages/apollo-wordpress). It contains React components styled using [Emotion](https://github.com/emotion-js/emotion). This common set of components allows me to style both apps in one place. CSS-in-JS is amazing, and [Emotion is worth a look](https://medium.com/@tkh44/emotion-8-9f892346d0af).

## Install

You need a GraphQL server that is serving the schema exposed by [graphql-wordpress](https://github.com/staylor/graphql-wordpress/tree/master/packages/graphql-wordpress).
That server needs to point at your WordPress install (see `.env`) that has the [GraphQL Middleware plugin](https://github.com/staylor/graphql-wordpress/tree/master/packages/graphql-wordpress-middleware) installed.
You can clone one of the above, Relay or Apollo, projects to start hacking.
