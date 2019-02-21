<template>
  <div class="mz-city">
    <MzHeader title="当前城市-">{{ filterCityData }}</MzHeader>
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail">
                <div class="city-item-text">上海</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">天津</div>
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
              >
              {{ city.name }}
            </li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li
            v-for="(item, index) in filterLetters"
            :key="index"
            @click="hh(item)"
            >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MzHeader from '../../components/MzHeader/Index';

export default {
  components: {
    MzHeader
  }
};
</script>

<style lang="less">
@import url("./city.less");
</style>
