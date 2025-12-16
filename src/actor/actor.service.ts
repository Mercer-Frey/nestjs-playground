import { Injectable } from '@nestjs/common';
import { ActorDto } from '@root/actor/dto/actor.dto';
import { PrismaService } from '@root/prisma/prisma.service';
import { Actor } from '@root/generated/prisma/client';

@Injectable()
export class ActorService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: ActorDto): Promise<Actor> {
    const { name } = dto;

    return this.prismaService.actor.create({ data: { name } });
  }
}
