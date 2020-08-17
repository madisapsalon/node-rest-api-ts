import { Request, Response } from 'express';

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
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.json({ message: 'GET /api/v1/register is successful' });
    }
  },
];
