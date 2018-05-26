<template>
	<div class="header">
		<div class="header-left">
			<i class="iconfont icon-fanhui"></i>
		</div>
		<div class="header-input">
			<i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}
				<i class="iconfont icon-xiajiantou"></i>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'HomeHeader',
		props: {
			city: String
		},
		data () {
			return {

			}
		},
		created() {
			console.log(this.city)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/style/mixin.styl'
	@import '~@/assets/style/variables.styl'
	.header
		display: flex
		align-items: center
		height: rem($headerHeight)
		background-color: $bgColor
		color: #fff
		.header-left
			width: rem(64)
			text-align: center
		.header-input
			flex: 1
			height: rem(64)
			line-height: rem(64)
			border-radius: 4px
			background-color: #fff
			color: #ccc
			text-indent: 1em
		.header-right
			width: rem(124)
			text-align: center
			color: #fff
</style>