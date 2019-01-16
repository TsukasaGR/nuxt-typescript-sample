<template>
  <div class="loading-page" v-if="loading">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Sample extends Vue {
  loading: boolean = false

  start(): void {
    this.loading = true
  }

  finish(): void {
    this.loading = false
  }
}
</script>

<style lang="stylus">
.loading-page {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(144, 232, 133, 0.8);

  .spinner {
    margin: 100px auto 0;
    width: 70px;
    height: 100px;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;

    > div {
      width: 18px;
      height: 18px;
      background-color: #fff;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    .bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }

    .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
