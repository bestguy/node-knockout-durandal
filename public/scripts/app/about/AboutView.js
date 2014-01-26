define(function (require, exports, module) {

    var http = require('plugins/http'); // Simpler wrapper for Ajax calls

    function AboutView() {
        var self = this;

        self.someMessage = '';
        self.anotherMessage = '';

        // This will call the server, get some data, and and set the model value before displaying the view
        self.activate = function() {
            // The '.then(...)' syntax means this is a JavaScript promise
            return http.get('/api/data').then(function(response) {
                // 'response' parameter is the JSON response from API call, automatically parsed into a Javascript object:
                self.someMessage = response.firstParameter;
                self.anotherMessage = response.anotherParameter;
            });
            // Why return the http.get call above?
            // It's async, so we return the promise so that the view renders after the API call is complete
        }
    }

    module.exports = AboutView;
});