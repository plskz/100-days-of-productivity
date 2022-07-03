import fs from 'fs';
import { pad, open, diff, today, template, success, error } from './helpers.js';

console.log(today);

try {
  const path = `Round-1/day${pad(diff)}.md`;

  if (fs.existsSync(path)) {
    // for safety reasons, to avoid overwriting existing files
    error(`${path} already exists.`);
    error(`delete if you want to override it`);
    open(path);
  } else {
    fs.writeFileSync(path, template);
    success(`${path} created successfully`);
    open(path);
  }
} catch (err) {
  console.error(err);
}
