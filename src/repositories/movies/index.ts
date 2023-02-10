import { IMovieRepositorie } from '../../interfaces'
import { MovieModel, Pagination } from '../../types'

const defaultPagination = {
  skip: 0,
  limit: 10,
}

export class MovieRepositorie implements IMovieRepositorie {
  _movieModel: MovieModel
  _pagination: Pagination

  constructor(movieModel: MovieModel, pagination?: Pagination) {
    this._pagination = pagination || defaultPagination
    this._movieModel = movieModel
  }

  async getAllMovies(pagination?: Pagination | null) {
    if (!pagination) {
      return await this._movieModel.find({}, null, this._pagination)
    }
    return await this._movieModel.find({}, null, pagination)
  }
}
