<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <p>test</p>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper },
  data() {
    return {

    };
  }
}

</script>