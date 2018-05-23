<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiper">
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
		data () {
			return {
				swiperList: [
					{
						id: '01',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/dd/466fb314a22bd702.jpg_750x200_25ea4968.jpg'
					},
					{
						id: '02',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/f2/91b285a08ee21c02.jpg_750x200_8a73fd08.jpg'
					},
					{
						id: '03',
						imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/3e/4d6e12949f74fc02.jpg_750x200_22aba1bb.jpg'
					}
				],
				swiperOption: {
					pagination: {
            el: '.swiper-pagination'
          },
          loop : true,
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
		padding-bottom: 26.7%
		.swiper-img
			width: 100%
			
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
</style>