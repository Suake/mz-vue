<template>
  <div class="film-list-content">
    <div class="nowPlayingList-wrap">
      <ul class="nowPlayingList">
        <li class="nowPlayingFilm-item" v-for="film in filmList"
          :key="film.filmId"
        >
          <a href="#" class="nowPlayingFilm-wrap">
            <div
              class="lazy-img nowPlayingFilm-img"
              style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;"
            >
              <div
                class="lazy-img-wrap"
                style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;"
              >
                <img
                  :src="film.poster"
                  class="target-img"
                >
              </div>
            </div>
            <div class="nowPlayingFilm-info" style="float: left;">
              <div class="nowPlayingFilm-name info-col">
                <span class="name">{{ film.name }}</span>
                <span class="item">{{ film.filmType && film.filmType.name }}</span>
              </div>
              <div class="nowPlayingFilm-grade info-col" style="visibility: visible;">
                <span class="label">观众评分</span>
                <span class="grade">{{ film.grade }}</span>
              </div>
              <div class="nowPlayingFilm-actors info-col">
                <span class="label">主演：{{ film.actors ? film.actors.map(item => item.name).join(' ') : '暂无主演' }}</span>
              </div>
              <div class="nowPlayingFilm-detail info-col">
                <span class="label">{{ film.nation }} | {{ film.runtime }}分钟</span>
              </div>
            </div>
            <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
          </a>
        </li>
      </ul>
    </div>
    <button class="more" @click="loadMore" v-if="pageNum < totalPage">点击加载更多</button>
  </div>
</template>

<style lang="less">
@import url("./hot.less");
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
              type: 1,
              k: 5921705
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
