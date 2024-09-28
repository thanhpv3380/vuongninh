const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

global.logger = logger;

try {
  fs.mkdirSync(path.join(__dirname, '..', '../', 'public'), { recursive: true });
} catch (err) {
  logger.error(`Init Service | Error creating directory: ${err.message}`);
}
