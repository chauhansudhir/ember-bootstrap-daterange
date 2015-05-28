import Ember from 'ember';

var jqueryAttrs = [
  'startDate',
  'endDate',
  'minDate',
  'maxDate',
  'dateLimit',
  'timeZone',
  'showDropdowns',
  'showWeekNumbers',
  'timePicker',
  'timePickerIncrement',
  'timePicker12Hour',
  'timePickerSeconds',
  'ranges',
  'opens',
  'buttonClasses',
  'applyClass',
  'cancelClass',
  'format',
  'separator',
  'locale',
  'singleDatePicker',
  'parentEl'
];

export default Ember.Component.extend({
  tagName: 'input',

  jQueryOptions: Ember.computed(jqueryAttrs.join(','), function() {
    var options = {};
    var self = this;

    jqueryAttrs.forEach(function(attr) {
      options[attr] = self.get(attr);
    });
    return options;
  }),

  didInsertElement: function() {
    this._super.apply(this, arguments);
    Ember.run.schedule('afterRender', this, this._renderDatePicker);
  },

  _renderDatePicker: function() {
    this.$().daterangepicker();
    this._setOptions();
    this._setStart();
    this._setEnd();
  },

  _setStart: function() {
    if (this.get('state') === 'inDOM') {
      var dateRangePickerObject = this.$().data('daterangepicker');
      if (dateRangePickerObject) {
        dateRangePickerObject.setStartDate(this.get('startDate'));
      }
    }
  },

  _setEnd: function() {
    if (this.get('state') === 'inDOM') {
      var dateRangePickerObject = this.$().data('daterangepicker');
      if (dateRangePickerObject) {
        dateRangePickerObject.setEndDate(this.get('endDate'));
      }
    }
  },

  _setOptions: function() {
    var currentComponent = this;
    var changeCallback = function(start, end, label) {

      currentComponent.set('startDate', start);
      currentComponent.set('endDate', end);
    };
    if (this.get('state') === 'inDOM') {
      var dateRangePickerObject = this.$().data('daterangepicker');
      if (dateRangePickerObject) {
        dateRangePickerObject.setOptions(this.get('jQueryOptions'),
          changeCallback);
      }
    }
  },

  startDateDidChange: Ember.observer('startDate',function() {
    Ember.run.once(this, this._setStart);
  }),

  endDateDidChange: Ember.observer('endDate',function() {
    Ember.run.once(this, this._setEnd);

  }),

  dateOptionsChanged: Ember.observer('jQueryOptions',function() {
    Ember.run.once(this, this._setOptions);
  }),

  willDestroyElement: function() {
    this._super.apply(this, arguments);
    if (this.get('state') === 'inDOM' && this.$().data('daterangepicker')) {
      this.$().daterangepicker('remove');
    }
  }
});
