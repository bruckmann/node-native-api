import { once } from 'events'
import { createReadStream } from 'fs'
import { IncomingMessage, ServerResponse } from 'http'
import { join } from 'path'

export const controllers = {
  GET_MOVIES: async (request: IncomingMessage, response: ServerResponse) => {
    const filePath = join(__dirname, '../../data/NetFlix.csv')

    const file = createReadStream(filePath).on('data', (row) => {
      console.log(row.toString())
    })

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
