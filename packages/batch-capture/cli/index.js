#!/usr/bin/env node

process.env.DEBUG = 'browser:*,batch:*,pool:*,generator:*';

const { program } = require('commander');
const { version } = require('../package.json');
const { render } = require('./render');
const logger = require('./logger')('generator');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs/promises');
const { promisify } = require('util');
const _ = require('lodash');
const batch = require('./batch');

async function fileExists(file) {
  try {
    await fs.stat(file);
    return true;
  } catch (e) {
    return false;
  }
}

program
  .version(version)
  .command('generate <url> <count>')
  .description('start the generation')
  .action(async (url, imageCount) => {
    const outFolder = path.join(process.cwd(), process.env.OUT_FOLDER ?? 'generated');

    mkdirp.sync(outFolder);

    let count = parseInt(imageCount);

    if (isNaN(count)) {
      logger.error(`Invalid image count ${imageCount}`);
    }

    const imageRefs = _.range(1, count + 1).map((id) => {
      let customUrl = new URL(url);
      customUrl.searchParams.set('id', id);
      return {
        id,
        file: path.join(outFolder, `${id}.png`),
        url: customUrl.toString()
      };
    });

    await batch('screenshots', imageRefs, async (ref) => {
      if (await fileExists(ref.file)) {
        logger.info(`image ${ref.id} already exists, skipping`);
      } else {
        logger.info(`generating image ${ref.id}`);
        const file = await render(ref.url, ref.file);
        logger.info(`${file} created`);
      }
    });

    logger.info('exiting');
    process.exit(0);
  });

program.parse(process.argv);
