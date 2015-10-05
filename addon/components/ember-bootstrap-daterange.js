import Ember from 'ember';

const runOnce = Ember.run.once;
const jqueryAttrs = [
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

const {computed, observer} = Ember;

export default Ember.Component.extend({
  tagName: 'input',
  /*
  * dtPicket is an object of daterangecalendar useful for setting startDate and endDate
  */
  dtPicker: null,

  /*
  * dtPicket is an object of daterangecalendar useful for setting events
  * dtPicket.on("cancel.daterangepicker", function(e){});
  */
  dateRangePicker: null,

  /**
  * this method computed on daterangepicker properties e.g startDate
  * and other observer which keeps an eye on jQueryOptions properties
  * change to update calendar options
  */
  jQueryOptions: computed(jqueryAttrs.join(","), function() {
    var options = {};
    jqueryAttrs.forEach((attr) => {
      options[attr] = this.get(attr);
    });
    return options;
  }),

  /**
   * this method schedule a calender creation task after insertion on calender into the dom
   */
  didInsertElement() {
    this._super(...arguments);
    Ember.run.schedule('afterRender', this, this._renderDatePicker);
  },

  /**
  * render date range picker control and setup dtPicker and dateRangePicker properties
  */
  _renderDatePicker() {
    if(this.isDestroyed || this.isDestroying) {
      return;
    }

    let dateRangePicker = this.$().daterangepicker(this.get('jQueryOptions'));
    let dt = this.$().data('daterangepicker');
    this.set('dtPicker', dt);
    this.set('dateRangePicker', dateRangePicker);
  },

  /*
  * setStart date of a calender
  */
  _setStart() {
    let dt = this.get('dtPicker');
    if (dt) {
      dt.setStartDate(this.get('startDate'));
    }
  },

  /*
  * setEnd date of a calender
  */
  _setEnd() {
    let dt = this.get('dtPicker');
    if (dt) {
      dt.setEndDate(this.get('endDate'));
    }
  },

  /*
  * observe on start Date change
  */
  startDateDidChange: observer('startDate',function() {
    runOnce(this, this._setStart);
  }),

  /*
  * observe on end Date change
  */
  endDateDidChange: observer('endDate',function() {
    runOnce(this, this._setEnd);
  }),

  /*
  * observe on any other option change and re-render daterangepicker
  */
  dateOptionsChanged: observer('jQueryOptions',function() {
    runOnce(this, this._renderDatePicker);
  }),

 /**
  * destory all objects
  */
  willDestroyElement() {
    this._super(...arguments);
    let dt = this.get('dtPicker');
    if (dt) {
      dt.remove();
      this.set('dtPicker', null);
      this.set('dateRangePicker', null);
    }
  }
});
