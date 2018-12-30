<template>
  <div class="sample">
    <h2>サンプルコンポーネント</h2>
    <p>{{ propString }}</p>
    <p>{{ propNumber }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Sample extends Vue {
  @Prop()
  propString!: string
  @Prop({ type: Number, required: true })
  propNumber!: number

  sampleVariableString: string = 'サンプル変数(String)'
  sampleVariableNumber: number = 123
}
</script>

<style lang="stylus">
.sample {
  border: 2px solid green;
  padding: 5px;
}
</style>
