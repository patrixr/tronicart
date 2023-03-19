#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');

webpack({});

const progressPlugin = () =>
  new webpack.ProgressPlugin({
    activeModules: false,
    entries: true,
    handler(percentage, message, ...args) {
      console.info(`[${message}] ${Number(percentage * 100).toFixed(1)}% ${args.join(' - ')}`);
    },
    modules: true,
    modulesCount: 5000,
    profile: false,
    dependencies: true,
    dependenciesCount: 10000,
    percentBy: null
  });

/* Begin */
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
      process.env['SKETCH_ENTRYPOINT'] = sketch;

      const webpackConfig = {
        ...require(path.resolve(__dirname, '../config/webpack.config.dev.js'))
      };

      webpackConfig.plugins = webpackConfig.plugins || [];

      const compiler = webpack(webpackConfig);

      compiler.watch(
        {
          // Example
          aggregateTimeout: 300,
          poll: undefined,
          ignored: /node_modules/
        },
        (err, stats) => {
          if (err) {
            console.error(err);
          }
          console.log(
            stats.toString({
              colors: true,
              modules: true,
              children: true,
              chunks: true,
              chunkModules: true
            }) + '\n'
          );
        }
      );

      // childProcess.execSync(
      //   `npx webpack serve --config ${path.resolve(__dirname, '../config/webpack.config.dev.js')}`,
      //   {
      //     cwd: path.dirname(fullPath),
      //     env: {
      //       ...process.env,
      //       SKETCH_ENTRYPOINT: sketch
      //     },
      //     stdio: 'inherit'
      //   }
      // );
    }
  )
  .command(
    'build [sketch]',
    'build a sketch for production',
    (yargs) => {
      yargs.positional('sketch', {
        type: 'string',
        describe: 'the sketch to build'
      });
    },
    function ({ sketch }) {
      process.env['SKETCH_ENTRYPOINT'] = sketch;

      const webpackConfig = {
        ...require(path.resolve(__dirname, '../config/webpack.config.prod.js'))
      };

      webpackConfig.plugins = webpackConfig.plugins || [];

      webpackConfig.plugins.push(progressPlugin());

      const compiler = webpack(webpackConfig);

      compiler.compile((err, stats) => {
        if (err) {
          console.error(err);
        }
        console.info('webpack compilation done');
      });
    }
  )
  .help().argv;
