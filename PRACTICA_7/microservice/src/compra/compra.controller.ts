import { Controller } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CompraMsg } from 'src/common/constants';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @MessagePattern(CompraMsg.CREATE)
  create(@Payload() createEstudianteDto: CreateCompraDto) {
    return this.compraService.create(createEstudianteDto);
  }

  @MessagePattern(CompraMsg.FIND_ALL)
  findAll() {
    return this.compraService.findAll();
  }

  @MessagePattern(CompraMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.compraService.findOne(id);
  }

  @MessagePattern(CompraMsg.UPDATE)
  update(
    @Payload() id: string,
    @Payload() updateEstudianteDto: UpdateCompraDto,
  ) {
    return this.compraService.update(id, updateEstudianteDto);
  }

  @MessagePattern(CompraMsg.DELETE)
  remove(@Payload() id: string) {
    return this.compraService.remove(id);
  }
}
