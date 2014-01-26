// This define call is requirejs boilerplate used to define the module and isolate the scope:
define(function (require, exports, module) {

    // These require(...) calls will load other requirejs modules asynchronously, this one is a Durandal plugin:
    var router = require('plugins/router');

    // Constructor function for this module
    function Shell() {
        // This is (one) convention used to manage the scope of 'this', common in Knockout examples:
        var self = this;

        self.router = router;

        // Durandal, by convention, will call 'activate' function on any module when it's loaded, if it is defined.
        self.activate = function () {

            // This sets up the client-side hash routing - has nothing to do with server side paths:
            router.map([
                // A route of '' means it will load by default:
                { route: '', title: 'Home', moduleId: 'home/HomeView', nav: true },
                // This route is accessible by linking to '#/about'
                { route: 'about', title: 'About', moduleId: 'about/AboutView', nav: true }
            ]);

            return router.activate();
        }
    }

    // This returns the constructor function, will be called automatically by Durandal when composing view:
    module.exports = Shell;
});