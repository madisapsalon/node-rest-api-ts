import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { HTTP400Error, HTTP401Error } from '../../utils/httpErrors';
import User from './UserModel';
import { logger } from '../../config/logger';
import { serverError } from '../../utils/ErrorHandler';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY as string;

export class AuthController {
  async addUser(newUser: User) {
    const { password } = newUser;
    newUser.salt = await bcrypt.genSalt(12);
    newUser.password = await bcrypt.hash(password, newUser.salt);
    try {
      await newUser.save();
      return 'New user created';
    } catch (error) {
      throw { severity: error.severity, detail: error.detail, name: error.name };
    }
  }
}


