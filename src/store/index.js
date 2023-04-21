import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    portfolioData: null
  },
  mutations: {
    setPortfolioData(state, data){
      state.portfolioData = data
    }
  },
  actions: {
    async fetchPortfolioData(context){
      let res = await axios('https://lazola2.github.io/portfolioapi/data.json');
      context.commit('setPortfolioData', res.data);
    }
  },
})
