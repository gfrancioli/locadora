const Sequelize = require('sequelize');
const database = require('../database');
const Users = database.connection.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  idmovie: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Users;
