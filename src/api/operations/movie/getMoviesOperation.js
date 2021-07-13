const Service = require('../../service/movieService')
const movieService = new Service();

module.exports = async (query) => {
  const document = await movieService.findAll(query);
  return document;
}
