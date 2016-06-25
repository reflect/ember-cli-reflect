import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('viewName', 'simple-dashboard-view');
    controller.set('project', 'reflect-productivity');
    controller.set('token', 'c77b12dd-a370-48be-9b94-ee388b14510c');

    controller.set('filters', [
      {field: 'Name', op: '=', value: 'Colby'}
    ]);
  }
});
