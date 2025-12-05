import { CarritoModel } from "../models/carrito.model.js";
import { ProductoModel } from "../models/producto.model.js";

export const agregarProductoServicio = async (
  idCarrito,
  idUsuario,
  idProducto
) => {
  try {
    const carrito = await CarritoModel.findById(idCarrito);
    if (!carrito) throw new Error("Carrito no encontrado");

    const productoEncontrado = await ProductoModel.findById(idProducto);
    if (!productoEncontrado) throw new Error("Producto no encontrado");

    const itemEnCarrito = carrito.productos.find((producto) => {
      return producto.idProducto.toString() === idProducto.toString();
    });
    // si el producto si existia en el carrito debo aumentar cantidad
    if (itemEnCarrito) {
      itemEnCarrito.cantidad += 1;
      itemEnCarrito.precioTotal =
        itemEnCarrito.cantidad * itemEnCarrito.precioUnitario;
    } else {
      // si el producto no exisita en el carrito, debo agregarlo.
      carrito.productos.push({
        idProducto,
        cantidad: 1,
        precioUnitario: productoEncontrado.precio,
        precioTotal: productoEncontrado.precio,
      });
    }
    await carrito.save();
    return {
      statusCode: 201,
      json: {
        msg: `Producto Agregado al carrito con éxito`,
      },
    };
  } catch (error) {
    return {
      statusCode: 400,
      json: {
        msg: error,
      },
    };
  }
};
