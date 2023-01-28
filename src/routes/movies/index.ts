import { moviesControllers } from '../../controllers'

export const routes = () => ({
  '/movies:get': moviesControllers.GET,
  '/movies:post': moviesControllers.POST,
})
