import { Request, Response } from 'express';
import passport from 'passport';

export default [
  {
    path: '/api/v1',
    method: 'get',
    handler: [
      passport.authenticate('jwt', { session: false }),
      async (req: Request, res: Response) => {
        res.json({ message: 'GET /api/v1 is successful' });
      }
    ]
  }
];
