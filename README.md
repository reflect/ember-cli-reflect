# Reflect Ember

EmberCLI addon that provides a `reflect-view` component for rendering [Reflect](https://reflect.io) views into your Ember app.

## Usage

```handlebars
{{ reflect-view
    token="API_TOKEN"
    project="project"
    filters=filters
    parameters=parameters
    view="view-name" }}
```

### Configuration

The addon can be configured through a `reflect` object in `config/environment.js`.

* `css`: CSS file to load instead of the default.

### Supported attributes

* `token`: (Required) A Reflect API token. Read-only tokens are suggested.
* `tokens` A list of generated tokens.
* `view` (Required) the slug of the view to embed.
* `project` (Required) the slug of the project in which this view lives.
* `filters`: An array containing filter objects for this view.
* `parameters`: An array containing filter objects for this view.

NOTE: You must supply either `token` or `tokens`.

## Installation

`npm install ember-cli-reflect`
