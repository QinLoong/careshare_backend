import wistonLogger from './wistonLogger';

type LogLevel = 'info' | 'warn' | 'error';

class Logger {
  static runtimeLog(level: LogLevel, message: string) {
    wistonLogger.log(level, message);
  }

  static info(message: string) {
    this.runtimeLog('info', message);
  }

  static warn(message: string) {
    this.runtimeLog('warn', message);
  }

  static error(message: string) {
    this.runtimeLog('error', message);
  }