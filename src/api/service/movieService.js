const Repository = require('../../infra/repositories/movieRepository')
const movieRepository = new Repository();

class movieService {
  constructor() {
    this.repository = movieRepository;
  }

  async create(params) {
    const document = await this.repository.create(params)
    return document;
  }

  async findOne(query) {
    const document = await this.repository.findOne(query)
    return document;
  }

  async findAll(query){
    const document = await this.repository.findAll(query);
    return document;
  }

  async update(query){
    const document = await this.repository.update(query);
    return document;
  }

  async returnMovie(query){
    const document = await this.repository.returnMovie(query)
    return document
  }



}
module.exports = movieService;
