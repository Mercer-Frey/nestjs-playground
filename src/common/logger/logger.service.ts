import { ConsoleLogger, LoggerService, LogLevel } from '@nestjs/common';
import { dirname, join } from 'path';
import fs, { appendFileSync } from 'node:fs';

export class CustomLogger implements LoggerService {
  private readonly logFile = join(process.cwd(), 'logs', 'log.txt');
  private readonly consoleLogger = new ConsoleLogger();
  log(message: any, context: string): any {
    this.writeToFile('log', message, context);
    this.consoleLogger.log(message, context);
  }
  debug(message: any, context: string): any {
    this.writeToFile('debug', message, context);
    this.consoleLogger.debug(message, context);
  }
  error(message: any, trace: string, context?: string): any {
    this.writeToFile('error', message, context, trace);
    this.consoleLogger.error(message, trace, context);
  }
  verbose(message: any, context: string): any {
    this.writeToFile('verbose', message, context);
    this.consoleLogger.verbose(message, context);
  }
  warn(message: any, context: string): any {
    this.writeToFile('warn', message, context);
    this.consoleLogger.warn(message, context);
  }
  fatal(message: any, context?: string, trace?: string): void {
    this.writeToFile('fatal', message, context, trace);
    this.consoleLogger.fatal(message, trace, context);
  }
  setLogLevels(levels: LogLevel[]): void {
    this.consoleLogger.setLogLevels(levels);
  }
  private writeToFile(
    level: LogLevel,
    message: any,
    context?: string,
    trace?: string,
  ): void {
    const time = new Date().toISOString();
    const log = `[${time}] [${level}]${context ? `${context}` : ''} ${message}${trace ? `\nTRACE: ${trace}` : ''}\n`;
    const logDir = dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    appendFileSync(this.logFile, log);
  }
}
