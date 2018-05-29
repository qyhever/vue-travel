<template>
	<div>
		<router-link class="header-abs"
			to="/"
			tag="div"
			v-show="showAbs">
			<i class="iconfont icon-fanhui"></i>
		</router-link>
		<div class="header-fixed" v-show="!showAbs" :style="styleObject">
			景点详情
			<router-link to="/">
				<div class="header-fixed-back">
					<i class="iconfont icon-fanhui"></i>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailHeader',
		data () {
			return {
				showAbs: true,
				styleObject: {
					opacity: 0
				}
			}
		},
		activated() {
			window.addEventListener('scroll', this.handleScroll)
		},
		deactivated() {
			window.removeEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll() {
				const top = document.documentElement.scrollTop
				if (top > 60) {
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity
					this.styleObject = { opacity }
					this.showAbs = false
				} else {
					this.showAbs = true
				}
			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/mixin.styl'
	@import '~@/assets/style/variables.styl'
	
	.header-abs
		position: absolute
		top: rem(20)
		left: rem(20)
		width: rem(80)
		height: rem(80)
		border-radius: 50%
		background-color: rgba(0, 0, 0, .8)
		line-height: rem(80)
		text-align: center
		.icon-fanhui
			color: #fff
			
	.header-fixed
		z-index: 2
		position: fixed
		top: 0
		left: 0
		right: 0
		height: rem($headerHeight)
		background-color: $bgColor
		line-height: rem($headerHeight)
		text-align: center
		color: #fff
		.header-fixed-back
			position: absolute
			top: 0
			left: 0
			width: rem(64)
			text-align: center
			color: #fff
</style>