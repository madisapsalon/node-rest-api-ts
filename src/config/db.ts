import { Client } from 'pg';
import dotenv from 'dotenv';
import { logger } from './logger';

dotenv.config();

// const { DATABASE_URL } = process.env;

const dbClient = new Client({
  connectionString: 'postgresql://postgres:postgres@localhost:5432/restapi',
});

dbClient.on('error', (err: Error) => {
  logger.error({
    message: `Postgres client: Unexpected error on idle client`,
    extra: err,
  });

  process.exit(1);
});

const init = async () => {
  await dbClient.connect();
  logger.info({
    message: `Postgres client connected`,
  });
};

export { init, dbClient };
