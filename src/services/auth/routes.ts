import { Request, Response } from 'express';
import { validate, IsEmail, IsNotEmpty, validateOrReject } from 'class-validator';
import User from './UserModel';
import { AuthController } from './AuthController';
import { logger } from '../../config/logger';

export default [
  {
    path: '/api/v1/login',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.json({ message: 'GET /api/v1/login is successful' });
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
        console.log(error);
        logger.error(error);
        res.send(error);
      }

    }
  },
];
