var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes')(app);
var models = require('./models');

models.sequelize.sync().then(function() {
    var server = app.listen(process.env.SERVER_PORT || 8080, function () {
        console.log('Listening on port %s...', server.address().port);
    });
});