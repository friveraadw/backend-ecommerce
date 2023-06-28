const pool = require('./conexion');
const env = require('env');


const getUsuarioPorEmail = async (email) => {
  const consulta_usuario = 'SELECT * FROM clientes WHERE email = $1';
  const { rows } = await pool.query(consulta_usuario, [email]);
  return rows[0];
};

module.exports = {
  getUsuarioPorEmail
};
