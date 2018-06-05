import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	city: localStorage.getItem('city') || '武汉',
	loadingState: false
}

const getters = {
	
}

const mutations = {
	changeCity(state, city) {
		state.city = city
		localStorage.setItem('city', city)
	},
	showLoading(state) {
		state.loadingState = true
	},
	hideLoading(state) {
		state.loadingState = false
	},
}

const actions = {
	
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})