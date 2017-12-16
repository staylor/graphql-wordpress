import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { TOKEN_KEY, TOKEN_SECRET } from 'utils/constants';

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        req => {
          let token = null;
          if (req && req.cookies) {
            token = req.cookies[TOKEN_KEY];
          }
          return token;
        },
      ]),
      secretOrKey: TOKEN_SECRET,
    },
    (jwtPayload, done) => {
      if (!jwtPayload.userId) {
        done(new Error('No userId in JWT'), false);
      } else {
        done(null, jwtPayload);
      }
    }
  )
);

export default function addPassport(app) {
  app.use(passport.initialize());
}
