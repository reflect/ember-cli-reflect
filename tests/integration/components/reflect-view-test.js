import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reflect-view', 'Integration | Component | reflect view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('token', ['']);

  this.render(hbs`
    {{reflect-view project="LOkOQjwlTamH4fyQlHBu8A"}}
  `);

  assert.equal(this.$().text().trim(), '');
});
