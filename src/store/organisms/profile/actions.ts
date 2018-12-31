import { ActionTree } from 'vuex'
import { ProfileState, M_SET_PROFILE } from './types'
import { RootState } from '~/store/types'

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    const payload = {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'sample@example.com',
      phone: 11
    }
    commit(M_SET_PROFILE, payload)
  }
}
