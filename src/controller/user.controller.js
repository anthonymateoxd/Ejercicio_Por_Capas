import { getConnection } from '../connection/connection.js';
import sql from 'mssql';

export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM tb_usuarios');

    return res.json(result.recordset);
  } catch (error) {
    console.log(error);
  }
};

export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id_usuario', sql.Int, req.params.id_usuario)
      .query('SELECT * FROM tb_usuarios WHERE id_usuario = @id_usuario');

    if (result.recordset[0] === 0)
      return res.status(404).json({ message: 'User not Found' });

    return res.json(result.recordset);
  } catch (error) {
    console.log(error);
  }
};

export const postUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('nombre', sql.NVarChar, req.body.nombre)
      .input('email', sql.NVarChar, req.body.email)
      .input('contrasena', sql.NVarChar, req.body.contrasena)
      .query(
        'INSERT INTO tb_usuarios (nombre, email, contrasena) VALUES (@nombre, @email, @contrasena); SELECT SCOPE_IDENTITY() AS id_usuario;'
      );

    return res.json({
      id_usuario: result.recordset[0].id_usuario,
      nombre: req.body.nombre,
      email: req.body.email,
      contrasena: req.body.contrasena,
    });
  } catch (error) {
    console.log(error);
  }
};

export const putUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id_usuario', sql.Int, req.params.id_usuario)
      .input('nombre', sql.NVarChar, req.body.nombre)
      .input('email', sql.NVarChar, req.body.email)
      .input('contrasena', sql.NVarChar, req.body.contrasena)
      .query(
        'UPDATE tb_usuarios SET nombre = @nombre, email = @email, contrasena = @contrasena WHERE id_usuario = @id_usuario'
      );
    return res.json({
      id_usuario: req.params.id_usuario,
      nombre: req.body.nombre,
      email: req.body.email,
      contrasena: req.body.contrasena,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id_usuario', sql.Int, req.params.id_usuario)
      .query('DELETE FROM tb_usuarios WHERE id_usuario = @id_usuario');

    if (result.rowsAffected[0] === 0)
      return res.status(404).json({ message: 'User not found' });

    return res.json({ message: 'User Deleted' });
  } catch (error) {
    console.error(error);
  }
};
