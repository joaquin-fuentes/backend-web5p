import {
  agregarProductoServicio,
  eliminarProductoServicio,
  obtenerDatosCarritoServicio,
} from "../services/carrito.service.js";

export const agregarProductoCarrito = async (req, res) => {
  const idProducto = req.params.id;
  const { statusCode, json } = await agregarProductoServicio(
    req.idCarrito,
    req.idUsuario,
    idProducto
  );
  res.status(statusCode).json(json);
};

export const eliminarProductoCarrito = async (req, res) => {
  const idProducto = req.params.id;
  const { statusCode, json } = await eliminarProductoServicio(
    req.idCarrito,
    req.idUsuario,
    idProducto
  );
  res.status(statusCode).json(json);
};

export const obtenerDatosCarrito = async (req, res) => {
  const { statusCode, json } = await obtenerDatosCarritoServicio(req);
  res.status(statusCode).json(json);
};
