import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CompraModule } from './compra/compra.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_CONNECTION_STRING'),
      }),
      inject: [ConfigService],
    }),
    CompraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
