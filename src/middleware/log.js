import winston from 'winston';
import expressWinston from 'express-winston';
import 'winston-daily-rotate-file';
import dayjs from 'dayjs';

export const logWinston = () =>
    expressWinston.logger({
        level: 'info',
        transports: [
            new winston.transports.DailyRotateFile({
                filename: 'logs/access-%DATE%.log',
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: false,
                maxSize: '120m',
                maxFiles: '7d',
                level: 'info',
                format: winston.format.json(),
                utc: true,
            }),
        ],
        format: winston.format.json(),
        meta: true,
        msg: (req, res) => {
            const { headers, method, originalUrl, ip, _timestamp, __id } = req;
            const { statusCode, statusMessage, responseTime } = res;
            return `[${__id}] - [${dayjs(_timestamp)}] - IP: [${ip || ''}] [${headers.origin || ''}] - [${
                headers['request-type'] || ''
            }] [${method}] [${originalUrl}] - [${statusCode}] [${statusMessage}] - ${responseTime}ms`;
        },
        expressFormat: false,
        colorize: false,
        ignoreRoute: () => false,
        requestWhitelist: [
            'url',
            'headers',
            'method',
            'httpVersion',
            'hostname',
            'ip',
            'ips',
            'path',
            'originalUrl',
            'query',
            'body',
            '_timestamp',
            '__id',
        ],
        responseWhitelist: ['statusCode', 'statusMessage', 'body', 'error'],
    });

export const logWinstonError = () =>
    expressWinston.errorLogger({
        transports: [
            new winston.transports.DailyRotateFile({
                filename: 'logs/exception-%DATE%.log',
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: false,
                maxSize: '60m',
                maxFiles: '14d',
                level: 'error',
                format: winston.format.json(),
                utc: true,
            }),
        ],
        format: winston.format.json(),
        meta: true,
        msg: (req) => {
            const { headers, method, originalUrl, ip, _timestamp, __id } = req;
            return `[${__id}] - [${dayjs(_timestamp)}] - IP: [${ip || ''}] [${headers.origin || ''}] - [${
                headers['request-type'] || ''
            }] [${method}] [${originalUrl}]`;
        },
        expressFormat: false,
        colorize: false,
        ignoreRoute: () => false,
        requestWhitelist: [
            'url',
            'headers',
            'method',
            'httpVersion',
            'hostname',
            'ip',
            'ips',
            'path',
            'originalUrl',
            'query',
            'body',
            '_timestamp',
            '__id',
        ],
        responseWhitelist: ['statusCode', 'statusMessage', 'body', 'error'],
    });
