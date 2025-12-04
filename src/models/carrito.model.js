import mongoose from "mongoose";

const { Schema } = mongoose;

const CarritoSchema = new Schema(
  {
    productos: [
      {
        idProducto: { type: mongoose.Schema.Types.ObjectId, ref: "Productos" },
        cantidad: { type: Number, default: 1 },
        precioUnitario: { type: Number },
        precioTotal: { type: Number },
      },
    ],
    idUsuario: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// crear el modelo con su schema
export const CarritoModel = mongoose.model("carritos", CarritoSchema);
