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

* `version`: Version of Reflect.js to source from Reflect's CDN. Will be overwritten by either of the following settings:
* `css`: CSS file to load instead of the default.
* `js`: JS file to load instead of the default.

### Supported attributes

* `token`: (Required) A Reflect API token. Read-only tokens are suggested.
* `tokens` A list of generated tokens.
* `view` (Required) the slug of the view to embed.
* `project` (Required) the slug of the project in which this view lives.
* `filters`: An array containing filter objects for this view.
* `dates`: An array of date ranges. Each date range should itself be an array.
* `parameters`: An array containing filter objects for this view.
* `events`: an object containing event callbacks for your components. See more below.
* `overrides`: An array of objects that allow you to modify the Reflect view configuration at runtime.
* `colors`: An object that allows you to define static colors for dimensional values.

NOTE: You must supply either `token` or `tokens`.

#### Events

Events allow you to tightly integrate your Reflect View with the app it's embedded within.
Through the Ember component, events are set up through an `events` property that looks like this:

```javascript
{
  componentSlug: {
    eventType: [
      function(data) {}
    ]
  }
}
```
The keys of the parent object are the slugs of the components you wish to add events to.
The values are objects as well, where the keys are event types, and the values are an array of callbacks
for that event. Refer to our Reflect.js documentation for more information on events. https://reflect.io/docs/reference/reflect-js.html

## Installation

`npm install ember-cli-reflect`
