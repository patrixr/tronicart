const _ = require('lodash');
const logger = require('./logger')('batch')

async function batch(name, collection, func) {
  const chunkSize = 10;
  const chunks    = _.chunk(collection, chunkSize);

  let results = [];
  let count   = 0;

  for (let chunk of chunks) {
    count += chunk.length;
    logger.info(`Batch '${name}' processing ${count}/${collection.length}`)
    results.push(
      ...(await Promise.all(chunk.map(func)))
    );
  }

  return results;
}

module.exports = batch;
