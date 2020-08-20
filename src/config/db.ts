import {createConnection} from "typeorm";
import User from '../services/auth/UserModel'
import { logger } from './logger';

const DB_HOST = process.env.DB_HOST
const DB_PORT = 5432;

const init = async () => {
  await createConnection({
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
      User
    ],
    synchronize: true,
    logging: false
  });
  logger.info({
    message: `Postgres DB connected on ${DB_HOST}:${DB_PORT}`,
  });
};

export { init }
