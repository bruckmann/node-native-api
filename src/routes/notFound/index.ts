import { ClientRequest, ServerResponse} from "node:http"

export const routes = () => ({
  default: (request: ClientRequest, response: ServerResponse) => {
    response.writeHead(404)
    response.write("Sorry dude, this route doest't exists :( ")
    response.end()
  }
})