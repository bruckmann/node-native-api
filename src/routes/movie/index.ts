import { movieControllers } from '../../controllers'

export const routes = () => ({
  '/movie:get': movieControllers.GET,
  '/movie:post': movieControllers.POST,
})

