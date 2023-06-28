const { getListadoProductosBD } = require('./consultas_productos');
const pool = require('./conexion');
const env = require('env');


const getListadoProductos = async (id, nombre, descripcion, precio, activo, imagen, precio_oferta) => {
  try {
    const listado_productos = await getListadoProductosBD(id, nombre, descripcion, precio, activo, imagen, precio_oferta);
    return listado_productos;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  getListadoProductos
};
