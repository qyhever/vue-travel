<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="swiperList.length">
	    <!-- slides -->
	    <swiper-slide v-for="item in swiperList" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" alt="">
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
  </div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		props: {
			swiperList: Array
		},
		data () {
			return {
				swiperOption: {
					pagination: {
            el: '.swiper-pagination'
          },
          loop : true,
          autoplay: true
				}
			}
		},
		methods: {
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 32%
		.swiper-img
			width: 100%
			
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
</style>