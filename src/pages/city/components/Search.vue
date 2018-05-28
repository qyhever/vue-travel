<template>
	<div class="search">
		<input type="text" class="search-input" placeholder="输入城市名或拼音">
	</div>
</template>

<script>
	export default {
		name: 'CitySearch',
		data () {
			return {

			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/variables.styl'
	@import '~@/assets/style/mixin.styl'
	
	.search
		height: rem(72)
		padding: 0 rem(10)
		background-color: $bgColor
		.search-input
			box-sizing: border-box
			width: 100%
			height: rem(62)
			padding: 0 rem(10)
			line-height: rem(62)
			text-align: center
			border-radius: 4px
</style>