const Sequelize = require('sequelize');
const databaseConfig =  require('../../config/database');
const models = [];

class Database {
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection))
        .map((model) => {
          if(model.associate) model.associate(this.connection.models);
          return model;
        })
  }
}

module.exports =  new Database();
