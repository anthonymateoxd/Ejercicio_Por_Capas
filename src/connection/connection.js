import sql from 'mssql';

// PRUEBA

const dbSettings = {
  server: 'myfreesqldbservermateo.database.windows.net',
  database: 'myFreeDB',
  user: 'admin_total', // Crea un usuario SQL en Azure Portal
  password: 'SQLServer32G',
  options: {
    encrypt: true, // Obligatorio para Azure
    trustServerCertificate: false, // Dejar en false para producción
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    console.log('✅ Conexión exitosa a Azure SQL');
    return pool;
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    throw error;
  }
};
