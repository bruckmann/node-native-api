import { once } from 'node:events'
import { IncomingMessage, ServerResponse } from 'node:http'

export const routes = () => ({
  '/movie:get': async (request: IncomingMessage, response: ServerResponse) => {
    const res = { repsonse: 'Hello Dude, this is a movie api!' }
    response.write(JSON.stringify(res))
    return response.end()
  },
  '/movie:post': async (request: IncomingMessage, response: ServerResponse) => {
    const data = once(request, 'data')
    response.write(data)
    return response.end()
  },
})

