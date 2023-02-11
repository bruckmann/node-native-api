import { IncomingMessage, ServerResponse } from 'http'

import { routes as CatalogRoutes } from './catalog'

export const routes = {
  ...CatalogRoutes(),
  default: (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(404)
    response.write("Sorry dude, this route doest't exists :( ")
    response.end()
  },
}
