import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { UserController } from './compra.controller';

@Module({
  imports: [ProxyModule],
  controllers: [UserController],
})
export class CompraModule {}
