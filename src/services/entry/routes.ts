import { Request, Response } from 'express';
import passport from 'passport';
import { logger } from '../../config/logger';
import { validateOrReject } from 'class-validator';
import Entry from './EntryModel';
import { EntryController } from './EntryController';
import dotenv from 'dotenv';

dotenv.config();
const ROUTE_PREFIX = process.env.API_ROUTE_PREFIX as string;

export default [
  {
    path: `${ROUTE_PREFIX}/entry`,
    method: 'get',
    handler: [
      passport.authenticate('jwt', { session: false }),
      async (req: Request, res: Response) => {
        res.json({ message: 'GET /api/v1/entry is successful' });
      }
    ]
  },
  {
    path: `${ROUTE_PREFIX}/entry`,
    method: 'post',
    handler: [
      passport.authenticate('jwt', { session: false }),
      async (req: Request, res: Response) => {
        const { user } = req;
        const entry = new Entry(req.body);
        try {
          await validateOrReject(entry);
          const entryController = new EntryController();
          await entryController.addEntry(entry, user);
          res.json({ message: 'Entry successfully added' });
        } catch (error) {
          logger.warn(error);
          res.send(error);
        }
      }
    ]
  }
];
