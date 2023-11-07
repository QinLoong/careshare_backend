import wistonLogger from './wistonLogger';

type LogLevel = 'info' | 'warn' | 'error';

class Logger {
  static runtimeLog(level: LogLevel, message: string) {
    wistonLogger.log(level, message);
  }