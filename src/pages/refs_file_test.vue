<template>
  <div>
    <h1>vm.refs(file)サンプルページ</h1>
    <img :src="img" @click="click">
    <input ref="inputFile" type="file" id="file" class="file" @change="change">
    <p class="button">画像をクリックすると変更出来ます</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RefsFile extends Vue {
  img: string = require('~/assets/image/no_image.png')

  click() {
    const file: HTMLInputElement = this.$refs.inputFile as HTMLInputElement
    file.click()
  }

  change(event: Event) {
    const target: EventTarget = event.target as EventTarget
    const files: FileList = (target as HTMLInputElement).files as FileList
    const fileReader: FileReader = new FileReader()
    fileReader.onload = () => {
      this.img = String(fileReader.result)
    }
    fileReader.readAsDataURL((files)[0])
  }
}
</script>

<style lang="stylus">
.file {
  display: none;
}

img {
  width: 300px;
  cursor: pointer;
}
</style>
