import Ember from 'ember';
import layout from '../templates/components/reflect-view';

export default Ember.Component.extend({
  layout,

  setup: Ember.on('didInsertElement', function() {
    const ui = new ReflectUI(this.attrs.token);

    ui.view(this.element, this.attrs.project, this.attrs.view);
  }),
});
