import 'reflect-metadata';
import http from 'http';
import express from 'express';
import { applyMiddleware, applyRoutes } from './utils';
import routes from './services';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { logger } from './config/logger';
import { initDependencies } from './config/index';
import useJwtStrategy from './middleware/passport';

process.on('uncaughtException', e => {
  logger.error({
    message: `uncaughtException`,
    extra: e,
  });
  process.exit(1);
});

process.on('unhandledRejection', e => {
  logger.error({
    message: `unhandledRejection`,
    extra: e,
  });
  process.exit(1);
});

const router = express();
applyMiddleware(useJwtStrategy, router);
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

async function start() {
  await initDependencies();
  server.listen(PORT, () =>
    logger.info({
      message: `Server is running http://localhost:${PORT}...`,
    }),
  );
}

start();
