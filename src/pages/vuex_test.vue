<template>
  <div>
    <h1>Vuexサンプルページ</h1>
    <OrganismsProfile/>
    <v-btn color="success" @click="backToTop">TOPに戻る</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OrganismsProfile from '~/components/organisms/profile.vue'

@Component({
  components: {
    OrganismsProfile
  }
})
export default class Index extends Vue {
  fetch({ store }: { store: any }) {
    store.dispatch('profile/fetchData')
  }

  backToTop() {
    this.$router.push('/')
  }
}
</script>
