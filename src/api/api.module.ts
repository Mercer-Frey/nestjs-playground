import { Module } from '@nestjs/common';
import { LinkModule } from './link/link.module';
import { AuthModule } from '@root/api/auth/auth.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [AuthModule, LinkModule, StatisticsModule],
})
export class ApiModule {}
