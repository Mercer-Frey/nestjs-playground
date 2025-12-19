import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from '@root/app.service';
import { AppController } from '@root/app.controller';
import { InfraModule } from '@root/infra/Infra.module';
import { ApiModule } from '@root/api/api.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    InfraModule,
    ApiModule,
  ],
})
export class AppModule {}
