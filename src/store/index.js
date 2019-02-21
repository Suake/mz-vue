import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    curCityName: '深圳',
    cityData: []
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
    }
  },
  mutations: {
    chgCityName (state, payload) {
      state.curCityName = payload;
    },
    chaCityData (state, payload) {
      state.cityData = payload;
    }
  }
})

export default store;
