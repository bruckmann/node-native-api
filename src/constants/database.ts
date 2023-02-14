import { config } from 'dotenv'

config()

export const DB_NAME = process.env.DB_NAME || ''
export const COLLECTION_NAME = process.env.COLLECTION_NAME || ''
