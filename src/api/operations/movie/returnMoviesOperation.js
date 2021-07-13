const Service = require('../../service/movieService')
const ServiceUser = require('../../service/usersService')
const movieService = new Service();
const userService = new ServiceUser();

module.exports = async (id, userInfo) => {
  const user = await userService.findOne({ email: userInfo });
  if (!user) throw new Error('Some error occurred');
  if (user.dataValues.idmovie === 0 || user.dataValues.idmovie !== parseInt(id))
    throw new Error('User dont have movies or dont have this movie')
  else {
    const document = await movieService.returnMovie({ id });
    await userService.resetMovie({ email: userInfo });
    return document;
  }

}
