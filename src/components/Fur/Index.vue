<template>
  <div class="film-list-content">
    <div class="comingSoon-wrap">
      <ul class="comingSoon-wrap">
        <li class="comingSoonFilm-item" v-for="film in filmList"
          :key="film.filmId"
        >
          <a href="#" class="comingSoonFilm-wrap">
            <div class="lazy-img comingSoonFilm-img" style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;">
              <div data-v-fa55ebd6="" class="lazy-img-wrap" style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;">
                <img data-v-fa55ebd6="" :src="film.poster" class="target-img">
              </div>
            </div>
            <div class="comingSoonFilm-info" style="float: left;">
              <div class="comingSoonFilm-name info-col"><span class="name">{{ film.name }}</span><span class="item">{{ film.filmType && film.filmType.name }}</span></div>
              <div class="comingSoonFilm-grade info-col"> &nbsp; </div>
              <div class="comingSoonFilm-actors info-col"><span class="label">主演：{{ film.actors ? film.actors.map(item => item.name).join(' ') : '暂无主演' }} </span></div>
              <div class="comingSoonFilm-detail info-col"><span class="label">上映日期：2019年3月 待定</span></div>
            </div>
            <div class="comingSoonFilm-buy" style="float: right;">预购</div>
          </a>
        </li>
      </ul>
    </div>
    <button class="more" @click="loadMore" v-if="pageNum < totalPage">点击加载更多</button>
  </div>
</template>

<style lang="less">
  @import url('./fur.less');
</style>
<script>
import axios from 'axios';

export default {
  data () {
    return {
      filmList: [],
      pageNum: 1,
      pageSize: 10,
      total: 0
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  methods: {
    getFilmData () {
      axios
        .get(
          '/api/gateway', {
            params: {
              cityId: 440300,
              pageNum: this.pageNum,
              pageSize: this.pageSize,
              type: 2,
              k: 4294655
            },
            headers: {
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154813797054176717472895"}',
              'X-Host': 'mall.film-ticket.film.list'
            }
          })
        .then(response => {
          let res = response.data;
          if (res.status === 0) {
            this.filmList = this.filmList.concat(res.data.films);
            this.total = res.data.total;
          } else {
            alert(res.msg);
          }
        });
    },
    loadMore () {
      this.pageNum++;
      this.getFilmData();
    }
  },
  created () {
    this.getFilmData();
  }
};
</script>
