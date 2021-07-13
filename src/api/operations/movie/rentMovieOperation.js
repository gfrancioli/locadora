const Service = require('../../service/movieService')
const ServiceUser = require('../../service/usersService')
const movieService = new Service();
const userService = new ServiceUser();

module.exports = async (id, userInfo) => {
  const user = await userService.findOne({ email: userInfo });
  const movie = await movieService.findOne({ id });
  if (!user || !movie) throw new Error('Some error occurred');
  if (movie.dataValues.quantidade === 0) throw new Error('We dont have this movie for a while')
  if (user.dataValues.idmovie !== 0) throw new Error('User Already have a movie')
  else {
    await movieService.update({ id });
    const response = await userService.update({ email: userInfo }, id)
    return response;
  }


}
