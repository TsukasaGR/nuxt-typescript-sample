<template>
  <div>
    <h1>Middlewareサンプルページ</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  middleware: 'pageMiddleware'
})
export default class Index extends Vue {}
</script>
