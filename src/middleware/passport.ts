import dotenv from 'dotenv';
import passport from 'passport';
import passportJwt from 'passport-jwt';
import { Router } from 'express';

dotenv.config();

const useJwtStrategy = (router: Router) => {
  const extractJwt = passportJwt.ExtractJwt;
  const JwtStrategy = passportJwt.Strategy;

  const jwtOptions: any = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY
  }

  const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    next(null, jwt_payload);
  });

  passport.use(strategy);
  router.use(passport.initialize());
}

export default [useJwtStrategy];

