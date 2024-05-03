const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
  host: 'localhost',
  database: 'diplom',
  password: '0000',
  port: 5432,
});

pool.query(
    `CREATE TABLE IF NOT EXISTS landmarks(
        id SERIAL PRIMARY KEY,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        main_image TEXT,
        description_image TEXT
    )`
).then((res) => {
    console.log('Table "landmarks" created successfully');
}).catch((err) => {
    console.error('Error creating table:', err);
});


class Landmark {
    static create(data) {
        const sql = "INSERT INTO landmarks (latitude, longitude, title, description, main_image, description_image) VALUES ($1, $2, $3, $4, $5, $6)";
        pool.query(sql, [data.latitude, data.longitude, data.title, data.description, data.main_image, data.description_image], (err, res) => {
            if (err) {
                console.error(err);
            } else {
                console.log('New landmark added successfully');
            }
        });
    }

    static selectAll(cb) {
        pool.query("SELECT * FROM landmarks", (err, res) => {
            if (err) {
                console.error(err);
                cb(err, null);
            } else {
                cb(null, res.rows);
            }
        });
    }

    static getLandmarkById(landmarkId, cb) {
        const sql = "SELECT * FROM landmarks WHERE id = $1";
        pool.query(sql, [landmarkId], (err, res) => {
            if (err) {
                console.error(err);
                cb(err, null);
            } else {
                cb(null, res.rows[0]);
            }
        });
    }

    static delete(landmarkId, cb) {
        const sql = "DELETE FROM landmarks WHERE id = $1";
        pool.query(sql, [landmarkId], (err, res) => {
            if (err) {
                console.error(err);
                cb(err);
            } else {
                cb(null);
            }
        });
    }

    static update(landmarkId, newData, cb) {
        const checkExistenceSql = "SELECT * FROM landmarks WHERE id = $1";
        pool.query(checkExistenceSql, [landmarkId], (err, res) => {
            if (err) {
                return cb(err);
            }

            // Здесь можно добавить логику обновления данных

            cb(null);
        });
    }
}

module.exports = Landmark;