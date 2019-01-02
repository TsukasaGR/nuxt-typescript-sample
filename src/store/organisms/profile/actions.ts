import { ActionTree } from 'vuex'
import { ProfileState } from './types'
import { RootState } from '~/store/types'

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): void {
    const payload = {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'sample@example.com',
      phone: 11
    }
    commit('setProfile', payload)
  }
}
