<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_600x330_25e27e6d.jpg" alt="">
			<div class="banner-info">
				<p class="banner-title">武汉海昌极地海洋世界</p>
				<p class="banner-number">
					<i class="iconfont icon-tupian"></i>
					39
				</p>
			</div>
		</div>
		<common-gallery v-show="showGallery" @close="handleBalleryClose"></common-gallery>
	</div>
</template>

<script>
	import CommonGallery from '@/common/gallery/Gallery'
	export default {
		name: 'DetailBanner',
		components: {
			CommonGallery
		},
		data () {
			return {
				showGallery: false
			}
		},
		methods: {
			handleBannerClick() {
				this.showGallery = true
			},
			handleBalleryClose() {
				this.showGallery = false
			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/mixin.styl'
	@import '~@/assets/style/variables.styl'
	
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
			
	.banner-info
		display: flex
		align-items: center
		position: absolute
		left: 0
		right: 0
		bottom: 0
		background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
		line-height: rem(60)
		color: #fff
		.banner-title
			flex: 1
			padding: 0 rem(20)
			font-size: 16px
		.banner-number
			height: rem(40)
			padding: 0 rem(40)
			line-height: rem(40)
			border-radius: rem(20)
			background-color: rgba(0, 0, 0, .7)
</style>