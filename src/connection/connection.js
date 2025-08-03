import sql from 'mssql';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const dbSettings = {
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT), // Convert string to number
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true', // Convert string to boolean
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true',
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};
