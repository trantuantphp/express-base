import Sequelize from 'sequelize';
import {
    SQL_DB_HOST,
    SQL_DB_NAME,
    SQL_DB_PASSWORD,
    SQL_DB_PORT,
    SQL_DB_TYPE,
    SQL_DB_USERNAME,
} from 'configs/db.config';
import { getCurrentTimestamp } from 'helpers/time';

const db_sql = new Sequelize(SQL_DB_NAME, SQL_DB_USERNAME, SQL_DB_PASSWORD, {
    host: SQL_DB_HOST,
    port: SQL_DB_PORT,
    dialect: SQL_DB_TYPE,
    pool: {
        max: 10,
        idle: 10000,
    },
});

db_sql.addHook('beforeCreate', (object) => {
    object.added_timestamp = getCurrentTimestamp();
});

db_sql.addHook('beforeSave', (object) => {
    object.modified_timestamp = getCurrentTimestamp();
});

export default db_sql;
