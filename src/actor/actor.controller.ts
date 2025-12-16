import { Body, Controller, Post } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorDto } from '@root/actor/dto/actor.dto';
import { Actor } from '@root/generated/prisma/client';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  createActor(@Body() dto: ActorDto): Promise<Actor> {
    return this.actorService.create(dto);
  }
}
