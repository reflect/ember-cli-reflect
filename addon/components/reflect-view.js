import Ember from 'ember';
import layout from '../templates/components/reflect-view';

export default Ember.Component.extend({
  layout,

  setup: Ember.on('didInsertElement', function() {
    let token = this.get('token') || this.get('tokens');

    if (!token) {
      Ember.Logger.error('Please supply either token or an array of tokens.');
    }

    this.ui = new ReflectUI(token);
  }),

  doRender: Ember.on('didRender', function() {
    if (this.get('parameters')) {
      this.ui.withParameters(this.get('parameters'));
    }

    if (this.get('filters')) {
      this.ui.addFilters(this.get('filters'));
    }

    this.ui.view(this.element, this.get('project'), this.get('view'));
  }),
});
