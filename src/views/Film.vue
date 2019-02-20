<template>
    <div>
        <MzBanner></MzBanner>
        <MzTabs></MzTabs>
        <ul>
          <li><router-link to="/detail/100">一条狗</router-link></li>
          <li><router-link to="/detail/200">密室逃生</router-link></li>
          <li><router-link to="/detail/300">家和万世惊</router-link></li>
        </ul>
        <button @click="goCity">City</button>
        <div style="height:2000px"></div>
    </div>
</template>

<script>
import MzBanner from '../components/MzBanner/Index';
import MzTabs from '../components/MzTabs/Index';

export default {
  components: {
    MzBanner,
    MzTabs
  },
  methods: {
    goCity () {
      // this.$router.push({
      //   // path: '/city',
      //   // query: {
      //   //   name: 'zhangsan'
      //   // }
      //   name: 'hhh',
      //   params: {
      //     id: 10
      //   }
      // });
      this.$router.replace('/city')
    }
  }
}
</script>
