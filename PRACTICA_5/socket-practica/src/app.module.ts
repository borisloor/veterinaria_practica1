import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompraModule } from './compra/compra.module';
import { ConfigModule } from '@nestjs/config';
import { MensajesWsModule } from './mensajes-ws/mensajes-ws.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CompraModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://practica:wlaY8qoQFqVvXuyf@myatlasclusteredu.anyvuhn.mongodb.net/veterinaria?retryWrites=true&w=majority'),
    MensajesWsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
