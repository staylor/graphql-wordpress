import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import { TOKEN_KEY, TOKEN_SECRET } from 'utils/constants';
import User from 'models/User';

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

export default function addPassport(app, db) {
  app.use(passport.initialize());

  app.post('/auth', bodyParser.json(), async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error('Username or password not set on request');
      }

      const userModel = new User({ db });
      const user = await userModel.collection.findOne({ email });
      if (!user || !await bcrypt.compare(password, user.hash)) {
        throw new Error('User not found matching email/password combination');
      }

      const payload = {
        userId: user._id.toString(),
      };

      const token = jwt.encode(payload, TOKEN_SECRET);
      res.json({ token });
    } catch (e) {
      res.json({ error: e.message });
    }
  });
}
