import { Request, Response } from 'express';
import { validateOrReject } from 'class-validator';
import User from './UserModel';
import { AuthController } from './AuthController';
import { logger } from '../../config/logger';

export default [
  {
    path: '/api/v1/login',
    method: 'post',
    handler: async (req: Request, res: Response) => {
      const authCredentials: User = new User(req.body);
      try {
        await validateOrReject(authCredentials);
        const authController = new AuthController();
        const validationResponse = await authController.validateUser(authCredentials);
        res.json(validationResponse);
      } catch (error) {
        res.send(error);
      }
    }
  },
  {
    path: '/api/v1/register',
    method: 'post',
    handler: async (req: Request, res: Response) => {
      const newUser = new User(req.body);
      try {
        await validateOrReject(newUser);
        const authController = new AuthController();
        const newUserCreated = await authController.addUser(newUser);
        res.json({ message: newUserCreated });
      } catch (error) {
        logger.error(error);
        res.send(error);
      }

    }
  },
];
