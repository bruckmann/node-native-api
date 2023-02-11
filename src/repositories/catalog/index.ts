import { CatalogRepository as ICatalogRepository } from '../../interfaces'
import { CatalogModel, Pagination } from '../../types'

export const DEFAULT_PAGINATION_SETTINGS = {
  skip: 0,
  limit: 10,
}

export const CatalogRepository = (catalogModel: CatalogModel): ICatalogRepository => {
  return {
    getCatalog: async (pagination?: Pagination) => {
      if (!pagination) {
        pagination = DEFAULT_PAGINATION_SETTINGS
      }
      return await catalogModel.find({}, null, pagination)
    },
  }
}
