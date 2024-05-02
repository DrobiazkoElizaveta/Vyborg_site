const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'diplom',
  password: '0000',
  port: 5432,
});

class MapElement {
    constructor(latitude, longitude, name, description, main_image_url, description_image_url) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.name = name;
      this.description = description;
      this.main_image_url = main_image_url;
      this.description_image_url = description_image_url;
    }

    static getMapElements(callback) {
        pool.query('SELECT * FROM monuments', (err, res) => {
            if (err) {
                console.error(err);
                callback(err, null);
            } else {
                const mapElements = res.rows.map(row => new MapElement(row.latitude, row.longitude, row.name, row.description, row.main_image_url, row.description_image_url));
                console.log('Успешно получены данные из базы данных.');
                callback(null, mapElements);
            }
        });
    }
}

module.exports = MapElement;
