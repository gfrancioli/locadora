const Service = require('../../service/movieService')
const movieService = new Service();

module.exports = async (params) => {
  const movie = await movieService.findOne({ nome: params.nome })
  if (movie) throw new Error('Movie already exists');
  const document = await movieService.create(params);
  return document;

}
