import { IncomingMessage, ServerResponse } from 'http'
import { IMovieRepositorie } from '../../interfaces'

export class MovieController {
  _movieRepositorie: IMovieRepositorie

  constructor(movieRepositorie: IMovieRepositorie) {
    this._movieRepositorie = movieRepositorie
  }

  async getMovies(
    request: IncomingMessage,
    response: ServerResponse,
  ): Promise<ServerResponse<IncomingMessage>> {
    const { skip, limit } = request.headers

    let pagination = {}
    if (skip && limit) {
      pagination = {
        skip,
        limit,
      }
    }

    try {
      const movies = this._movieRepositorie.getAllMovies(pagination)
      response.write(JSON.stringify(movies))
      return response.end()
    } catch (error) {
      console.error(error)
      const errorResponse = { message: 'Error to bring your data, try later' }
      response.write(JSON.stringify(errorResponse))
      return response.end()
    }
  }
}
