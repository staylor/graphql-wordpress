import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ObjectId } from 'mongodb';

const { TOKEN_SECRET } = process.env;

async function userFromPayload({ context: { User } }, jwtPayload) {
  if (!jwtPayload.userId) {
    throw new Error('No userId in JWT');
  }

  const user = await User.findOneById(ObjectId(jwtPayload.userId));
  return user;
}

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: TOKEN_SECRET,
      passReqToCallback: true,
    },
    (request, jwtPayload, done) => {
      userFromPayload(request, jwtPayload)
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch(e => {
          done(e, false);
        });
    }
  )
);

export default function addPassport(app) {
  app.use(passport.initialize());

  app.use('/graphql', (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
      if (user) {
        req.context.authUser = user;
      }
      next();
    })(req, res, next);
  });
}
