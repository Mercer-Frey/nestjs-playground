import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@root/infra/prisma/prisma.service';
import { randomBytes } from 'node:crypto';
import { ConfigService } from '@nestjs/config';
import {
  CreateLinkRequestDto,
  CreateLinkResponseDto,
} from '@root/api/link/dto';

@Injectable()
export class LinkService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async create(
    createLinkDto: CreateLinkRequestDto,
    userId: string,
  ): Promise<CreateLinkResponseDto> {
    const { originalUrl } = createLinkDto;
    const shortCode = randomBytes(5).toString('hex');
    const link = await this.prismaService.link.create({
      data: {
        originalUrl,
        shortCode,
        user: {
          connect: { id: userId },
        },
      },
    });

    const shortUrl = `${this.configService.getOrThrow<string>('APP_URL')}/${link.shortCode}`;

    return { url: shortUrl };
  }

  async delete(id: string) {
    const link = await this.prismaService.link.findUnique({ where: { id } });
    if (!link) {
      throw new NotFoundException(`Link with id ${id} not found.`);
    }
    await this.prismaService.link.delete({ where: { id } });
    return true;
  }
}
