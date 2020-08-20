import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './UserModel';
import { getRepository, Repository } from 'typeorm/index';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY as string;

export class AuthController {
  userRepository: Repository<User> = getRepository(User);

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

  async validateUser(authCredentials: User) {
    const { email, password } = authCredentials;
    try {
      const user: any = await this.userRepository.findOne({ email });
      const validPassword = await user.validatePassword(password);
      if (user && validPassword) {
        const payload = { email: user.email, id: user.id };
        console.log(payload);
        return jwt.sign(payload, JWT_SECRET, {
          algorithm: 'HS256',
          expiresIn: 300,
        });
      }
    } catch (error) {
      throw 'Auth Error';
    }

  }
}


