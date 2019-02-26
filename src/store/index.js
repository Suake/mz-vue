import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    curCityName: '',
    cityData: [],
    gpsCity: {},
    filmType: 'hot'
  },
  getters: {
    filterCityData (state) {
      let hash = {};
      let i = 0;
      let res = [];

      state.cityData.forEach(item => {
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();

        if (hash[firstLetter]) {
          let index = hash[firstLetter] - 1;
          res[index].list.push(item);
        } else {
          hash[firstLetter] = ++i;
          let obj = {};
          obj.py = firstLetter;
          obj.list = [item];
          res.push(obj);
        }
      })
      var temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      })
      return temp;
    },
    filterLetters (state, getters) {
      return getters.filterCityData.map(item => {
        return item.py;
      })
    },
    getHotCity (state) {
      var hotCity = [];
      state.cityData.forEach(item => {
        if (item.isHot) {
          hotCity.push(item);
        }
      })
      return hotCity;
    }
  },
  mutations: {
    chgCityName (state, payload) {
      state.curCityName = payload;
    },
    chaCityData (state, payload) {
      state.cityData = payload;
    },
    chgFilmType (state, payload) {
      state.filmType = payload;
    }
  },
  actions: {
    getCityData ({ commit, state, getters }) {
      axios.get('/json/cities.json').then(response => {
        let res = response.data;
        if (res.status === 0) {
          commit('chaCityData', res.data.cities);
        } else {
          alert(res.msg)
        }
      })
    },
    getGpsCity ({ commit, state }) {
      /* eslint-disable */
      var myCity = new BMap.LocalCity();
      myCity.get(res => {
        commit('chgCityName', res.name);
        state.gpsCity = res;
      })
      /* eslint-enable */
    }
  }
})

export default store;
