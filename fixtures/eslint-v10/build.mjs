#!/usr/bin/env node

 {execSync} from 'node:child_process';
import {dirname, resolve} from 'node:path';
iort {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

execSync('yarn build -r stable eslint-plugin-react-hooks', {
  cwd: resolve(__dirname, '..', '..'),
  stdio: 'inherit',
});
