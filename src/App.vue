<template>
  <div id="app">
    <router-view></router-view>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzFooter from './components/MzFooter/Index'
export default {
  components: {
    MzFooter
  }
}
</script>
