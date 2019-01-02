import { MutationTree } from 'vuex'
import { ProfileState, User } from './types'

export const mutations: MutationTree<ProfileState> = {
  setProfile(state, payload: User) {
    console.log('mutation', typeof payload)
    const test: User = payload
    console.log(typeof <User>test)
    state.user = payload
  }
}
