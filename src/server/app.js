'use strict';

const express = require('express');

const app = express();
const { resolve } = require('path');
const http = require('http');
const morgan = require('morgan');
const chalk = require('chalk');
const server = require('./');

// logging middleware
app.use(morgan('dev'));

// bodyParser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// prepend '/api' to URIs
app.use('/api', server);

// serve static files from public
app.use(express.static(resolve(__dirname, '..', '..', 'www')));

// request any page and receive index.html
app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', '..', 'www/index.html')));

const httpServer = http.createServer(app);
// server listening!
httpServer.listen(process.env.PORT || 3000, () => {
    console.log(chalk.cyan('Server is listening'), chalk.yellow('http://localhost:3000'));
});
