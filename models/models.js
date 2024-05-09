const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const Admin = sequelize.define("admin", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Entry = sequelize.define("entries", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  photo: { type: DataTypes.BLOB }, 
});

const Landmark = sequelize.define("landmark", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  latitude: { type: DataTypes.FLOAT, allowNull: false },
  longitude: { type: DataTypes.FLOAT, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  main_image: { type: DataTypes.BLOB },
  description_image: { type: DataTypes.BLOB },
});

module.exports = { Admin, Entry, Landmark };
