<template>
  <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getGpsCity');
  }
}
</script>
