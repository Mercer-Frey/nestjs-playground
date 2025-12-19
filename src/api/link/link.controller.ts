import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkRequestDto } from '@root/api/link/dto';
import { Authorization, Authorized } from '@root/common/decorators';
import { JwtGuard } from '@root/common/guards';

@Controller('links')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  @Authorization()
  @UseGuards(JwtGuard)
  async create(
    @Body() dto: CreateLinkRequestDto,
    @Authorized('id') userId: string, // извлекаем ID пользователя из токена
  ) {
    return this.linkService.create(dto, userId);
  }

  @Delete(':id')
  @Authorization()
  @UseGuards(JwtGuard)
  delete(@Param('id') id: string) {
    return this.linkService.delete(id);
  }
}
