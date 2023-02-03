import { Schema, model } from 'mongoose'

const movieSchema = new Schema({
  show_id: String,
  type: String,
  title: String,
  cast: String,
  country: String,
  date_added: String,
  release_year: String,
  rating: String,
  duration: String,
  genres: String,
  description: String,
})

export const Movie = model('movie', movieSchema)
