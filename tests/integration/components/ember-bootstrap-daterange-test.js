import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-bootstrap-daterange', 'Integration | Component | daterange picker', {
  integration: true
});

test('it renders a component with no selected dates', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-bootstrap-daterange}}`);

  assert.equal(this.$().text().trim(), '');

});
