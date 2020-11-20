import Vue from 'vue'
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
})

export default new Vuex.Store({
  state: {
    form: {
      email: '',
      phone: '',
      address: '',
      dropshipperName: '',
      dropshipperPhone: '',
      isDropship: false,
    },
    summary: {
      cost: 500000,
      fee: 0,
      total: 0
    },
    payment: null,
    shipment: null,
  },
  plugins: [vuexLocalStorage.plugin],
  mutations: {
    setTotal (state, payload) {
      state.summary.total = payload
    },
    setPayment (state, payload) {
      state.payment = payload
    },
    setShipment (state, payload) {
      state.shipment = payload
      state.summary.total += state.shipment.price
    },
    setForm (state, payload) {
      state.form = payload
      if (state.form.isDropship) {
        state.summary.fee = 5900
      } else {
        state.summary.fee = 0
      }
      state.summary.total = state.summary.cost + state.summary.fee
    },
  },
  actions: {
    getTotal ({ commit }) {
      let total = this.state.summary.cost
      if (this.state.form.isDropship) {
        total += this.state.summary.fee
      }
      commit('setTotal', total)
    },
  },
  getters: {

  },
  created() {
  },
})
