module.exports = {
  description: 'adds ember-bootstrap-daterange bower dependencies',

  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    var that = this;
    return this.addBowerPackageToProject('moment').then(function() {
      // return that.addBowerPackageToProject('ember-bootstrap-daterange');
    });
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
