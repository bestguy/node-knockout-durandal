'use strict';
let express = require('express');

let app = express();

// Console logging for server:
app.use(express.logger());

// Looks for static content under the current directory + /public:
app.use(express.static(`${__dirname}/public`));

// This is a fake API call handler used in the client-code example
app.get('/api/data', (req, resp) => {
    let data = {
        firstParameter: 'Hello World',
        anotherParameter: new Date()
    }
    resp.send(200, data);
});

app.listen(3000, () => console.log('App running on port 3000'));
