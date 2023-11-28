import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CompraDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  id_veterinaria: string;

  @IsString()
  @IsNotEmpty()
  id_producto: string;

  @IsString()
  @IsNotEmpty()
  id_proveedor: string;

  @IsString()
  @IsNotEmpty()
  id_compra_detalle: string;

  @IsString()
  @IsNotEmpty()
  fecha_compra: string;
}
