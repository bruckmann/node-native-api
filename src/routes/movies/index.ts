import { MovieController } from '../../controllers'
import { MovieModel } from '../../models'
import { MovieRepositorie } from '../../repositories/movies'

const movieRepositorie = new MovieRepositorie(MovieModel)
const movieController = new MovieController(movieRepositorie)

export const routes = () => ({
  '/movies:get': movieController.getMovies,
})
