import Ember from 'ember';
import layout from '../templates/components/reflect-view';

export default Ember.Component.extend({
  layout,

  setup: Ember.on('didInsertElement', function() {
    if (!this.get('parameters') && !this.get('token')) {
      Ember.Logger.error('Please supply either a token or parameters to reflect-view');
    }

    let ui = new ReflectUI(this.get('token'));

    if (this.get('parameters')) {
      ui.withParameters(this.get('parameters'));
    }

    if (this.get('filters')) {
      ui.addFilters(this.get('filters'));
    }

    ui.view(this.element, this.get('project'), this.get('view'));
  }),
});
