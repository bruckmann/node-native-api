import { MovieModel, Movie, Pagination } from '../../types'

export interface IMovieRepositorie {
  _movieModel: MovieModel
  _pagination: Pagination
  getAllMovies(pagination?: Pagination | unknown): Promise<Movie[]>
}
