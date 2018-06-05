import axios from 'axios'
import router from '@/router'
import store from '@/store'

axios.defaults.timeout = 5000
// axios.defaults.baseURL = '/api'

let count = 0

const showLoading = () => {
  count++
  store.commit('showLoading')
}

const hideLoading = () => {
  count--
  if (!count) {
    store.commit('hideLoading')
  }
}

axios.interceptors.request.use(config => {
  showLoading()
  return config
}, error => {
  showLoading()
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  hideLoading()
  return response
}, error => {
  hideLoading()
  return Promise.reject(error)
})

export default axios