<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="header-back">
				<i class="iconfont icon-fanhui"></i>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'CityHeader',
		data () {
			return {

			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/variables.styl'
	@import '~@/assets/style/mixin.styl'
	.header
		position: relative
		height: rem($headerHeight)
		background-color: $bgColor
		line-height: rem($headerHeight)
		text-align: center
		overflow: hidden
		color: #fff
		.header-back
			position: absolute
			top: 0
			left: 0
			width: rem(64)
			text-align: center
			color: #fff
</style>