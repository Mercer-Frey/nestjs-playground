import { Module } from '@nestjs/common';
import { PrismaModule } from '@root/infra/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
})
export class InfraModule {}
