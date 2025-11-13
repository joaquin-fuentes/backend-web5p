let productos = [
  { nombre: "Coca cola 3L", precio: 4500, descripcion: "La más mejor", id: 20 },
  { nombre: "Pepsi 3L", precio: 3000, descripcion: "La 2da más mejor", id: 7 },
  { nombre: "Manaos", precio: 1200, descripcion: "La más peor", id: 33 },
];

export const obtenerProductosServicio = () => {
  // buscar los productos de la base de datos
  return {
    json: {
      mensaje: "Datos encontrados con éxito",
      datos: productos,
    },
    statusCode: 200,
  };
};

export const obtenerProductoPorIdServicio = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  if (!producto)
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
      datos: producto,
    },
    statusCode: 200,
  };
};

export const crearProductoServicio = (nuevoProducto) => {
  nuevoProducto.id = Date.now();
  productos.push(nuevoProducto);
  return {
    json: {
      mensaje: "Producto creado con éxito",
      datos: nuevoProducto,
    },
    statusCode: 202,
  };
};

export const editarProductoServicio = (id, body) => {
  const posicion = productos.findIndex((producto) => producto.id === id);
  if (posicion === -1)
    return {
      json: {
        mensaje: "El producto no existe",
        datos: null,
      },
      statusCode: 404,
    };
  productos[posicion] = { ...body, id };
  return {
    json: {
      mensaje: "Producto editado con éxito",
      datos: productos,
    },
    statusCode: 202,
  };
};

export const eliminarProductoServicio = (id) => {
  productos = productos.filter((producto) => producto.id !== id);
  return {
    json: {
      mensaje: "Producto eliminado con éxito",
    },
    statusCode: 200,
  };
};
