import { ClientRequest, IncomingMessage, ServerResponse } from 'node:http'

import { routes } from './routes'

export const handler = (request: ClientRequest, response: ServerResponse) => {
  const { path, method } = request

  const key = `${path}:${method}`
  const route = routes[key] || routes.default
  return Promise.resolve(route(request, response))
}
