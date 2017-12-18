import fs from 'fs';
import path from 'path';

export function requireModules(dir) {
  const modules = {};
  const fileDir = path.resolve(dir);
  const files = fs.readdirSync(fileDir);
  files.forEach(file => {
    if (file.charAt(0) !== file.charAt(0).toUpperCase()) {
      return;
    }
    const [name] = file.split('.');
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const module = require(path.join(fileDir, name));
    modules[name] = module.default;
  });
  return modules;
}

export function requireFiles(dir) {
  const files = {};
  const fileDir = path.resolve(dir);
  fs.readdirSync(fileDir).forEach(file => {
    if (file.charAt(0) !== file.charAt(0).toUpperCase()) {
      return;
    }
    const [name] = file.split('.');
    const filename = path.join(fileDir, file);
    files[name] = fs.readFileSync(filename, 'utf8');
  });
  return files;
}
