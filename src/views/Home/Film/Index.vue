<template>
    <div>
        <button class="city-fixed" @click="goCity">
          <span>{{ curCityName }}</span>
          <i class="iconfont icon-bottom"></i>
        </button>
        <MzBanner></MzBanner>
        <MzTabs></MzTabs>
        <ul>
          <li><router-link to="/detail/100">一条狗</router-link></li>
          <li><router-link to="/detail/200">密室逃生</router-link></li>
          <li><router-link to="/detail/300">家和万世惊</router-link></li>
        </ul>
        <div style="height:2000px"></div>
    </div>
</template>

<script>
import MzBanner from '@/components/MzBanner/Index';
import MzTabs from '@/components/MzTabs/Index';

export default {
  components: {
    MzBanner,
    MzTabs
  },
  computed: {
    curCityName () {
      return this.$store.state.curCityName;
    }
  },
  methods: {
    goCity () {
      this.$router.push({
        // path: '/city',
        // query: {
        //   name: 'zhangsan'
        // }
        name: 'hhh',
        params: {
          id: 10
        }
      });
      // this.$router.replace('/city')
    }
  }
}
</script>

<style lang="less">
  .city-fixed{
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    border: 0;
    text-align: center;
    padding: 0 5px;
    .icon-bottom{
      margin-left: 4px;
      font-size: 8px;
    }
  }
</style>
