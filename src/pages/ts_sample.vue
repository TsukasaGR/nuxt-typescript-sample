<template>
  <div>
    <h1>TSサンプルページ</h1>
    <p>{{ sampleVariableString }}</p>
    <p>{{ sampleVariableNumber }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  sampleVariableString: string = 'サンプル変数(String)'
  sampleVariableNumber: number = 123
}
</script>
