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
	import { mapState } from 'vuex'
	import AMap from 'AMap'
	export default {
		name: 'HomeHeader',
		data () {
			return {

			}
		},
		computed: {
			...mapState(['city'])
		},
		created() {
			
		},
		mounted() {
			this.getLocalCity()
		},
		methods: {
			getLocalCity() {
				const map = new AMap.Map('iCenter')
				map.plugin('AMap.Geolocation', () => {
					const geolocation = new AMap.Geolocation({
						timeout: 10000  // 超过10秒后停止定位，默认：无穷大
					})
					geolocation.getCurrentPosition()
					AMap.event.addListener(geolocation, 'complete', data => {
						this.$store.commit('changeCity', data.addressComponent.city.slice(0, -1))
					})
					AMap.event.addListener(geolocation, 'error', e => {
						alert('定位失败')
					})
				})
			}
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
			min-width: rem(104)
			padding: 0 rem(10)
			text-align: center
			color: #fff
</style>