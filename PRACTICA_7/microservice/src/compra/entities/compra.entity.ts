import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Compra {
  @Prop({ required: true })
  id_veterinaria: string;

  @Prop({ required: true })
  id_producto: string;

  @Prop({ required: true })
  id_proveedor: string;

  @Prop({ required: true })
  id_compra_detalle: string;

  @Prop({ required: true })
  fecha_compra: string;

  @Prop({ required: true })
  active: boolean;
  default = true;
}

export const CompraSchema = SchemaFactory.createForClass(Compra);

export type CompraDocument = Compra & Document;
export const CompraModel = mongoose.model<CompraDocument>(
  'compras',
  CompraSchema,
);
