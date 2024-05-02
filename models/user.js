const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'diplom',
  password: '0000',
  port: 5432,
});

pool.query(`
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    age INT NOT NULL,
    isAdmin INT
  )`,
  (err, res) => {
    if (err) {
      console.error('Error creating users table', err);
    } else {
      console.log('Users table created');
    }
  }
);

class User {
  static create(dataForm, cb) {
    const { name, email, password, age, isAdmin } = dataForm;

    pool.query(
      'INSERT INTO users (name, email, password, age, isAdmin) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [name, email, password, age, isAdmin],
      (error, result) => {
        if (error) return cb(error);
        cb(null, result.rows[0].id);
      }
    );
  }

  static findByEmail(email, cb) {
    pool.query('SELECT * FROM users WHERE email = $1', [email], (error, result) => {
      if (error) return cb(error);
      cb(null, result.rows[0]);
    });
  }

  static authenticate(dataForm, cb) {
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