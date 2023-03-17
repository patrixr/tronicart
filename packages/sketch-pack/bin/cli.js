#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
const childProcess = require('child_process');

yargs
  .scriptName('p5-cli')
  .usage('$0 <cmd> [args]')
  .command(
    'serve [sketch]',
    'serve a sketch in dev mode',
    (yargs) => {
      yargs.positional('sketch', {
        type: 'string',
        describe: 'the sketch to run'
      });
    },
    function ({ sketch }) {
      const fullPath = path.resolve(process.cwd(), sketch);

      childProcess.execSync(
        `npx webpack serve --config ${path.resolve(__dirname, '../config/webpack.config.dev.js')}`,
        {
          cwd: path.dirname(fullPath),
          env: {
            ...process.env,
            SKETCH_ENTRYPOINT: sketch
          },
          stdio: 'inherit'
        }
      );
    }
  )
  .command(
    'build [sketch]',
    'build a sketch for production',
    (yargs) => {
      yargs.positional('sketch', {
        type: 'string',
        describe: 'the sketch to run'
      });
    },
    function ({ sketch }) {
      const fullPath = path.resolve(process.cwd(), sketch);

      childProcess.execSync(
        `npx webpack build --config ${path.resolve(__dirname, '../config/webpack.config.prod.js')}`,
        {
          cwd: path.dirname(fullPath),
          env: {
            ...process.env,
            SKETCH_ENTRYPOINT: sketch
          },
          stdio: 'inherit'
        }
      );
    }
  )
  .help().argv;
