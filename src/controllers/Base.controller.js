import { Router } from 'express';
import { CUSTOM_RESPONSE_MESSAGES, HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES, REQUEST_METHODS } from 'helpers/common';
import {
    resBadRequest,
    resCreated,
    resDeleted,
    resError,
    resForbidden,
    resNotFound,
    resServerError,
    resSuccess,
    resUnauthorized,
    resUpdated,
} from 'helpers/response';

class BaseController {
    router = Router();
    root_path = '/api/v1';
    controller_path = '/';
    methods = { ...REQUEST_METHODS };
    routes = [];
    name = 'BaseController';

    getClassName() {
        return this.name;
    }

    getFunctionPath() {
        let e = new Error('get');
        let stack = e.stack
            .split('\n')[2]
            .replace(/^\s+at\s+(.+?)\s.+/g, '$1')
            .substring(2);
        return `${this.name}.${stack}`;
    }

    constructor() {}

    setRoutes() {
        const { GET, POST, PUT, DELETE } = this.methods;
        for (const route of this.routes) {
            const { method, path, localMiddleware, handler } = route;
            for (const middleware of localMiddleware) {
                this.router.use(path, middleware);
            }
            switch (method) {
                case GET:
                    this.router.get(path, handler);
                    break;
                case POST:
                    this.router.post(path, handler);
                    break;
                case PUT:
                    this.router.put(path, handler);
                    break;
                case DELETE:
                    this.router.delete(path, handler);
                    break;
                default:
                    console.log('Method is invalid');
                    break;
            }
        }
        return this.router;
    }

    _jsonResponse(res, data = {}, code = HTTP_STATUS_CODES.OK) {
        return res.status(code).json(data);
    }

    _success(res, data = {}, message = HTTP_STATUS_MESSAGES.OK) {
        return this._jsonResponse(res, resSuccess(message, data));
    }

    _error(res, message = CUSTOM_RESPONSE_MESSAGES.ERROR, data = {}) {
        return this._jsonResponse(res, resError(message, data));
    }

    _created(res, message = HTTP_STATUS_MESSAGES.CREATED, data = {}) {
        return this._jsonResponse(res, resCreated(message, data));
    }

    _updated(res, message = CUSTOM_RESPONSE_MESSAGES.UPDATED, data = {}) {
        return this._jsonResponse(res, resUpdated(message, data));
    }

    _deleted(res, message = HTTP_STATUS_MESSAGES.DELETED, data = {}) {
        return this._jsonResponse(res, resDeleted(message, data));
    }

    _badRequest(res, message = HTTP_STATUS_MESSAGES.BAD, data = {}) {
        return this._jsonResponse(res, resBadRequest(message, data));
    }

    _unauthorized(res, message = HTTP_STATUS_MESSAGES.UNAUTHORIZED, data = {}) {
        return this._jsonResponse(res, resUnauthorized(message, data));
    }

    _forbidden(res, message = HTTP_STATUS_MESSAGES.FORBIDDEN, data = {}) {
        return this._jsonResponse(res, resForbidden(message, data));
    }

    _notfound(res, message = HTTP_STATUS_MESSAGES.NOT_FOUND, data = {}) {
        return this._jsonResponse(res, resNotFound(message, data));
    }

    _serverError(res, message = HTTP_STATUS_MESSAGES.SERVER_ERROR, data = {}) {
        return this._jsonResponse(res, resServerError(message, data));
    }
}

export default BaseController;
