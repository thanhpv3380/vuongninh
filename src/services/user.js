const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const logger = require('../utils/logger');

const CustomError = require('../errors/CustomError');
const errorCodes = require('../errors/code');
const { SUBSCRIBE_FILE_PATH } = require('../configs');

const csvWriter = createCsvWriter({
  path: `${path.join(__dirname, '..', '../', 'public')}/${SUBSCRIBE_FILE_PATH}`,
  append: true,
  header: [{ id: 'email', title: 'email' }],
});

const subscribe = async (data, requestId) => {
  const { email } = data;
  try {
    await csvWriter.writeRecords([{ email }]);
  } catch (err) {
    logger.error(`Error write data to csv: ${err.message}`, requestId);
    throw new CustomError(errorCodes.BAD_REQUEST);
  }
};

module.exports = {
  subscribe,
};
