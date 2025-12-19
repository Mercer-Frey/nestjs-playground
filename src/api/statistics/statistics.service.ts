import { Injectable } from '@nestjs/common';
import { PrismaService } from '@root/infra/prisma/prisma.service';
import { UAParser } from 'ua-parser-js';
import { type Lookup, lookup } from 'geoip-country';
import { formatName } from '@root/common/utils';

@Injectable()
export class StatisticsService {
  private readonly parser: UAParser;

  constructor(private readonly prismaService: PrismaService) {
    this.parser = new UAParser();
  }

  async getBrowserStats(id: string) {
    const clicks = await this.getClicks(id);
    const stats = clicks.reduce((acc, click) => {
      const { browser } = this.getBrowserByUserAgent(click.userAgent);
      if (acc[browser]) {
        acc[browser] += 1;
      } else {
        acc[browser] = 1;
      }
      return acc;
    }, {});
    return stats;
  }

  async getCountriesStats(id: string) {
    const clicks = await this.getClicks(id);
    const stats = clicks.reduce((acc, click) => {
      const { country } = this.getCountryByIp(click.ipAddress);
      if (acc[country]) {
        acc[country] += 1;
      } else {
        acc[country] = 1;
      }
      return acc;
    }, {});
    return stats;
  }

  private async getClicks(linkId: string) {
    const clicks = await this.prismaService.click.findMany({
      where: { linkId },
    });

    return clicks;
  }

  private getBrowserByUserAgent(userAgent: string) {
    this.parser.setUA(userAgent);
    const result = this.parser.getResult();

    return { browser: formatName(result.browser.name ?? 'unknown') };
  }

  private getCountryByIp(ip: string) {
    const geo: Lookup | null = lookup(ip);

    return { country: formatName(geo?.name ?? 'unknown') };
  }
}
