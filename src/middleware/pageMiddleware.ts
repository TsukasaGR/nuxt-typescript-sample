import { ApplicationContext } from "~/types/nuxt"

export default (option: ApplicationContext) => {
  console.log('pageMiddleware passed', option)
}
