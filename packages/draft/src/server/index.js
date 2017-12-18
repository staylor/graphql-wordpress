import path from 'path';
import express from 'express';
import passport from 'passport';
import httpProxy from 'http-proxy-middleware';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import authenticate from './authenticate';
import uploads from './uploads';
import router from './router';

process.env.TZ = 'America/New_York';

const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Standard Apache combined log output.
// https://github.com/expressjs/morgan#combined
app.use(morgan('combined'));

const publicDir = path.join(process.cwd(), KYT.PUBLIC_DIR);
// Setup the public directory so that we can server static assets.
app.use(express.static(publicDir));

app.use(cookieParser());

// use a local GQL server by default
const gqlHost = process.env.GQL_HOST || 'http://localhost:8080';

const proxy = httpProxy({
  target: gqlHost,
  changeOrigin: true,
});

// proxy to the graphql server
app.use('/graphql', proxy);
app.use('/auth', proxy);

authenticate(app);
uploads(app, passport, publicDir);
router(app, passport);

app.listen(parseInt(KYT.SERVER_PORT, 10));
