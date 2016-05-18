'use strict';

var models = require('../models');

var PlayerRouter = function(app) {
    app.get('/', function(req, res) {

        models.Match.count().then(function (count) {
            res.send('' + count);
        });
    });
    
};

module.exports = PlayerRouter;