import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('viewName', 'reflectui-examples');
    controller.set('project', 'report');
    controller.set('token', 'adb30a82-ab3a-4036-85d7-ad5584b97acf');

    controller.set('events', {
      'datagrid-1': {tableCellClick: [(data) => console.log(data)]}
    });

    controller.set('filters', []);
  }
});
