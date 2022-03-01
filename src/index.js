// express
import express, { json } from 'express';

// middleware
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { PORT } from 'configs/app.config';

// db
import db_sql from 'database/my_sql.db';

// controller
import Server from 'controllers/Server.controller';
import UserControllers from 'modules/User/controllers';
import { addRaw, logRequest } from 'middleware/common';

// swagger
import swaggerUi from 'swagger-ui-express';
import ApiDocument from 'documents';

// create express app
const app = express();
app.disable('x-powered-by');
const PREFIX = '/api/v1';

// router of API document by swagger UI
const PREFIX_DOCUMENT = '/document';
app.use(PREFIX + PREFIX_DOCUMENT, swaggerUi.serve, swaggerUi.setup(ApiDocument, { explorer: true }));

// define server instance and middleware + controller
const server = new Server(app, PORT, [{ type: 'sql', instance: db_sql }]);
const globalMiddleware = [
    helmet(),
    cors(),
    json(),
    addRaw,
    logRequest,
    morgan(':method :url :status :response-time ms - [:date[web]]'),
];
const controllers = [UserControllers.User];

// start up server
Promise.resolve()
    .then(() => server.connectDB()) // test connection to DB
    .then(() => {
        server.loadMiddleware(globalMiddleware); // apply global middleware
        server.loadController(controllers); // apply controller
        server.run(); // run server
    })
    .catch((error) => console.error(error));
