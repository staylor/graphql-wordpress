[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# wp-graphql
WordPress REST API exposed via GraphQL

## tl;dr

Take a look: http://graphql.highforthis.com/graphql

This is mega-alpha, but also an RFC. Browse the docs on the right to create a query on the left (which also supports autocomplete). Here's a query to try out:

A single item:
```
{
  viewer {
    post(id: "UG9zdDoyNjk2") {
      id
      title {
        rendered
      }
      content {
        rendered
      }
      date
      author {
        name
      }
      categories {
        name
      }
    }
  }
}
```

Collections:
```
{
  viewer {
    posts(category: "watch-this", first: 10) {
      edges {
        node {
          id
          title {
            rendered
          }
          date
          author {
            name
          }
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
}

```

## What is this?

Facebook has open-sourced [GraphQL](http://graphql.org/) along with a reference implementation written in Node: [express-graphql](https://github.com/graphql/express-graphql). GraphQL is a way of exposing your data through a standardized API while leaving the leaving the resolution of that data in the background opaque. GraphQL comes with a tool called GraphiQL to visualize your schema - where the data comes from is unimportant.

`wp-graphql` is GraphQL schema representation of the WordPress REST API, written in Node.

## Why do this?

Facebook has also open-sourced [Relay](https://facebook.github.io/relay/). As the Relay docs state: "simply declare your data requirements using GraphQL and let Relay figure out how and when to fetch your data." This is compelling when working with React and building an isomorphic/universal JS app.

`wp-graphql` is a step towards making isomorphic apps written in JS use data from a WordPress instance, via read-only data from the REST API, easy and painless. You don't have to worry about fetching data. Relay's data requirements are declarative - the complicated bits are resolved for you.

## Ok, what is next?

There will be changes to this project to support Relay idioms, and there will be a companion project that bootstraps Relay on top of [kyt](https://github.com/nytimes/kyt), React, Relay, React Router, CSS Modules, and Webpack - all tools needed to make awesome isomorphic apps.
