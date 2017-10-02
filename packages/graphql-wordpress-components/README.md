# WordPress Styled Components

## Warning

This is not really for public consumption yet, but ride the lightning if you must.

## Intro

This is a common package used by my GraphQL-powered apps: [wp-relay-app](https://github.com/staylor/wp-relay-app) and [wp-apollo-app](https://github.com/staylor/wp-apollo-app). It contains React components styled using [Emotion](https://github.com/tkh44/emotion). This common set of components allows me to style both apps in one place. CSS-in-JS is amazing, and [Emotion is worth a look](https://medium.com/@tkh44/emotion-ad1c45c6d28b).

## Install

You need a GraphQL server that is serving the schema exposed by [wp-graphql](https://github.com/staylor/wp-graphql).
That server needs to point at your WordPress install (see `.env`) that has the [GraphQL Middleware plugin](https://github.com/staylor/wp-graphql-middleware) installed.
You can clone one of the above, Relay or Apollo, projects to start hacking.
