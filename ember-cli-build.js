var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Any other options
    });

    return app.toTree();
};
