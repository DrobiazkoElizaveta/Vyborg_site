const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'diplom',
  password: '0000',
  port: 5432,
});

pool.query(`
  CREATE TABLE IF NOT EXISTS admins(
    id SERIAL PRIMARY KEY,
    login TEXT NOT NULL,
    password TEXT NOT NULL
  )`,
  (err, res) => {
    if (err) {
      console.error('Error creating admins table', err);
    } else {
      console.log('Admins table created');
    }
  }
);

class Admin {
  static create(dataForm, cb) {
    const { login, password } = dataForm;

    pool.query(
      'INSERT INTO admins (login, password) VALUES ($1, $2) RETURNING id',
      [login, password],
      (error, result) => {
        if (error) return cb(error);
        cb(null, result.rows[0].id);
      }
    );
  }

  static findByLogin(login, cb) {
    pool.query('SELECT * FROM admins WHERE login = $1', [login], (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows[0]);
    });
  }

  static authenticate(dataForm, cb) {
    Admin.findByLogin(dataForm.login, (error, admin) => {
      if (error) return cb(error);
      if (!admin) return cb();      

      if (dataForm.password === admin.password) {
        cb(null, admin);
      } else {
        cb();
      }
    });
  }
}


module.exports = Admin;

