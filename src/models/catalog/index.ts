import { Schema, model } from 'mongoose'
import { COLLECTION_NAME } from '../../constants'
import { Catalog } from '../../types'

const CatalogSchema = new Schema<Catalog>({}, { collection: COLLECTION_NAME })

export const CatalogModel = model('Catalog', CatalogSchema)
