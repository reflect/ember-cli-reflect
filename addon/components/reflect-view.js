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

    this.ui.view(this.element, this.get('project'), this.get('view'));
  }
});
