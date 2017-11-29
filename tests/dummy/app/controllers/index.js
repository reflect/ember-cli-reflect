import Ember from 'ember';
import moment from 'moment';

const {
  Controller,
  set,
  Logger: { log },
} = Ember;

export default Controller.extend({

  init() {
    this._super(...arguments);

    this.setProperties({
      view: 'ZFSzsfnRSpaMHL9Wae3lHw',
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
        { slug: 'timeseries', interaction: 'dataPointClick', callback: (data) => this.send('filterTimeSeries', data) },
        { slug: 'timeseries', interaction: 'dataPointClick', callback: (data) => this.send('logClick', data) },
        { slug: 'filters', interaction: 'addFilter', callback: (data) => log('Filter was added', data) },
        { slug: 'filters', interaction: 'removeFilter', callback: (data) => this.send('removeFilters', data) },
        { slug: 'datePicker', interaction: 'dateRangeChange', callback: (data) => log('Date range changed', data) },
      ]
    });
  },

  actions: {
    filterTimeSeries(data) {
      this.setProperties({
        filters: [
          { field: 'Name', op: '=', value: data.rowData.Name, removable: true },
        ],
      });

      set(this, 'overrides', [
        {
          slug: 'timeseries',
          path: 'title',
          value: data.rowData.Name,
        }
      ]);
    },

    logClick(data) {
      log('I was clicked', data);
    },

    removeFilters(/*data*/) {
      set(this, 'overrides', [
        {
          slug: 'timeseries',
          path: 'title',
          value: 'My Overwritten Title',
        }
      ]);
    }
  }

});
