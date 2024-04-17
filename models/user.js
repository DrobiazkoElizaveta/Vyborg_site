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

// const mysql = require('mysql2'); 
 
// const connection = mysql.createConnection({ 
//   host: 'localhost', 
//   user: 'root', 
//   password: '2806', 
//   database: 'test' 
// }); 
 
// connection.connect((err) => { 
//   if (err) { 
//     console.error('Error connecting to MySQL database', err); 
//     return; 
//   } 
//   console.log('Connected to MySQL database'); 
// }); 
 
// const sql = ` 
//   CREATE TABLE IF NOT EXISTS users( 
//     id INT PRIMARY KEY AUTO_INCREMENT, 
//     name VARCHAR(255) NOT NULL, 
//     email VARCHAR(255) NOT NULL, 
//     password VARCHAR(255) NOT NULL, 
//     age INT NOT NULL, 
//     isAdmin INT 
//   ) 
// `; 
 
// connection.query(sql, (err, results) => { 
//   if (err) { 
//     console.error('Error creating users table', err); 
//     return; 
//   } 
//   console.log('Users table created'); 
// }); 
 
// class User { 
//   constructor() {} 
   
//   static create(dataForm, cb) { 
//     const { name, email, password, age, isAdmin} = dataForm; 
     
//     const sql = "INSERT INTO users (name, email, password, age, isAdmin) VALUES (?, ?, ?, ?, ?)"; 
//     connection.query(sql, [name, email, password, age, isAdmin], (err, results) => { 
//       if (err) { 
//         console.error('Error creating user', err); 
//         return cb(err); 
//       } 
//       console.log('User created'); 
//       cb(null, results.insertId); 
//     }); 
//   } 
   
//   static findByEmail(email, cb) { 
//     const sql = "SELECT * FROM users WHERE email = ?"; 
//     connection.query(sql,[email], (err, rows) => { 
//       if (err) { 
//         console.error('Error finding user by email', err); 
//         return cb(err); 
//       } 
//       if (!rows || rows.length === 0) { 
//         return cb(null, null); 
//       } 
//       cb(null, rows[0]); 
//     }); 
//   } 
   
//   static authentificate(dataForm, cb) { 
//     User.findByEmail(dataForm.email, (err, user) => { 
//       if (err) { 
//         console.error('Error authenticating user', err); 
//         return cb(err); 
//       } 
       
//       if (!user) { 
//         return cb(); 
//       } 
       
//       if (dataForm.password === user.password) { 
//         cb(null, user); 
//       } else { 
//         cb(); 
//       } 
//     }); 
//   } 
// } 
 
// module.exports = User;