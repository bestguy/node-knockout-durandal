'use strict';

let bodyParser = require('body-parser');
let express = require('express');
let logger = require('morgan');

let app = new express();

// ## Middleware

app.use(logger('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

// This is a fake API call handler used in the client-code example
app.get('/api/data', (req, resp) => {
    let data = {
        firstParameter: 'Hello World',
        anotherParameter: new Date()
    }
    resp.send(data);
});

app.listen(3000, () => console.log('App running on port 3000'));
