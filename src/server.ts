import { createServer } from 'node:http'

import { handler } from './handler'

const PORT = process.env.PORT || 3030

export const appServer = createServer(handler).listen(PORT, () => {
  console.log('Application Server listen on:', PORT)
})
