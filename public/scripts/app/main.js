// This is the main requirejs script

requirejs.config({
    // This defines aliases for requirejs modules, so you don't have to type the full path:
    paths: {
        'durandal': '../bower_components/Durandal/js',
        'jquery': '../bower_components/jquery/jquery',
        'knockout': '../bower_components/knockout/dist/knockout',
        'plugins': '../bower_components/Durandal/js/plugins',
        'text': '../bower_components/requirejs-text/text',
        'transitions': '../bower_components/Durandal/js/transitions'
        // FYI require.js automatically appends '.js' to these paths above.   Why? I don't know...
    }
});

// The application entry point:
define(function (require) {

    // Durandal configuration:
    var app = require('durandal/app');
    var system = require('durandal/system');
    var viewLocator = require('durandal/viewLocator');

    system.debug(true);

    app.title = 'node.js Rules';
    app.configurePlugins({
        observable: true, // eliminates need for `ko.observable(...)`
        router: true
    });

    // This call starts the client side view rendering and routing:
    app.start()
        .then(function () {
            viewLocator.useConvention();

            // This will call the Shell.js module, and use the 'entrance' animation to display the view.
            app.setRoot('Shell', 'entrance');
        });
});
