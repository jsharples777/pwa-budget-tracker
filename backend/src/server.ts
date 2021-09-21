// Configuration and Logging handlers
/* eslint-disable import/first */
import {MongoDataSource} from "./db/MongoDataSource";
import * as dotenv from 'dotenv';

dotenv.config();


import morgan from 'morgan';
import debug from 'debug';


// HTTP handlers
import http from 'http';
import path from 'path';

// Express framework and additional middleware
import express from 'express';
import expressHandlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connectFlash from 'connect-flash';
import compression from 'compression';



const serverDebug = debug('server');
const isDevelopment = (process.env.MODE === 'Development');


if (isDevelopment) {
    debug.enable('server db api route mongo-data-source api-transactions');
}
else {
    debug.enable('server api route mongo-data-source');
}


serverDebug(`Is development mode ${isDevelopment}`);



// Create and configure the express app
const app = express();

// Express view/template engine setup
serverDebug('setting up templating engine');
let relPath = (isDevelopment)?process.env.VIEW_RELATIVE_PATH_DEV:process.env.VIEW_RELATIVE_PATH;
serverDebug(`Base directory is: ${__dirname}`);
serverDebug(`Relative path is: ${relPath}`);
serverDebug(`${__dirname}${relPath}views`);
app.set('views', `${__dirname}${relPath}views`);
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'default',
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts')
}));

serverDebug('setting up templating engine - handlebars');
app.set('view engine', 'handlebars');
app.set('view cache', !isDevelopment); // view caching in production

serverDebug('Installing middlewares');
// Express middlewares
app.use(compression()); // add compression support
app.use('/', express.static('./public')); // root directory of static content
app.use('/dist', express.static('./dist')); // root directory of static content
app.use(cookieParser()); // add cookie support
app.use(bodyParser.json()); // add POST JSON support
app.use(bodyParser.urlencoded({extended: true})); // and POST URL Encoded form support
app.use(connectFlash()); // flash messages


/* Are we in Development or in Production? */
serverDebug('Setting up server side logging with Morgan');
if (isDevelopment) {
    app.use(morgan('dev')); /* log server calls with performance timing with development details */

    /* log call requests with body */
    app.use((request, response, next) => {
        serverDebug(`Received ${request.method} request for ${request.url} with/without body`);
        if (request.body) {
            if (process.env.SHOW_BODY) console.log(request.body);
        }
        next();
    });
} else {
    app.use(morgan('combined')); /* log server calls per standard combined Apache combined format */
}

// ensure the user is logged in with a path

serverDebug('Installing routes');
MongoDataSource.getInstance();
// routes
import routes from './routes';
app.use('/', routes);// add the middleware path routing
import apiRoutes from './routes/api';

app.use('/api',apiRoutes);


// route for the env.js file being served to the client
serverDebug('Setting the environment variables for the browser to access');
const port = process.env.PORT || 3000;
const API_SERVER_URL = process.env.API_SERVER_URL || '';
let env:any = {serverURL: API_SERVER_URL};

// construct the web server
serverDebug('Create HTTP Server');
//const httpServer = new https.Server({key: key, cert: cert },app);
const httpServer = new http.Server(app);

// catch 404 and forward to error handler
serverDebug('Setting up 404 handler');
app.use((req, res, next) => {
    serverDebug('404 forwarder');
    const err = new Error('Not Found');
    // @ts-ignore
    err.status = 404;
    next(err);
});

// error handler
if (isDevelopment) {
    serverDebug('Setting up DEV 500 handler');
    // @ts-ignore
    app.use((err, req, res, next) => {
        serverDebug(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
        });
    });
} else {
    serverDebug('Production 500 handler');
    // @ts-ignore
    app.use((err, req, res, next) => {
        serverDebug(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {},
        });
    });
}

httpServer.listen(port, () => {
    serverDebug(`Server started on port ${port}`);
});

