import { Body, Controller, Post } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorDto } from '@root/actor/dto/actor.dto';
import { ActorEntity } from '@root/actor/entities/actor.entity';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  createMovie(@Body() dto: ActorDto): Promise<ActorEntity> {
    return this.actorService.create(dto);
  }
}
