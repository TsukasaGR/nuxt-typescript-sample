<template>
  <div>
    <h1>TSサンプルページ</h1>
    <p>{{ sampleVariableString }}</p>
    <p>{{ sampleVariableNumber }}</p>
    <SampleComponent :prop-string="propString" :prop-number="propNumber"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import sample1 from '~/modules/sample1'

import SampleComponent from '~/components/Sample.vue'

@Component({
  components: {
    SampleComponent
  }
})
export default class Index extends Vue {
  sampleVariableString: string = 'サンプル変数(String)'
  sampleVariableNumber: number = 123
  propString: string = '子に渡す変数'
  propNumber: number = 345

  asyncData() {
    sample1()
  }
}
</script>
