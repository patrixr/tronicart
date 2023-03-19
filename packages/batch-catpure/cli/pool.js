const genericPool = require('generic-pool');
const logger = require('./logger')('pool');
const { getBrowser } = require('./browser');

const poolSize = process.env.POOL ? Number(process.env.POOL) : 10;

// ---- Page factory

const factory = {
  async create() {
    const browser = await getBrowser();
    return browser.newPage();
  },
  async destroy(page) {
    logger.info('closing page');
    await page.close();
  }
};

// ---- Create Pool

const opts = { max: poolSize, min: 1 };

const pool = genericPool.createPool(factory, opts);

module.exports = {
  async schedule(fn) {
    const page = await pool.acquire();

    try {
      logger.info('rendering');
      await fn(page);
      logger.info('closing page');
      await pool.release(page);
      return { success: true };
    } catch (error) {
      logger.error(`render failure: ${error}`);
      await pool.release(page);
      return { success: false, errors: [error.toString()] };
    }
  }
};
