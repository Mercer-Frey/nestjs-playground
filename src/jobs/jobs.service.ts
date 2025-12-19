import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class JobsService {
  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    console.log('JobsService running EVERY_5_SECONDS');
  }
  @Interval(2000)
  handleInterval() {
    console.log('JobsService running each 2 sec');
  }
  @Timeout(5000)
  handleTimeOut() {
    console.log('JobsService runs 1 time after 5 sec');
  }
}
