import {createConnection} from "typeorm";
import User from '../services/auth/UserModel'
import { logger } from './logger';

const init = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "restapi",
    entities: [
      User
    ],
    synchronize: true,
    logging: false
  });
  logger.info({
    message: `Postgres client connected (TypeORM)`,
  });
};

export { init }
