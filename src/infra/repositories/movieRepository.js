const movieModel = require('../models/movieModel')

class movieRepository {
  constructor() {
    this.movieModel = movieModel;
  }

  async create(params){
    const document = await this.movieModel.create(params)
    return document;
  }

  async findOne(query){
    const document = await this.movieModel.findOne({ where: query });
    return document;
  }

  async findAll(query){
    const document = await this.movieModel.findAll({ where: query });
    return document;
  }

  async update(query){
    const document = await this.movieModel.findOne({ where: query });
    if (!document) throw Error(`Movie not updated`);
    if (document.dataValues.quantidade > 0){
      document.quantidade -= 1;
      await document.save()
    }
    return document;
  }

  async returnMovie(query){
    const document = await this.movieModel.findOne({ where: query });
    if (!document) throw Error(`Movie not found`);
    document.quantidade += 1;
    await document.save()
    return 'Movie returned, thank you!';
  }
}
module.exports = movieRepository
