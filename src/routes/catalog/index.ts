import { CatalogController } from '../../controllers'
import { CatalogModel } from '../../models'
import { CatalogRepository } from '../../repositories/'

const catalogRepository = CatalogRepository(CatalogModel)
const catalogController = CatalogController(catalogRepository)

export const routes = () => ({
  '/catalog:get': catalogController.getCatalog,
})
