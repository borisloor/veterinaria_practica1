import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { CompraSchema } from './entities/compra.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CompraResolver } from './compra.resolver';

@Module({
  controllers: [CompraController],
  providers: [CompraService, CompraResolver],
  imports: [
    MongooseModule.forFeature([
      { name: 'compras', schema: CompraSchema }, // Registra el esquema de Compra
    ]),
  ],
  exports: [CompraService, MongooseModule],
})
export class CompraModule {}
