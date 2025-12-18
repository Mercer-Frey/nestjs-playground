import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';
import { Server } from 'node:net';
import { SendMessageDto } from '@root/chat/dto/send-message.dto';
import { Message } from '@root/generated/prisma/client';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('send')
  async handleMessage(@MessageBody() dto: SendMessageDto): Promise<Message> {
    const message = await this.chatService.sendMessage(dto);
    this.server.emit('message', message);
    return message;
  }
  handleConnection(client: Socket): any {
    console.log('Received a new connection', client.id);
  }
  handleDisconnect(client: Socket): any {
    console.log('Received a new Disconnection', client.id);
  }
}
