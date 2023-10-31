import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MensajesWsService } from './mensajes-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';
import { BadRequestException } from '@nestjs/common';
import { Compra, CompraModel } from 'src/compra/entities/compra.entity';

@WebSocketGateway({ cors: true })
export class MensajesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  listaDeTokens: string[] = [
    '6526f17180cc635ddc0fd96b',
    '6526f17180cc635ddc0fd967'
  ];

  @WebSocketServer() wss: Server;

  constructor(private readonly mensajesWsService: MensajesWsService) {}
  async handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string;
    let payload: string;
    try {
      //aqui deberia estar la validacion de Token, pero en este ejemplo realizo la conexiOn directa a la base
      if (!this.listaDeTokens.includes(token))
        throw new BadRequestException('token no valido');
      if(this.mensajesWsService.getConnectedClients().includes(token))
        throw new BadRequestException('already connect');
      payload = token;
      await this.mensajesWsService.registerClient(client, payload);
    } catch (error) {
      client.disconnect();
      return;
    }
    // console.log({payload})

    // client.join('ventas');
    // console.log(`cliente conectado`, client.id)

    // console.log({conectados: this.mensajesWsService.getConnectedClients()});

    this.wss.emit(
      'clients-updated',
      this.mensajesWsService.getConnectedClients(),
    );
  }
  handleDisconnect(client: Socket) {
    // console.log('Desconectado',client.id)
    this.mensajesWsService.removeClient(client.id);
    // console.log({conectados: this.mensajesWsService.getConnectedClients()});
    this.wss.emit(
      'clients-updated',
      this.mensajesWsService.getConnectedClients(),
    );
  }
  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket, payload: NewMessageDto) {
    // console.log(client.id, payload)
    // Solo para el cliente que emite
    // client.emit('message-from-server', {
    //   fullname:'Yo',
    //   message:payload.message || 'nada'
    // })
    // a todos menos al cliente inicial
    // client.broadcast.emit('message-from-server', {
    //   fullname:'Yo',
    //   message:payload.message || 'nada'
    // })
    // a todos
    console.log(payload)
    this.wss.emit('message-from-server', {
      fullName: this.mensajesWsService.getCompraIdProducto(client.id),
      message: payload.message || 'no hay mensaje',
    });
  }
}
