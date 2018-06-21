let winston = require('winston');
let loggerConf = require('../conf/logger.json');

let logger = new winston.Logger({
  level: loggerConf.level,
  transports: [
    new (require('winston-daily-rotate-file'))({ filename: loggerConf.directory+'/logfile.log' })
  ]
});
 

module.exports = logger;