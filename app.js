var express = require('express');

var app = express();

// Console logging for server:
app.use(express.logger());

// Looks for static content under the current directory + /public:
app.use(express.static(__dirname + '/public'));

// This is a fake API call handler used in the client-code example
app.get('/api/data', function(req, resp) {
    var data = {
        firstParameter: 'Hello World',
        anotherParameter: new Date()
    }
    resp.send(200, data);
});

app.listen(3000, function () {
    console.log('App running on port 3000');
});