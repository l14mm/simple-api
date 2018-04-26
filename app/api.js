var express = require("express");
var appRoutes = express.Router();
// var bodyParser = require('body-parser');

module.exports = function (app) {

    //Main Route Sample
    app.get('/', function (req, res) {
        res.send('Hello Microservice API!');
    });

    //Microservice API root /
    appRoutes.get('/', function (req, res) {
        res.json({
            message: 'Welcome to your Simple Microservice API!'
        });
    });

    appRoutes.get('/name1', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.send(JSON.stringify({message: 'Doing something!'}));
        //  });
        res.json({
            message: 'John'
        });
    });

    appRoutes.get('/name2', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({
            message: 'Smith'
        });
    });

    appRoutes.post('/set-name1', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        //var name = req.body.name;
        console.log(req);
        console.log(req.name);
        res.json({
            message: 'Smith'
        });
    })

    //Apply and use created appRoutes
    app.use('/api', appRoutes);
};