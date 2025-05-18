import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export let db: mysql.Connection;

export async function connectDB() {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    console.log('Conectado ao banco de dados!');
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
    process.exit(1); 
  }
}
