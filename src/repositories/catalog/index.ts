import { DEFAULT_PAGINATION_SETTINGS } from '../../constants'
import { CatalogRepository as ICatalogRepository } from '../../interfaces'
import { CatalogModel, Pagination } from '../../types'

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
