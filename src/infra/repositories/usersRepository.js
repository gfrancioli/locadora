const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

class usersRepository {
  constructor() {
    this.usersModel = usersModel;
  }

  async create(params){
    const document = await this.usersModel.create(params)
    return document;
  }

  async findOne(query){
    const document = await this.usersModel.findOne({ where: query });
    return document;
  }

  async findAll(query){
    const document = await this.usersModel.findAll({ where: query });
    return document;
  }

  async update(query, id){
    const document = await this.usersModel.findOne({ where: query });
    if (!document) throw Error(`User not updated`);
    if (document.dataValues.idmovie === 0) {
      document.idmovie = id;
      await document.save();
      return 'Rented!';
    }
    else return 'Already have a movie'
  }

  async resetMovie(query){
    const document = await this.usersModel.findOne({ where: query });
    if (!document) throw Error(`Movie not found`);
    document.idmovie = 0;
    await document.save()
  }

  async generateAccessToken(user) {
    const data = {
      user,
      iat: Math.floor(new Date().getTime() / 1000)
    };
    return jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn: 3600});
  }

}
module.exports = usersRepository
