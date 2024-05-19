const pool = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
  constructor(id, firstName, lastName, username, email, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static async findByEmail(email) {
    try {
      const [rows] = await pool.query('SELECT * FROM pte_users WHERE user_email = ?', [email]);
      if (rows.length > 0) {
        return rows[0];
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async findByEmailOrUsername(email, username) {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM pte_users WHERE user_email = ? OR username = ?',
        [email, username]
      );
      if (rows.length > 0) {
        return rows[0];
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async create(firstName, lastName, username, email, password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const result = await pool.query(
        'INSERT INTO pte_users (first_name, last_name, username, user_email, user_password) VALUES (?, ?, ?, ?, ?)',
        [firstName, lastName, username, email, hashedPassword]
      );
      return result[0].insertId; // Return the ID of the newly created user
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM pte_users WHERE id = ?', [id]);
      if (rows.length > 0) {
        return rows[0];
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async updatePassword(id, newPassword) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      await pool.query('UPDATE pte_users SET user_password = ? WHERE id = ?', [hashedPassword, id]);
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      await pool.query('DELETE FROM pte_users WHERE id = ?', [id]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
