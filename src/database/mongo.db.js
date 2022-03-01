import mongoose from 'mongoose';
import { MONGO_AUTH_DB_NAME, MONGO_DB_NAME, MONGO_HOST, MONGO_LOCAL, MONGO_PASSWORD, MONGO_PORT, MONGO_USERNAME } from 'configs/env.config';

const mongodb = () =>
    MONGO_LOCAL === 2
        ? mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}?authSource=${MONGO_AUTH_DB_NAME}`)
        : mongoose.connect('mongodb://192.168.2.2:27017/crm_logs');

export default mongodb;
