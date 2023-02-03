import { IncomingMessage, ServerResponse } from 'http'

import { routes } from './routes'

export const handler = (request: IncomingMessage, response: ServerResponse) => {
  const { url, method } = request

  const key = `${url}:${method?.toLowerCase()}`
  const route = routes[key] || routes.default
  return Promise.resolve(route(request, response))
}
