import { moviesControllers } from '../../controllers'

export const routes = () => ({
  '/movies:get': moviesControllers.GET_MOVIES,
  '/movies:post': moviesControllers.POST,
})
