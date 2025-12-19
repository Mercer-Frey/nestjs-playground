import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from '@root/app.service';
import type { Response } from 'express';
import { ClientIp, UserAgent } from '@root/common/decorators/http.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':code')
  async getLinkByShortCode(
    @Param('code') code: string,
    @Res({ passthrough: true }) res: Response,
    @ClientIp() clientIp: string,
    @UserAgent() userAgent: string,
  ): Promise<void> {
    const link = await this.appService.getLinkByShortCode(code);

    await this.appService.trackClick(link.shortCode, clientIp, userAgent);

    return res.redirect(link.originalUrl);
  }
}
