const Sequelize = require('sequelize');
const database = require('../database');
const Movie = database.connection.define('movie', {
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
  diretor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: Sequelize.STRING,
  quantidade: Sequelize.INTEGER
})

module.exports = Movie;
