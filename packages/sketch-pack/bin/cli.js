#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

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
  .scriptName('sketch-pack')
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
      const devServerOptions = { ...webpackConfig.devServer, open: true };
      const server = new WebpackDevServer(devServerOptions, compiler);

      console.log('Starting server...');
      server
        .start()
        .then(() => {
          console.log('Server closing');
        })
        .catch((e) => console.error(e));
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
