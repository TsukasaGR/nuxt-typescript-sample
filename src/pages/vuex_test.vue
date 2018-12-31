<template>
  <div>
    <h1>Vuexサンプルページ</h1>
    <OrganismsProfile/>
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
export default class Index extends Vue {}
</script>
