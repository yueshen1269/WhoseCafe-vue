<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/Footerguide/Footerguide"

export default {
  name: 'App',
  components: { FooterGuide }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
