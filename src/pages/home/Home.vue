<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icon :iconList="iconList"></home-icon>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcon from './components/Icon'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'

  import axios from 'axios'
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcon,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted() {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    // 当使用keep-alive时，会触发这个钩子
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city=' + this.city).then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        })
      }
    }
  }

</script>