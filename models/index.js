const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const configPath = path.resolve(__dirname, '../config/config.js');
const config = require(configPath)[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
});

const User = sequelize.define('User', {
  userId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {});

module.exports = { sequelize, User };
