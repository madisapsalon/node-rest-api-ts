import { getRepository, Repository } from 'typeorm/index';
import Entry from './EntryModel';
import { JwtPayload } from '../auth/UserModel';

export class EntryController {
  entryRepository: Repository<Entry> = getRepository(Entry);

  async addEntry(newEntry: Entry, user: JwtPayload) {
    newEntry.userId = user.id;
    try {
      await newEntry.save();
    } catch (error) {
      throw { methodError: 'addEntry', message: error }
    }
  }
}
