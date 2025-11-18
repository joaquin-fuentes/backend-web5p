import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductoSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    precio: { type: Number, required: true, min: 0 },
    descripcion: { type: String, default: "Sin descripcion" },
    urlImagen: {
      type: String,
      match:
        /^https?:\/\/[^\s\/$.?#].[^\s]*\.(?:jpg|png|webp|avif|svg)(?:\?.*)?(?:#.*)?$/i,
    },
  },
  {
    timestamps: true,
  }
);

// crear el modelo con su schema
export const ProductoModel = mongoose.model("productos", ProductoSchema);
