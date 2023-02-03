import { createServer } from 'http'
import { config as dotenvConfig } from 'dotenv'
import { connect, set } from 'mongoose'

import { handler } from './handler'

dotenvConfig()

const PORT = process.env.PORT || 3030
const CONN_STRING = process.env.CONN_STRING || ''

export const appServer = createServer(handler).listen(PORT, async () => {
  set('strictQuery', true)
  await connect(CONN_STRING, {})
  console.log('[MONGODB] connected')
  console.log('Application Server listen on:', PORT)
})
