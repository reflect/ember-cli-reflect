import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('project', 'reflect-productivity');
    controller.set('viewName', 'list');
    controller.set('token', 'c77b12dd-a370-48be-9b94-ee388b14510c');

    // list is the slug of the component we're targeting.
    // listItemClick is the event we're going to handlers for.
    let events = {
      list: {
        listItemClick: [
          (data) => {
            // This will change our controller viewName value, thus
            // changing the Reflect view that gets rendered.
            controller.set('viewName', 'simple-dashboard-view');

            // Filter on the name field of the selected card.
            controller.set('filters', [
              {field: 'Name', op: '=', value: data.rowData.Name, removable: true}
            ]);
          }
        ]
      }
    };

    // We need to pass these event handlers to the Reflect component.
    controller.set('events', events);
  }
});
