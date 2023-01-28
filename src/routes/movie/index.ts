import { ClientRequest, ServerResponse} from "node:http"
import { once } from "node:events"

export const routes = () => ({
  "/movie:get": async (request: ClientRequest, response: ServerResponse) => {
    response.write({ response: "Hello Dude, this is a movie api! "})
    return response.end()
  },
  "movie:post": async (request: ClientRequest, response: ServerResponse) => {
    const data = once(request, "data")    
    response.write(data)
    return response.end()
  }
})