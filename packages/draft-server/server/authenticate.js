import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jwt-simple';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';

const KEY = '~key~';

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
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
      secretOrKey: KEY,
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

  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error('Username or password not set on request');
      }

      const user = await req.context.User.collection.findOne({ email });
      if (!user || !await bcrypt.compare(password, user.hash)) {
        throw new Error('User not found matching email/password combination');
      }

      const payload = {
        userId: user._id.toString(),
      };

      const token = jwt.encode(payload, KEY);
      res.json({ token });
    } catch (e) {
      res.json({ error: e.message });
    }
  });
}
