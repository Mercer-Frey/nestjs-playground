import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class JobsService {
  private readonly logger = new Logger(JobsService.name);

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.logger.log('JobsService running EVERY_5_SECONDS');
  }
  @Interval(2000)
  handleInterval() {
    this.logger.log('JobsService running each 2 sec');
  }
  @Timeout(5000)
  handleTimeOut() {
    this.logger.log('JobsService runs 1 time after 5 sec');
  }
}
