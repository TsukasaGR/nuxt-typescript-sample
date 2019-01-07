<template>
  <div>
    <h1 class="text1">スタイル用サンプルページ</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style lang="stylus">
.text1 {
  color: $primary-color;

  +breakpoint() {
    color: $second-color;
  }

  +breakpoint(lg) {
    background: $primary-background;
  }

}
</style>
