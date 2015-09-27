# Ember-bootstrap-daterange #

Ember add-on-ification of [bootstrap daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker).

## Features ##
__ This component using 3 observers, we will try to remove observers in future version.__
* Render date picker textbox if singleDatePicker=true
* By Default it renders range date picker
* all possible daterangepicker options are available at http://www.daterangepicker.com/#config

## Requirements ##
Bootstrap 3.0+

## Examples
Simple date range picker with start and end dates bound.
```
  {{bootstrap-daterange-picker startDate=start endDate=end}}
```
## Documentation ##
Detailed documentation can be found [here](http://github.io/bootstrap-daterangepicker/docs)

Single date picker with value bound.
```
  {{bootstrap-daterange-picker singleDatePicker=true startDate=date}}
```

Range date picker with value bound.
```
{{bootstrap-daterange-picker
  startDate=start
  endDate=end
  timePicker=true
  timePickerSeconds=false
  timePicker12Hour=false
  timePickerIncrement=60
  disabled=false
  class="ember-view ember-text-field"
  format="MM/DD/YYYY HH:00"
}}
```

## Configuration options ##
You can check [http://www.daterangepicker.com/#config](http://www.daterangepicker.com/#config) URL to configure date range picker


For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
