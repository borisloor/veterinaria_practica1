import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Model } from 'mongoose'; // Importa Model desde mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Compra } from 'src/compra/entities/compra.entity';

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
    compra: Compra;
  };
}

@Injectable()
export class MensajesWsService {
  private connectedClients: ConnectedClients = {};

  constructor(
    @InjectModel('compras')
    private readonly compraModel: Model<Compra>,
  ) {}

  async registerClient(client: Socket, _id: string) {
    const compra = await this.compraModel.findById(_id);
    if (!compra) throw new Error('Compra no encontrado');

    this.connectedClients[client.id] = {
      socket: client,
      compra: compra,
    };
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getCompraIdProducto(id: string) {
    return this.connectedClients[id].compra._id;
  }
}