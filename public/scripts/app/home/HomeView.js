// This define call is requirejs boilerplate used to define the module and isolate the scope:
define(function (require, exports, module) {

    // Constructor function for this module
    function HomeView() {
        // This is (one) convention used to manage the scope of 'this', common in Knockout examples:
        var self = this;

        // This value will be data-bound to the references in HomeView.html:
        self.rules = 1;
    }

    // This returns the constructor function, will be called automatically by Durandal when composing view:
    module.exports = HomeView;
});