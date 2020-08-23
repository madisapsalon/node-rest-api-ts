import authRoutes from './auth/routes'
import entityRoutes from './entry/routes';

export default [...authRoutes, ...entityRoutes];
