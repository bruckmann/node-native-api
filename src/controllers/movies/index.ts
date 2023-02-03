import { once } from 'events'
import { IncomingMessage, ServerResponse } from 'http'
import {
  PAGINATION_LIMIT_DEFAULT_VALUE,
  PAGINATION_OFFSET_DEFAULT_VALUE,
} from '../../constants/pagionation'
import { Movie } from '../../models/movie'

export const controllers = {
  GET_MOVIES: async (request: IncomingMessage, response: ServerResponse) => {
    const { offset, limit } = request.headers

    const paginationConfig = {
      skip: PAGINATION_OFFSET_DEFAULT_VALUE,
      limit: PAGINATION_LIMIT_DEFAULT_VALUE,
    }

    if (offset && limit) {
      paginationConfig.skip = +offset
      paginationConfig.limit = +limit
    }

    const movies = await Movie.find({}, null, paginationConfig)

    response.write(JSON.stringify(movies))
    return response.end()
  },
  POST: async (request: IncomingMessage, response: ServerResponse) => {
    const data = once(request, 'data')
    response.write(data)
    return response.end()
  },
}
