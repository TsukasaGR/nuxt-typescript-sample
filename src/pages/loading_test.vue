<template>
  <div>
    <h1>Loadingサンプルページ</h1>
    <button type="button" @click="loading">ローディング表示</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  async asyncData(): Promise<void> {
    const wait = (ms: number): Promise<null> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, ms)
      })
    }
    await wait(1000)
  }

  async loading(): Promise<void> {
    const wait = (ms: number): Promise<void> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, ms)
      })
    }

    this.$nuxt.$loading.start()

    await wait(1000).then(() => {
      // @ts-ignore
      this.$nuxt.$loading.finish()
    })
  }
}
</script>
<style lang="stylus" scoped>
div {
  min-height: 100vh;
}
</style>
