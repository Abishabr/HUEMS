import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ems_db',
  waitForConnections: true,
  connectionLimit: 10
});

export default connection;
