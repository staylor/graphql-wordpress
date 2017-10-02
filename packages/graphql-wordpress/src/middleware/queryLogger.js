import bodyParser from 'body-parser';
import clc from 'cli-color';

/* eslint-disable no-console */

// create application/json parser
const jsonParser = bodyParser.json();

export default function queryLogger() {
  return [
    jsonParser,
    (req, res, next) => {
      const date = new Date();
      console.log(
        `--- ${clc.bold.green(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)} ---`
      );
      console.log(clc.bold.blackBright('query:\n') + req.body.query);
      console.log(
        clc.bold.blackBright('variables:\n') + JSON.stringify(req.body.variables, null, 2)
      );
      console.log('');
      Object.keys(req.headers).forEach(k =>
        console.log(clc.bold.blackBright(`${k}:`), req.headers[k])
      );
      next();
    },
  ];
}
