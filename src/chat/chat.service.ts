import { Injectable } from '@nestjs/common';
import { PrismaService } from '@root/prisma/prisma.service';
import { SendMessageDto } from '@root/chat/dto/send-message.dto';
import { Message } from '@root/generated/prisma/client';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async sendMessage(dto: SendMessageDto): Promise<Message> {
    const { text } = dto;
    const message = this.prismaService.message.create({
      data: { text },
    });

    return message;
  }
}
