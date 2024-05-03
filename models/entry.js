const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'diplom',
  password: '0000',
  port: 5432,
});

pool.query(
    `CREATE TABLE IF NOT EXISTS entries(
        id SERIAL PRIMARY KEY,
        title TEXT,
        content TEXT NOT NULL
    )`,
    (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Table "entries" created successfully');
        }
    }
);

class Entry {
    static create(data) {
        const sql = "INSERT INTO entries (title, content) VALUES ($1, $2)";
        pool.query(sql, [data.title, data.content], (err, res) => {
            if (err) {
                console.error(err);
            } else {
                console.log('New entry added successfully');
            }
        });
    }

    static selectAll(cb) {
        pool.query("SELECT * FROM entries", (err, res) => {
            if (err) {
                console.error(err);
                cb(err, null);
            } else {
                cb(null, res.rows);
            }
        });
    }

    static getEntryById(entryId, cb) {
        const sql = "SELECT * FROM entries WHERE id = $1";
        pool.query(sql, [entryId], (err, res) => {
            if (err) {
                console.error(err);
                cb(err, null);
            } else {
                cb(null, res.rows[0]);
            }
        });
    }

    static delete(entryId, cb) {
        const sql = "DELETE FROM entries WHERE id = $1";
        pool.query(sql, [entryId], (err, res) => {
            if (err) {
                console.error(err);
                cb(err);
            } else {
                cb(null);
            }
        });
    }

    static update(entryId, newData, cb) {
        const checkExistenceSql = "SELECT * FROM entries WHERE id = $1";
        pool.query(checkExistenceSql, [entryId], (err, res) => {
            if (err) {
                return cb(err);
            }

            // Здесь можно добавить логику обновления данных

            cb(null);
        });
    }
}

module.exports = Entry;
