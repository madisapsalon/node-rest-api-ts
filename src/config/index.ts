// import { init as initDb } from './db';
import { init as initDb } from './db'

const initDependencies = async () => {
  // Connect with native Postgre driver
  // await initDb();
  await initDb();
};

export { initDependencies };
