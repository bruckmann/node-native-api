import { strictEqual } from 'node:assert'
import { describe, it, beforeEach, mock } from 'node:test'
import { MovieModel } from '../../models'
import { Movie } from '../../types'
import { MovieRepositorie } from '.'

describe('MovieRepositorie', () => {
  describe('GetAllMovies', () => {
    const moviesMock: Movie[] = [
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
      MovieModel.find = mock.fn(() => {
        return moviesMock
      })
    })

    it('Should return all Movies', async () => {
      const movieRepositorie = new MovieRepositorie(MovieModel)
      const movies = await movieRepositorie.getAllMovies()
      strictEqual(movies, moviesMock)
    })
  })
})
