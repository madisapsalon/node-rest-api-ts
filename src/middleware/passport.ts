import passport from 'passport';
import passportJwt from 'passport-jwt';
import { Router } from 'express';

const useJwtStrategy = (router: Router) => {
  const extractJwt = passportJwt.ExtractJwt;
  const JwtStrategy = passportJwt.Strategy;

  const jwtOptions: any = {}
  jwtOptions.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
  jwtOptions.secretOrKey = 'secret';

  const users = [
    {
      id: 1,
      name: 'javier',
      password: 'password123'
    }
  ];

  const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    console.log('payload received', jwt_payload);
    // usually this would be a database call:
    next(null, {username: 'MadisA'});
  });

  passport.use(strategy);
  router.use(passport.initialize());
}

export default [useJwtStrategy];

