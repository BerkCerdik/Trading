const express = require('express');
const { functions } = require('lodash');
const router = require('./router');

let app = express();

app.set('port', process.env.Port)
app.set('json spaces', 7)


app.use(express.json());
// app.use(express.urlencoded({ extenden: true }));

// app.use('/', router);

app.listen(app.get('port'), function() {
    console.log('Listening on port:' + app.get('port'));
});