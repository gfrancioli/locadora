const Service = require('../../service/usersService')
const usersService = new Service();

module.exports = async (query) => {
  const document = await usersService.findAll(query);
  return document;
}
