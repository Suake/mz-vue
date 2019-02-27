<template>
  <div class="swiper-container mz-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for="item in bannerList"
        :key="item._id">
          <img :src="item.imgUrl" />
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      bannerList: []
    }
  },
  methods: {
    initSwiper () {
      /* eslint-disable */
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay:true
      });
      /* eslint-enable */
    }
  },
  created () {
    axios.get('http://132.232.204.232:3000/banner/search', {
      params: {
        pageSize: 10
      }
    })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.code === 0) {
          this.bannerList = res.data.data;
          this.$nextTick(() => {
            this.initSwiper();
          })
        } else {
          alert('网络异常，请稍候重试');
        }
      })
  },
  mounted () {
  }
};
</script>

<style lang="less">
.mz-banner {
  height: 210px;
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullets{
    text-align: right;
    .swiper-pagination-bullet{
      width: 5px;
      height: 5px;
      background: #fff;
    }
  }
}
</style>
