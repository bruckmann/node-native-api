import { Catalog, Pagination } from '../../types'

export interface CatalogRepository {
  getCatalog(pagination?: Pagination): Promise<Catalog[]>
}
