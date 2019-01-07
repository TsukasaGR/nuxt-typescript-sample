declare module '*.vue' {
  import Vue from 'vue'
  import VueRouter, { Route } from 'vue-router' // ↓のexportでは利用していないが、nuxt-property-decoratorで利用しているのでここで定義しておく

  export default Vue
}
