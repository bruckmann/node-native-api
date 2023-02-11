import { strictEqual } from 'node:assert'
import { describe, it, beforeEach, mock } from 'node:test'
import { CatalogModel } from '../../models'
import { Catalog } from '../../types'
import { CatalogRepository } from '.'

describe('MovieRepositorie', () => {
  describe('GetAllMovies', () => {
    const catalogMock: Catalog[] = [
      {
        show_id: '123',
        title: 'Top Gun',
        release_year: '2021',
        date_added: '12/02/2022',
        rating: '10',
      },

      {
        show_id: '123',
        title: 'Sponge Bob',
        release_year: '2022',
        date_added: '10/02/2022',
        rating: '11',
      },
    ]

    beforeEach(() => {
      CatalogModel.find = mock.fn(() => {
        return catalogMock
      })
    })

    it('Should return all Movies', async () => {
      const catalogRepository = CatalogRepository(CatalogModel)
      const catalog = await catalogRepository.getCatalog()
      strictEqual(catalog, catalogMock)
    })
  })
})
