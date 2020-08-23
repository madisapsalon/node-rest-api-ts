import { Request, Response } from 'express';
import passport from 'passport';
import { apiRootPath } from '../../config/api-root';
import { logger } from '../../config/logger';
import { validateOrReject } from 'class-validator';
import Entry from './EntryModel';
import { EntryController } from './EntryController';

export default [
  {
    path: `${apiRootPath}/entry`,
    method: 'get',
    handler: [
      passport.authenticate('jwt', { session: false }),
      async (req: Request, res: Response) => {
        res.json({ message: 'GET /api/v1/entry is successful' });
      }
    ]
  },
  {
    path: `${apiRootPath}/entry`,
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
