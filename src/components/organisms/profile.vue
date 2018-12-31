<template>
  <div class="organisms-profile">
    <h2>profileコンポーネント</h2>
    <p>email</p>
    <p>{{ user.email }}</p>
    <p>full name</p>
    <p>{{ fullName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Getter } from 'vuex-class'
import { User } from '~/store/organisms/profile/types'

@Component({
  components: {}
})
export default class OrganismsProfile extends Vue {
  @State('user', { namespace: 'profile' })
  user!: User
  @Getter('fullName', { namespace: 'profile' })
  fullName!: string

  fetch({ store }: { store: any }) {
    store.dispatch('profile/fetchData')
  }
}
</script>

<style lang="stylus">
.organisms-profile {
  border: 2px solid blue;
  padding: 10px;
}
</style>
