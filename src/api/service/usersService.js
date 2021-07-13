const Repository = require('../../infra/repositories/usersRepository')
const usersRepository = new Repository();


class usersService {
  constructor() {
    this.repository = usersRepository;
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

  async update(query, id){
    const document = await this.repository.update(query, id);
    return document;
  }

  async resetMovie(query){
    const document = await this.repository.resetMovie(query);
    return document;
  }

  async getToken(user) {
    const token = await this.repository.generateAccessToken(user);
    return token;
  }

}
module.exports = usersService;
