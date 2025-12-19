import { Controller, Get, Param } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { Authorization } from '@root/common/decorators';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Authorization()
  @Get(':id/browsers')
  getBrowserStats(@Param('id') id: string) {
    return this.statisticsService.getBrowserStats(id);
  }

  @Authorization()
  @Get(':id/countries')
  getCountriesStats(@Param('id') id: string) {
    return this.statisticsService.getCountriesStats(id);
  }
}
