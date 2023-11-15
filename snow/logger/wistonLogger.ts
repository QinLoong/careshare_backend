import { createLogger, format, Logger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const wistonLogger: Logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ level, message, timestamp }) => `${timestamp} [${level}] ${message}`),
    format.colorize({
      all: true,
      colors: {
        debug: 'blue',
        info: 'green',
        warn: 'yellow',
        error: 'red',
      },
    }),
  ),