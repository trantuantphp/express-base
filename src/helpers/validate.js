import Joi from 'joi';
import validator from 'validator';

// use validator
const { isEmail, isURL, isAlpha, isAlphanumeric, isNumeric, isInt } = validator;
export const _validator = (value, func, option = null) => {
    if (option && typeof option === 'object') return func(value, option);
    return func(value);
};

export const validateEmail = (str, option = null) => _validator(str, isEmail, option);
export const validateURL = (str, option = null) => _validator(str, isURL, option);
export const validateInt = (str, option = null) => _validator(str, isInt, option);
export const validateAlpha = (str, option = null) => _validator(str, isAlpha, option);
export const validateNumeric = (str, option = null) => _validator(str, isNumeric, option);
export const validateAlphanumeric = (str, option = null) => _validator(str, isAlphanumeric, option);

// use Joi
export const _joi = Joi;
const { object, number, string, boolean, array } = _joi;
export const _validate = (data, schema) => {
    const { value, error } = schema.validate(data);
    if (error) return [false, error];
    return [true, value];
};

export const validateObject = (data) => _validate(data, object());
export const validateNumber = (data) => _validate(data, number());
export const validateString = (data) => _validate(data, string());
export const validateBoolean = (data) => _validate(data, boolean());

export const validateArray = (data, item_schema) => {
    if (item_schema) return _validate(data, array().items(item_schema));
    return _validate(data, array());
};
export const validateArrayString = (data) => validateArray(data, string());
export const validateArrayNumber = (data) => validateArray(data, number());
export const validateArrayObject = (data) => validateArray(data, object());

// validate model
export const validate_model = {
    isEmail: {
        isEmail: {
            msg: 'This field must be an email',
        },
    },
    isAlpha: {
        isAlpha: {
            msg: 'This field only includes letters',
        },
    },
    isAlphanumeric: {
        isAlphanumeric: {
            msg: 'This field only includes letters and numbers',
        },
    },
    isNumeric: {
        isNumeric: {
            msg: 'This field only includes numbers',
        },
    },
    isInt: {
        isInt: {
            msg: 'This field must be an integer',
        },
    },
    notNull: {
        notNull: {
            msg: 'This field cannot be null',
        },
    },
    notEmpty: {
        notEmpty: {
            msg: 'This field must be a string and not empty',
        },
    },
    isIn: (arr) => {
        return {
            isIn: {
                args: [arr],
                msg: 'This field must be an integer and in [' + String(arr) + ']',
            },
        };
    },
};
