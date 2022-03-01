require('dotenv').config();

// sql
export const SQL_DB_HOST = process.env.SQL_DB_HOST || '127.0.0.1';
export const SQL_DB_PORT = process.env.SQL_DB_PORT || 3306;
export const SQL_DB_TYPE = process.env.SQL_DB_TYPE || 'mysql';
export const SQL_DB_NAME = process.env.SQL_DB_NAME || 'db_name';
export const SQL_DB_USERNAME = process.env.SQL_DB_USERNAME || 'root';
export const SQL_DB_PASSWORD = process.env.SQL_DB_PASSWORD || '1q23456';

// mongodb
export const MONGO_LOCAL = Number(process.env.MONGO_LOCAL) || 2;
export const MONGO_HOST = process.env.MONGO_HOST || "localhost";
export const MONGO_PORT = process.env.MONGO_PORT || 27017;
export const MONGO_AUTH_DB_NAME = process.env.MONGO_AUTH_DB_NAME || "admin";
export const MONGO_USERNAME = process.env.MONGO_USERNAME || "root";
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "1q23456";
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME || "crm_logs";
