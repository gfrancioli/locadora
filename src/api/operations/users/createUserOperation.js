const Service = require('../../service/usersService')
const usersService = new Service();

module.exports = async (params, users) => {
  for (item of users) {
    if (item.dataValues.nome !== undefined || item.dataValues.email !== undefined) throw new Error('User already exists')
  }
  const document = await usersService.create({ ...params, idmovie: 0 });
  return document;
}
