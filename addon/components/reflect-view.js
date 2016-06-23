import Ember from 'ember';
import layout from '../templates/components/reflect-view';

export default Ember.Component.extend({
  layout,

  setup: Ember.on('didInsertElement', function() {
    const { parameters, token, project, view } = this.attrs;

    let ui = new ReflectUI(token);

    if (parameters) {
      ui = ui.withParameters(parameters);
    }

    ui.view(this.element, project, view);
  }),
});
