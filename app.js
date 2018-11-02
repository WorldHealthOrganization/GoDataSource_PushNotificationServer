'use strict';

// load dependencies
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const config = require('./config/config');

// configure parse API
const parseApi = new ParseServer({
    databaseURI: config.database.uri,
    appId: config.app.appId,
    masterKey: config.app.masterKey,
    push: config.push
});

// configure parse dashboard
const parseDashboard = new ParseDashboard({
    apps: [
        config.app
    ],
    users: config.users,
}, {allowInsecureHTTP: config.allowHttpAccess});

// load express app
const app = express();

// set up routing for parse dashboard and parse API
app.use('/', parseDashboard);
app.use('/api', parseApi);


app.listen(config.port, function () {
    console.log('Parse server started on ' + config.port);
});