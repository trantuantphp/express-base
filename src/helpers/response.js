import {
    CUSTOM_RESPONSE_CODES,
    CUSTOM_RESPONSE_MESSAGES,
    HTTP_STATUS_MESSAGES,
} from './common';

const _response = (errorCode, message, data = {}) => ({
    errorCode,
    message,
    data,
});

export const resSuccess = (message = HTTP_STATUS_MESSAGES.OK, data = {}) =>
    _response(CUSTOM_RESPONSE_CODES.SUCCESS, message, data);

export const resError = (message = CUSTOM_RESPONSE_MESSAGES.ERROR, data = {}) =>
    _response(CUSTOM_RESPONSE_CODES.ERROR, message, data);

export const resBadRequest = (message = HTTP_STATUS_MESSAGES.BAD, data = {}) =>
    _response(CUSTOM_RESPONSE_CODES.BAD, message, data);

export const resUnauthorized = (
    message = HTTP_STATUS_MESSAGES.UNAUTHORIZED,
    data = {},
) => _response(CUSTOM_RESPONSE_CODES.UNAUTHORIZED, message, data);

export const resForbidden = (
    message = HTTP_STATUS_MESSAGES.FORBIDDEN,
    data = {},
) => _response(CUSTOM_RESPONSE_CODES.FORBIDDEN, message, data);

export const resNotFound = (
    message = HTTP_STATUS_MESSAGES.NOT_FOUND,
    data = {},
) => _response(CUSTOM_RESPONSE_CODES.NOT_FOUND, message, data);

export const resServerError = (
    message = HTTP_STATUS_MESSAGES.SERVER_ERROR,
    data = {},
) => _response(CUSTOM_RESPONSE_CODES.SERVER_ERROR, message, data);

export const resCreated = (message = HTTP_STATUS_MESSAGES.CREATED, data = {}) =>
    _response(CUSTOM_RESPONSE_CODES.CREATED, message, data);

export const resUpdated = (
    message = CUSTOM_RESPONSE_MESSAGES.UPDATED,
    data = {},
) => _response(CUSTOM_RESPONSE_CODES.UPDATED, message, data);

export const resDeleted = (message = HTTP_STATUS_MESSAGES.DELETED, data = {}) =>
    _response(CUSTOM_RESPONSE_CODES.DELETED, message, data);
