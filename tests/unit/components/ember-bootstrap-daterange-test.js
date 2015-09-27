import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('ember-bootstrap-daterange', 'Unit | Component | daterange picker', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders with default options', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject();
  // Renders the component to the page
  this.render();
  assert.equal(this.$().text().trim(), '');
});


test('it renders with default options and start & end date change', function(assert) {
  assert.expect(4);
  var start = moment();
  var end = moment().add(30, "d");
  // Creates the component instance
  var component = this.subject({startDate: start, endDate: end});
  // Renders the component to the page
  this.render();

  assert.equal(start, component.get("startDate"));
  assert.equal(end, component.get("endDate"));

  start = moment().add(30, "d");
  end  = moment().add(60, "d");
  Ember.run(function(){
    component.set("startDate", start);
    component.set("endDate", end);
    assert.equal(start, component.get("startDate"));
    assert.equal(end, component.get("endDate"));
  });
});


test('render & test ranges', function(assert) {
  assert.expect(4);
  var start = moment();
  var end = moment().add(30, "d");
  // Creates the component instance
  var component = this.subject({startDate: start, endDate: end});
  // Renders the component to the page
  this.render();

  assert.equal(start, component.get("startDate"));
  assert.equal(end, component.get("endDate"));

  assert.equal(undefined, component.get("ranges"));

  var ranges = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')]
  };

  Ember.run(function(){
    component.set("ranges", ranges);
    assert.equal(ranges, component.get("ranges"));
  });
});
