# WordPress GraphQL Middleware
Extend the WordPress API with data to build headless themes with Relay and GraphQL.

## Installation

This code is still in active development. Clone this repo in your `wp-content/plugins` directory, then activate the plugin in your WordPress admin. `git pull` to receive updates.

## REST API Extensions

This plugin extends the existing WordPress REST API to provide more data than is currently available. However, instead of filtering the current endpoints, new endpoint are provided that extend the existing endpoints. This ensures that the core endpoints work exactly as you expect.

Most of these endpoints remove the `_links` property, which is a JSON Schema construct not embraced by GraphQL.

### Re-instates the "filter" param

In v1 of the JSON API, or whatever it used to be called, you could pass arbitrary public query vars to most endpoints via the `filter` param. This allowed stacking of params like so: `?filter[year]=2017&filter[monthnum]=4&filter[day]=20`. By installing this plugin, you can use `filter` again.

### `graphql/v1/comments`

This endpoint exists primarily to aid in creating a robust commenting UI for your app. The Comments endpoints in the REST API require authentication for most CRUD operations, but this plugin adds a filter to allow anonymous comment creation via the REST API.

`prepare_item_for_response()` has been extended to:
* add `Set-Cookie` headers to the response, so you can identify your users on the front end.
* provide the `raw` value alongside the `rendered` value for comments to allow quick access for editing.
* provide a `author_hash` value for each comment, to determine if the current user "owns" any of the anonymous comments.

### `graphql/v1/nav-menus`

The current set of endpoints do not expose Nav Menus, which is problematic if you are building an entire headless theme (a theme that does not actually live on top of WordPress proper). This endpoint does not allow Nav Menus to be edited.

There are 2 readonly routes:
* `graphql/v1/menus`, which returns the set of menus (and their items) returned by `wp_get_nav_menus()`
* `graphql/v1/menus/<menu>`, which hydrates the menu returned by `wp_get_nav_menu_object( $request['menu'] )`

TODO: support pagination args, so that people who build their site with a bunch of menus don't hit a wall after page 1 of results.

### `graphql/v1/posts`

This endpoint exists so that `raw` values are always returned alongside `rendered` values for `content` and `excerpt`. This is important so you don't have to parse HTML strings on the front end when setting values for `<meta>` tags, etc. Scripts and JSON are also properly stripped.

### `graphql/v1/types`

Returns a `labels` property for each type, containing 2 nodes: `singular` and `plural`, so display names can be used where appropriate.

### `graphql/v1/settings`

When creating "themes" or "apps" that use a CMS backend, it is best if most strings are dynamic, and don't require a code deploy to change them on a live site. The Settings endpoint provides some of this data, but it is not readable without auth when using the core endpoint. This endpoint simply allows Settings to be read.

### `graphql/v1/sidebars`

The current set of endpoints do not expose Sidebars/Widgets, which is problematic if you are building an entire headless theme (a theme that does not actually live on top of WordPress proper). This endpoint does not allow Sidebars/Widgets to be edited.

There are 2 readonly routes:
* `graphql/v1/sidebars`, which returns the sidebars (and their widgets) available by the PHP Global™ `$wp_registered_sidebars`
* `graphql/v1/sidebars/<sidebar>`, which hydrates the sidebar (and its widgets) returned by `$wp_registered_sidebars[ $request['sidebar'] ]`

### `graphql/v1/taxonomies`

Returns a `labels` property for each type, containing 2 nodes: `singular` and `plural`, so display names can be used where appropriate.
Returns a property, `rewrite`, that contains 1 node: `slug`, which is a hint that can be used on the frontend to construct routes. This helps avoid having to write a translation layer for Taxonomy Name -> Pretty Name. Think: `post_tag` and `tag`. This is the easiest way to know what is happening. By doing this, I was able to create a `Term` route, that supports all taxonomies. Not a requirement, but easier to do when you know what the URLs might look like when building.

## oEmbed Extensions

When building a media-heavy site, you might end up with a bunch of 3rd-party embeds everywhere. They seem innocuous in the database - usually just a URL on its own line. Where this can go off the rails is when you build a Single Page App™ using something like React, and you are simply dumping your content onto the page via `<Component dangerouslySetInnerHTML={{ __html: theInternet }} />`. What tends to happen: your Chrome console lights up like a Christmas tree, multiple iframes start going nuts, rendering is slowed... and your user clicks on nothing.

Would it not be better to show a Preview of the embed and then activate it when clicked? Would it not be better to have semantic markup in your content that gives you enough information to do what you need with the media, regardless of theme? A filter on `oembed_dataparse` has been provided to format your media like so:

```HTML
<figure>
  <img src={thumbnail_url} />
  <figcaption>{oEmbed_title}</figcaption>
  <script type="application/json">{...the_JSON_response_from_the_oembed_provider}</script>
</figure>
```
### What about existing embeds?

Tucked away in here are 2 WP-CLI commands:

* `wp oembed regenerate` - attempts to refetch all of your oEmbed-able URL data and replace the cached HTML output with the format described above.
* `wp oembed regenerate <ID>` - attempts to refetch all of the oEmbed-able URL data from a single post and replace the cached HTML output with the format described above.
* `wp oembed unknown` - attempts to re-try fetching all oEmbed responses that bombed-out the first time. It is possible that this command will need to be run multiple times.

These commands are not turned on by default, as they are still in active development, experimental, Alpha™ code. If you want to use them, you can load them in your `wp-cli.yml`:

```YAML
require:
  - wp-content/plugins/wp-graphql-middleware/vendor/autoload.php
  - wp-content/plugins/wp-graphql-middleware/cli.php
```

## Feedback

I built this plugin for personal use. I am writing a headless theme using [Relay Modern](https://facebook.github.io/relay/docs/relay-modern.html). If you find bugs (you will), and want to let me know:  
* File a GitHub Issue [above](https://github.com/staylor/wp-graphql-middleware/issues/new)
* @ me on [Twitter](https://twitter.com/wonderboymusic).
