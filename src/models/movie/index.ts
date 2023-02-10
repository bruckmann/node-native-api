import { Schema, model } from 'mongoose'
import { Movie } from '../../types'

const movieSchema = new Schema<Movie>({})

export const MovieModel = model('Movie', movieSchema)
