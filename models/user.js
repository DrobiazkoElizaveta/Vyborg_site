const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test.db");

const sql =
  "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, age INT NOT NULL, isAdmin INT)";

db.run(sql);

class User {
  constructor() {}

  static create(dataForm, cb) {
    const { name, email, password, age, isAdmin } = dataForm;

    db.run(
      "INSERT INTO users (name, email, password, age, isAdmin) VALUES (?, ?, ?, ?, ?)",
      [name, email, password, age, isAdmin],
      function (error) {
        if (error) return cb(error);
        cb(null, this.lastID);
      }
    );
  }

  static findByEmail(email, cb) {
    db.get("SELECT * FROM users WHERE email = ?", email, cb);
  }

  static authentificate(dataForm, cb) {
    User.findByEmail(dataForm.email, (error, user) => {
      if (error) return cb(error);
      if (!user) return cb();

      if (dataForm.password === user.password) {
        cb(null, user);
      } else {
        cb();
      }
    });
  }
}

module.exports = User;