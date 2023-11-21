import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Compra {
  @Field()
  @Prop({ required: true })
  id_veterinaria: string;

  @Field()
  @Prop({ required: true })
  id_producto: string;

  @Field()
  @Prop({ required: true })
  id_proveedor: string;

  @Field()
  @Prop({ required: true })
  id_compra_detalle: string;

  @Field()
  @Prop({ required: true })
  fecha_compra: string;

  @Field()
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
