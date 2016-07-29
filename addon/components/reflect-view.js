import Ember from 'ember';
import layout from '../templates/components/reflect-view';

export default Ember.Component.extend({
  layout,

  init: function() {
    this._super();

    let token = this.get('token') || this.get('tokens');

    if (!token) {
      Ember.Logger.error('Please supply either token or an array of tokens.');
    }

    this.ui = new ReflectUI(token);
  },

  didRender: function() {
    if (this.get('parameters')) {
      this.ui.withParameters(this.get('parameters'));
    }

    if (this.get('filters')) {
      this.ui.withFilters(this.get('filters'));
    }

    // Events are defined as an object where keys are component slugs,
    // and values are objects with keys that are the event name and values
    // are arrays of callbacks.
    if (this.get('events')) {
      // Looping over each component slug.
      Object.keys(this.events).forEach(slug => {
        let eventTypes = this.events[slug];

        // For this component, look over each event type.
        Object.keys(eventTypes).forEach(eventType => {

          // For each event type, setup all the callbacks.
          eventTypes[eventType].map(cb => {
            this.ui.on(slug, eventType, cb);
          });
        });
      });
    }

    this.ui.view(this.element, this.get('project'), this.get('view'));
  }
});
