// import { init as initDb } from './db';
import { init as initDb } from './db_orm'

const initDependencies = async () => {
  // Connect with native Postgre driver
  // await initDb();
  await initDb();
};

export { initDependencies };
