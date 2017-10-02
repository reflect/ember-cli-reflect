import Ember from 'ember';
import moment from 'moment';

const {
  Controller,
} = Ember;

export default Controller.extend({

  init() {
    this._super(...arguments);

    this.setProperties({
      project: 'reflect-productivity',
      viewName: 'simple-dashboard-view',
      token: 'c77b12dd-a370-48be-9b94-ee388b14510c',
      // events: {
      //   timeseries: {
      //     dataPointClick: [
      //       (data) => this.send('filterTimeSeries', data),
      //     ],
      //   }
      // },
      formatters: {
        Date: (date) => moment(date).format('YYYY-MM-DD'),
      },
      colors: {
        Name: {
          Colby: 'blue',
        }
      },
      overrides: [
        { slug: 'timeseries', path: 'title', value: 'My Overwritten Title' },
      ],
      timezone: 'Europe/Moscow',
      interactions: [
        { component: 'timeseries', interaction: 'dataPointClick', callback: (data) => this.send('filterTimeSeries', data) },
        { component: 'timeseries', interaction: 'dataPointClick', callback: (data) => this.send('logClick', data) },
      ]
    });
  },

  actions: {
    filterTimeSeries(data) {
      this.setProperties({
        filters: [
          { field: 'Name', op: '=', value: data.rowData.Name, removable: true },
        ]
      });
    },

    logClick(data) {
      Ember.Logger.log('I was clicked', data);
    }
  }

});
