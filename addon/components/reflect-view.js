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

  _validate(prop, value) {
    if (!value || typeof value !== 'string') {
      Ember.Logger.error(`Please pass a valid ${prop}.`);
      return true;
    }

    return false;
  },

  didRender: function() {
    if (this.get('parameters')) {
      this.ui.withParameters(this.get('parameters'));
    }

    if (this.get('overrides')) {
      this.ui.withOverrides(this.get('overrides'));
    }

    if (this.get('filters')) {
      this.ui.withFilters(this.get('filters'));
    }

    if (this.get('dates')) {
      this.ui.withDates(this.get('dates')[0], this.get('dates')[1]);
    }

    if (this.get('colors')) {
      this.ui.withColors(this.get('colors'));
    }

    if (this.get('events')) {
      this.ui.withEvents(this.get('events'));
    }

    const project = this.get('project');
    const view = this.get('view');

    if (this._validate('project', project) || this._validate('view', view)) {
      return;
    }

    this.ui.view(this.element, project, view);
  }
});
