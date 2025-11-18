import { ProductoModel } from "../models/producto.model.js";

export const obtenerProductosServicio = async () => {
  // buscar los productos de la base de datos
  const productosDB = await ProductoModel.find();
  return {
    json: {
      mensaje: "Datos encontrados con éxito",
      datos: productosDB,
    },
    statusCode: 200,
  };
};

export const obtenerProductoPorIdServicio = async (id) => {
  const productoDB = await ProductoModel.findById(id);
  if (!productoDB)
    return {
      json: {
        mensaje: "El producto no existe",
        datos: null,
      },
      statusCode: 404,
    };
  return {
    json: {
      mensaje: "Datos encontrados con éxito",
      datos: productoDB,
    },
    statusCode: 200,
  };
};

export const crearProductoServicio = async (nuevoProductoDesdeCliente) => {
  const nuevoProductoDB = new ProductoModel(nuevoProductoDesdeCliente);
  await nuevoProductoDB.save();
  return {
    json: {
      mensaje: "Producto creado con éxito",
      datos: nuevoProductoDB,
    },
    statusCode: 202,
  };
};

export const editarProductoServicio = async (id, body) => {
  const productoActualizado = await ProductoModel.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  return {
    json: {
      mensaje: "Producto editado con éxito",
      datos: productoActualizado,
    },
    statusCode: 202,
  };
};

export const eliminarProductoServicio = async (id) => {
  const productoEliminado = await ProductoModel.findByIdAndDelete(id);
  return {
    json: {
      mensaje: "Producto eliminado con éxito",
      productoEliminado,
    },
    statusCode: 200,
  };
};
