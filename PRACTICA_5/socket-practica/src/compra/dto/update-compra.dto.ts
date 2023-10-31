import { PartialType } from '@nestjs/mapped-types';
import { CreateCompraDto } from './create-compra.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCompraDto extends PartialType(CreateCompraDto) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_compra?: string;
}
