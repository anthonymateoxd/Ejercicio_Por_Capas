import sql from 'mssql';

const dbSettings = {
  server: 'localhost',
  port: 50779,
  database: 'db_crud_usuarios',
  user: 'mateo',
  password: 'mateo123456',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
};
