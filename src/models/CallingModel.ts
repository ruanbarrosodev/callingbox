import { db } from '../config/database';
import { ResultSetHeader, RowDataPacket } from 'mysql2';


export interface Calling {
  id?: number;
  name: string;
  ident: string;
  sector: string;
  statusCalling: string;
  typeCalling: string;
  observation: string;
  datetime: string;
}

export class CallingModel {
  static async create(calling: Calling) {
    const sql = `
      INSERT INTO calling (name, ident, sector, statusCalling, typeCalling, observation, datetime)
      VALUES (?, ?, ?,?, ?, ?, ?)
    `;
    const [result] = await db.execute(sql, [
      calling.name,
      calling.ident,
      calling.sector,
      calling.statusCalling,
      calling.typeCalling,
      calling.observation,
      calling.datetime
    ]);
    return result;
  }

  static async update(id: number, calling: Partial<Calling>) {
    const fields = Object.keys(calling).map(key => `${key} = ?`).join(', ');
    
    const values = Object.values(calling).map(v => v === undefined ? null : v);
    const sql = `UPDATE calling SET ${fields} WHERE id = ?`;

    const [result] = await db.execute<ResultSetHeader>(sql, [...values, id]);

    return result; 
  }

  static async findAll() {
    const [rows] = await db.execute('SELECT * FROM calling');
    return rows;
  }

  static async findById(id: number): Promise<RowDataPacket[]> {
    const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM calling WHERE id = ?', [id]);
    return rows;
  }

  static async delete(id: number) {
    const [result] = await db.execute('DELETE FROM calling WHERE id = ?', [id]);
    return result;
  }
}
