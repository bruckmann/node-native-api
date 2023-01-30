import { IncomingMessage, ServerResponse } from 'http'

import { routes as movieRoutes } from './movies'

export const routes = {
  ...movieRoutes(),
  default: (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(404)
    response.write("Sorry dude, this route doest't exists :( ")
    response.end()
  },
}
