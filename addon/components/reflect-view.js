import Ember from 'ember';
import layout from '../templates/components/reflect-view';

const {
  assert,
  Component,
  get,
  isArray,
  isEmpty,
  Logger: { error },
  set,
} = Ember;

export default Component.extend({
  layout,

  didRegisterInteractions: false,

  _applyInteractionCallbacks() {
    if (get(this, 'didRegisterInteractions')) { return; }

    const interactions = get(this, 'interactions');
    const component_whitelist = ['render', 'dataPointClick', 'legendItemClick', 'tableCellClick', 'componentClick', 'annotationClick'];
    const controls_whitelist = {
      filters: ['addFilter', 'removeFilter'],
      datePicker: ['dateRangeChange'],
    };

    if (interactions) {
      interactions.forEach(_i => {
        const slug = get(_i, 'slug');
        const interaction = get(_i, 'interaction');
        const callback = get(_i, 'callback');
        const whitelist = controls_whitelist[slug] || component_whitelist;

        assert('<reflect-view:interactions:slug>: Interactions must define a component slug', !isEmpty(slug));
        assert(`<reflect-view:interactions:interaction>: '${interaction}' is not a valid interaction`, whitelist.indexOf(interaction) > -1);
        assert('<reflect-view:interactions:callback>: callback must be a function', typeof callback === 'function');

        this.ui.on(slug, interaction, callback);
      });
    }

    set(this, 'didRegisterInteractions', true);
  },

  _validate(prop, value) {
    if (!value || typeof value !== 'string') {
      error(`Please pass a valid ${prop}.`);
      return true;
    }

    return false;
  },

  _validateString(prop) {
    const value = get(this, prop);

    return value && typeof value === 'string';
  },

  init() {
    this._super();

    let token = get(this, 'token') || get(this, 'tokens');

    this.ui = new ReflectUI(token);
  },

  didReceiveAttrs() {
    this._super(...arguments);

    assert('<reflect-view:project>: Missing project slug', this._validateString('project'));

    const { dates } = this.getProperties('dates');

    if (isArray(dates)) {
      assert(`<reflect-view:date>: Expected [primaryRange, secondaryRange] but received ${JSON.stringify(dates)}`, dates.length <= 2);
      dates.forEach(date => assert(`<reflect-view:date>: Expected array ['YYYY-MM-DD', 'YYYY-MM-DD'] but received value ${JSON.stringify(date)}`, isArray(date)));
    }
  },

  didRender() {
    if (get(this, 'parameters')) {
      this.ui.withParameters(get(this, 'parameters'));
    }

    if (get(this, 'overrides')) {
      this.ui.withOverrides(get(this, 'overrides'));
    }

    if (get(this, 'filters')) {
      this.ui.withFilters(get(this, 'filters'));
    }

    if (get(this, 'formatters')) {
      this.ui.withFormatters(get(this, 'formatters'));
    }

    if (get(this, 'tags')) {
      this.ui.withTags(get(this, 'tags'));
    }

    if (get(this, 'dates')) {
      this.ui.withDates(get(this, 'dates')[0], get(this, 'dates')[1]);
    }

    if (get(this, 'colors')) {
      this.ui.withColors(get(this, 'colors'));
    }

    if (get(this, 'events')) {
      this.ui.withEvents(get(this, 'events'));
    }

    if (get(this, 'timezone')) {
      this.ui.withTimezone(get(this, 'timezone'));
    }

    this.ui.view(this.element, get(this, 'project'), get(this, 'view'));

    this._applyInteractionCallbacks();
  },

  willDestroyElement: function() {
    if (this.ui && this.ui.destroy) {
      this.ui.destroy(this.element);
      set(this, 'didRegisterInteractions', false);
    }
  }
});
