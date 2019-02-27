<template>
  <div>
    <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown" mode="out-in">
      <router-view></router-view>
    </transition>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzFooter from '@/components/MzFooter/Index'

export default {
  components: {
    MzFooter
  }
}
</script>
