import { once } from 'events'
import { IncomingMessage, ServerResponse } from 'http'

export const controllers = {
  GET: async (request: IncomingMessage, response: ServerResponse) => {
    const res = { repsonse: 'Hello Dude, this is a movie api!' }
    response.write(JSON.stringify(res))
    return response.end()
  },
  POST: async (request: IncomingMessage, response: ServerResponse) => {
    const data = once(request, 'data')
    response.write(data)
    return response.end()
  },
}
