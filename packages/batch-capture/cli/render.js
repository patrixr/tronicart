const fs = require('fs');
const browserPool = require('./pool');
const logger = require('./logger')('generator');

const pageWidth = process.env.W ? Number(process.env.W) : 800;
const pageHeight = process.env.H ? Number(process.env.H) : 800;
const timeout = process.env.T ? Number(process.env.T) : 10000;

async function render(url, outputFile) {
  return new Promise((resolve, reject) => {
    const print = async (page) => {
      logger.info(`setting viewport to ${pageWidth}x${pageHeight}`);
      await page.setViewport({
        width: pageWidth,
        height: pageHeight,
        deviceScaleFactor: 1
      });

      // Open the page
      logger.info('opening page ' + url);
      await page.goto(url, { waitUntil: ['domcontentloaded'] });

      logger.info(`waiting ${timeout}ms for sketch`);

      await page.waitForTimeout(timeout);

      logger.info('screenshotting');
      // Render the pdf
      const content = await page.$('body');
      const imageBuffer = await content.screenshot({ omitBackground: true });

      fs.writeFileSync(outputFile, imageBuffer);
      resolve(outputFile);
    };

    browserPool.schedule(print).catch((e) => {
      logger.error(e);
      reject(e);
    });
  });
}

module.exports = { render };
