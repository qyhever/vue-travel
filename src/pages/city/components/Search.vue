<template>
	<div>
		<div class="search">
			<input type="text" v-model.trim="keyword" class="search-input" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom"
					v-for="item in list"
					:key="item.id"
					@click="handleCityClick(item.name)">
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'CitySearch',
		props: {
			cities: Object
		},
		data () {
			return {
				keyword: '',
				list: []
			}
		},
		watch: {
			keyword() {
				if (!this.keyword) {
					this.list = []
					return
				}
				const result = []
				for (let k in this.cities) {
					this.cities[k].forEach(item => {
						if (item.spell.includes(this.keyword) || 
							item.name.includes(this.keyword)) {
							result.push(item)
						}
					})
				}
				this.list = result
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.search)
		},
		methods: {
			handleCityClick(city) {
				this.$store.commit('changeCity', city)
				this.$router.push('/')
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
	
	.search-content
		z-index: 1
		overflow: hidden
		position: absolute
		top: rem(158)
		left: 0
		right: 0
		bottom: 0
		background-color: #eee
		.search-item
			padding-left: rem(20)
			background-color: #fff
			line-height: rem(62)
			color: #666
</style>