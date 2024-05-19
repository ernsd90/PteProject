const pool = require('../config/database');

class ReadLoud {


  constructor(id, appuni_id, title, content, created_date, updated_date) {
    this.id = id;
    this.appuni_id = appuni_id;
    this.title = title;
    this.content = content;
    this.created_date = created_date;
    this.updated_date = updated_date;
  }

  static async create(appuni_id, title, content) {
    const created_date = new Date();
    const updated_date = created_date;
    try {
      const [result] = await pool.query(
        'INSERT INTO speaking_read_loud (appuni_id, title, content, created_date, updated_date) VALUES (?, ?, ?, ?, ?)',
        [appuni_id, title, content, created_date, updated_date]
      );
      return result.insertId; // Return the ID of the newly created entry
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM speaking_read_loud WHERE id = ?', [id]);
      if (rows.length > 0) {
        return rows[0];
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, appuni_id, title, content) {
    const updated_date = new Date();
    try {
      await pool.query(
        'UPDATE speaking_read_loud SET appuni_id = ?, title = ?, content = ?, updated_date = ? WHERE id = ?',
        [appuni_id, title, content, updated_date, id]
      );
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      await pool.query('DELETE FROM speaking_read_loud WHERE id = ?', [id]);
    } catch (error) {
      throw error;
    }
  }

  static async findAll({ limit, offset }) {
    try {
      const [results] = await pool.query('SELECT * FROM speaking_read_loud LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)]);
      return results;
    } catch (error) {
      throw error;
    }
  }

  static async count() {
    try {
      const [[{ count }]] = await pool.query('SELECT COUNT(*) AS count FROM speaking_read_loud');
      return count;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = ReadLoud;
