import * as mongoose from 'mongoose';

export const CompraSchema = new mongoose.Schema({
  id_veterinaria: { type: String, required: true },
  id_producto: { type: String, required: true },
  id_proveedor: { type: String, required: true },
  id_compra_detalle: { type: String, required: true },
  fecha_compra: { type: String, required: true },
});

export interface Compra extends mongoose.Document {
  _id: string;
  id_veterinaria: string;
  id_producto: string;
  id_proveedor: string;
  id_compra_detalle: string;
  fecha_compra: string;
}

export const CompraModel = mongoose.model<Compra>('compras', CompraSchema);