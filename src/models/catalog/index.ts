import { Schema, model } from 'mongoose'
import { Catalog } from '../../types'

const CatalogSchema = new Schema<Catalog>({})

export const CatalogModel = model('Catalog', CatalogSchema)
