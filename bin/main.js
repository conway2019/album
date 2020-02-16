#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('album:server');
var http = require('http');
var mongoose = require('mongoose')
const mongoUrl = "mongodb://106.54.230.45:27017/music";

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app)

//连接mongodb
mongoose.connect(mongoUrl, function (err) {
    if (err) {
        console.log("mongodb连接失败！");
        console.log(err);
    }
    else {
        console.log("mongodb连接成功！");
        /**
         * Listen on provided port, on all network interfaces.
         */
        server.listen(port);
        console.log("监听" + port)
    }
})

server.on('error', onError);
server.on('listening', onListening);
server.on('close', function () {
    mongoose.disconnect();
    console.log("mongodb释放连接！");
})

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
