<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/Footerguide/Footerguide"
import {mapActions} from "vuex"

export default {
  name: 'App',
  components: { FooterGuide },
  mounted () {
    this.getAddress();
  },
  methods: {
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
