# Reflect Ember

EmberCLI addon that provides a `reflect-view` component for rendering [Reflect](https://reflect.io) views into your Ember app.

## Usage

```handlebars
{{ reflect-view
    token="API_TOKEN"
    project="project"
    filters=filters
    view="view-name" }}
```

### Supported attributes

* `token`: A Reflect API token. Read-only tokens are suggested.
* `view` (Required) the slug of the view to embed.
* `project` (Required) the slug of the project in which this view lives.
* `filters`: An array containing filter objects for this view.

NOTE: You must supply either `token` or `parameters`.

## Installation

TODO
