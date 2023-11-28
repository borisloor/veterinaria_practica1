import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompraMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { CompraDTO } from './dto/compra.dto';
import { ClientProxyVeterinaria } from './../common/proxy/client-proxy';
import { ICompra } from './entities/compra.entity';

@Controller('api/compra')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyVeterinaria) {}
  private _clientProxyUser = this.clientProxy.clientProxyCompras();

  @Post()
  create(@Body() userDTO: CompraDTO): Observable<ICompra> {
    return this._clientProxyUser.send(CompraMSG.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<ICompra[]> {
    return this._clientProxyUser.send(CompraMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ICompra> {
    return this._clientProxyUser.send(CompraMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() userDTO: CompraDTO,
  ): Observable<ICompra> {
    return this._clientProxyUser.send(CompraMSG.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(CompraMSG.DELETE, id);
  }
}
