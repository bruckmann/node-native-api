import { createServer } from 'http'
import { config as dotenvConfig } from 'dotenv'
import { connect, set } from 'mongoose'

import { DB_NAME } from './constants'
import { handler } from './handler'

dotenvConfig()

const PORT = process.env.PORT || 3030
const CONN_STRING = process.env.CONN_STRING || ''

export const appServer = createServer(handler).listen(PORT, async () => {
  try {
    set('strictQuery', true)
    await connect(CONN_STRING, { dbName: DB_NAME })
    console.log('[MONGODB] connected')
    console.log('Application Server listen on:', PORT)
  } catch (err) {
    console.log('[MONGODB] error ', err.message)
  }
})
