<template>
  <div>
    <!-- <order></order> -->
    <mains></mains>
    <router-view></router-view>
    <!-- <container /> -->
    <footers></footers>
    <!-- <parts></parts> -->
  </div>

</template>

<script>
  // import order from './components/order'
  import parts from './components/container/parts'
  import mains from './components/mains'
  import container from './components/container/container'
  import footers from "./components/footers";


  export default {
    name: 'App',
    components: {
      mains, container,footers,parts
    }
  }


</script>

<style>
  @import url('./assets/css/style-1.css');
  @import url('./assets/css/style-2.css');
</style>