import mongoose from "mongoose";

const { Schema } = mongoose;

const UsuarioSchema = new Schema(
  {
    usuario: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    urlImagen: {
      type: String,
      match:
        /^https?:\/\/[^\s\/$.?#].[^\s]*\.(?:jpg|png|webp|avif|svg)(?:\?.*)?(?:#.*)?$/i,
    },
    password: { type: String, required: true },
    rol: { type: String, enum: ["usuario", "admin"], default: "usuario" },
  },
  {
    timestamps: true,
  }
);

// crear el modelo con su schema
export const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);
