import { PartialType } from '@nestjs/swagger';
import { CreateLinkRequestDto } from '@root/api/link/dto/create-link.dto';

export class UpdateLinkDto extends PartialType(CreateLinkRequestDto) {}
