<template>
	<div class="container" @click="handleGalleryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
				<swiper-slide>
					<img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1607/fa/fa21fe6657005e88b4.water.jpg_350x240_a70b8cad.jpg" alt="">
				</swiper-slide>
				<swiper-slide>
					<img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1412/d5/4252aaf31a6a659c4014fd97e35edc73.water.jpg_350x240_92f372e1.jpg" alt="">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CommonGallery',
		data () {
			return {
				swiperOptions: {
					pagination: {
				    el: '.swiper-pagination',
				    type: 'fraction'
				  },
				  observer: true,
				  observeParents: true
				}
			}
		},
		methods: {
			handleGalleryClick() {
				this.$emit('close')
			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/mixin.styl'
	@import '~@/assets/style/variables.styl'
	
	.container >>> .swiper-container
		overflow: unset
	
	.container
		display: flex
		flex-direction: column
		justify-content: center
		z-index: 99
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0
		background-color: #000
		.wrapper
			width: 100%
			height: 0
			padding-bottom: 100%
			// .gallery-img
			// 	width: 100%
			.swiper-pagination
				bottom: rem(-100)
				color: #fff
</style>