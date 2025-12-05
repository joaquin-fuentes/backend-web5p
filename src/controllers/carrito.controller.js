import { agregarProductoServicio } from "../services/carrito.service.js";

export const agregarProductoCarrito = async (req, res) => {
  const idProducto = req.params.id;
  const { statusCode, json } = await agregarProductoServicio(
    req.idCarrito,
    req.idUsuario,
    idProducto
  );
  res.status(statusCode).json(json);
};
