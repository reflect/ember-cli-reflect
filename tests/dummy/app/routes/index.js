import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('project', 'reflect-productivity');
    controller.set('viewName', 'simple-dashboard-view');
    controller.set('token', 'c77b12dd-a370-48be-9b94-ee388b14510c');

    // timeseries is the slug of the component we're targeting.
    // legendItemClick is the event we're going to handlers for.
    let events = {
      timeseries: {
        legendItemClick: [
          (data) => {
            // This will change our controller viewName value, thus
            // changing the Reflect view that gets rendered.
            controller.set('viewName', 'even-simpler-dashboard');

            // This will set the filters to filter for the series we clicked on.
            controller.set('filters', [
              {field: data.field, op: '=', value: data.value, removable: true}
            ]);
          }
        ]
      }
    };

    // We need to pass these event handlers to the Reflect component.
    controller.set('events', events);
  }
});
