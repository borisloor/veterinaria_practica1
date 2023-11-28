import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CompraModule } from './compra/compra.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CompraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
