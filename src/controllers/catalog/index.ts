import { IncomingMessage, ServerResponse } from 'http'
import { CatalogRepository } from '../../interfaces'
import { Catalog } from '../../types'

export const CatalogController = (catalogRepository: CatalogRepository) => {
  return {
    getCatalog: async (
      request: IncomingMessage,
      response: ServerResponse,
    ): Promise<ServerResponse<IncomingMessage>> => {
      try {
        const { skip, limit } = request.headers

        let catalog: Catalog[]

        if (skip && limit) {
          const parsedSkip = Number(skip)
          const parsedLimit = Number(limit)
          catalog = await catalogRepository.getCatalog({ skip: parsedSkip, limit: parsedLimit })
        } else {
          catalog = await catalogRepository.getCatalog()
        }

        response.write(JSON.stringify(catalog))
        return response.end()
      } catch (err) {
        console.log('[MovieController]: ', err)
        response.write(JSON.stringify({ res: 'Internal server error' }))
        return response.end()
      }
    },
  }
}
