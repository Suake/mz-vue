<template>
  <div class="mz-city">
    <router-link tag="i" to="/films" class="iconfont icon-x"></router-link>
    <MzHeader :title="'当前城市-'+ curCityName">{{ filterCityData }}</MzHeader>
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div @click="changeCity(gpsCity)" class="city-item-text">{{ gpsCity.name }}</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail"
                v-for="item in getHotCity"
                :key="item.cityId"
              >
                <div class="city-item-text"
                  @click="changeCity(item)"
                >
                  {{ item.name }}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <li class="lv-indexsection"
          v-for="(item, index) in filterCityData"
          :key="index"
          :id="item.py"
        >
          <p class="lv-indexsection__index">{{ item.py }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :key="city.cityId"
              @click="changeCity(city)"
            >
            {{ city.name }}
            </li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li
            v-for="(item,index) in filterLetters"
            :key="index"
            @click="gotoLetter(item)"
          >
          {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MzHeader from '@/components/MzHeader/Index';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    MzHeader
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'cityData',
      'curCityName',
      'gpsCity'
    ]),
    ...mapGetters([
      'filterCityData',
      'filterLetters',
      'getHotCity'
    ])
  },
  methods: {
    ...mapMutations([
      'chgCityName',
      'chaCityData'
    ]),
    ...mapActions([
      'getCityData'
    ]),
    gotoLetter (py) {
      var t = document.getElementById(py).offsetTop;
      document.getElementById('lv-indexlist__content').scrollTop = t - 48;
    },
    changeCity (city) {
      this.chgCityName(city.name);
      this.$router.push('/films');
    }
  },
  created () {
    this.getCityData();
  }
};
</script>

<style lang="less">
@import url('./city.less');
</style>
