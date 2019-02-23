<template>
  <div>
    <MzHeader title="影院"></MzHeader>
    <router-link tag="div" class="city" to="/city">
      <span>{{ curCityName }}</span>
      <i class="iconfont icon-bottom"></i>
    </router-link>
    <div class="cinema-list-wrap">
      <ul class="cinema-list">
        <li class="cinema-list-item"
          v-for="item in cinemaData"
          :key="item._id"
        >
          <a
            href="#"
            class="cinema-item-wrap"
            data-enter-time="1550907161"
            data-click-fun="track_f_296710"
          >
            <div class="cinema-info-lf cinema-info">
              <span class="cinema-name">{{ item.cinemaName }}</span>
              <span class="cinema-address">{{ item.address }}</span>
            </div>
            <div class="cinema-info-rt cinema-info">
              <div class>
                <span class="cinema-lowPrice price-fmt">
                  <i>￥</i>
                  <span class="interge" style="font-size: 15px;">{{ item.price }}</span>
                  <span style="display: none;">.</span>
                  <span class="decimal" style="font-size: 10px;"></span>
                </span>
                <span class="upon">起</span>
              </div>
              <span class="cinema-gpsAddress">{{ item.gpsAddress }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MzHeader from '@/components/MzHeader/Index.vue';
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  components: {
    MzHeader
  },
  data () {
    return {
      cinemaData: []
    };
  },
  computed: {
    ...mapState(['curCityName'])
  },
  created () {
    axios
      .get('http://localhost:3000/cinema/search', {
        params: {
          pageSize: 10
        }
      })
      .then(response => {
        let res = response.data;
        if (res.code === 0) {
          this.cinemaData = res.data;
        } else {
          alert('网络异常，请稍候重试');
        }
      });
  }
};
</script>

<style lang="less">
@import url("./cinema.less");
</style>
