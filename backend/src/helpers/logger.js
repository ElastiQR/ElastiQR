const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: './logs/backend-info.log',
    }),
    new winston.transports.File({
      filename: './logs/backend-error.log',
      level: 'error'
    })
  ],
});

module.exports = logger;
