import { Model } from 'mongoose'

export type Movie = {
  show_id: string
  type?: string
  title: string
  cast?: string
  country?: string
  date_added: string
  release_year: string
  rating: string
  duration?: string
  genres?: string
  description?: string
}

export type MovieModel = Model<Movie>
