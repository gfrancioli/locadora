const Service = require('../../service/usersService')
const usersService = new Service();

module.exports = async (query) => {
  const document = await usersService.findOne(query);
  if (!document) throw Error();
  const token = await usersService.getToken(query.email);
  return `Bearer ${token}`;
}
