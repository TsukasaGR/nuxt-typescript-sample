<template>
  <div>
    <h1>TSサンプルページ</h1>
    <p>{{ sampleVariableString }}</p>
    <p>{{ sampleVariableNumber }}</p>
    <SampleComponent :prop-string="propString" :prop-number="propNumber" :prop-sample="propSample"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import sample1 from '~/modules/sample1'
import { ISampleType } from '~/types/sample'

import SampleComponent from '~/components/sample.vue'

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
  propSample: ISampleType = {
    valueString: '自作型String',
    valueNumber: 567
  }

  asyncData() {
    sample1()
  }
}
</script>
