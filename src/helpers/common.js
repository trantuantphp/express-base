export const REQUEST_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export const HTTP_STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    DELETED: 204,
    NOT_MODIFIED: 304,
    BAD: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNSUPPORTED: 415,
    TOO_MANY: 429,
    ERROR: 500,
};

export const HTTP_STATUS_MESSAGES = {
    OK: 'Success',
    CREATED: 'Created successfully',
    DELETED: 'Deleted successfully',
    NOT_MODIFIED: 'Not modified resource',
    BAD: 'Bad request',
    UNAUTHORIZED: 'Unauthorized request',
    FORBIDDEN: 'Forbidden request',
    NOT_FOUND: 'Not found resource',
    UNSUPPORTED: 'Unsupported resource',
    TOO_MANY: 'Too many request',
    SERVER_ERROR: 'Server error',
};

export const CUSTOM_RESPONSE_CODES = {
    SUCCESS: 200,
    ERROR: 1,
    CREATED: 201,
    UPDATED: 202,
    DELETED: 204,
    BAD: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

export const CUSTOM_RESPONSE_MESSAGES = {
    ERROR: 'Error',
    UPDATED: 'Updated successfully',
};

export const SUBJECT = {
    email: 'Email',
    account: 'Account',
    user: 'User',
    token: 'Token',
    password: 'Password',
    address: 'Address',
    username: 'Username',
};

export const dynamic_message = {
    exist: (subject) => String(subject) + ' already exists',
    notExist: (subject) => String(subject) + ' does not exist',
    incorrect: (subject) => String(subject) + ' is incorrect',
    invalid: (subject) => String(subject) + ' is invalid',
    empty: (subject) => String(subject) + ' is empty',
    notEmpty: (subject) => String(subject) + ' is not empty',
    missing: (subject) => String(subject) + ' is missing',
    expired: (subject) => String(subject) + ' has expired',
};
