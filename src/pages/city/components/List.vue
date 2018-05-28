<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="btn-list">
					<div class="btn-wrapper">
						<div class="btn">{{this.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="btn-list">
					<div class="btn-wrapper"
						v-for="item in hot"
						:key="item.id"
						@click="handleCityClick(item.name)">
						<div class="btn">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area"
				v-for="(item, key) in cities"
				:key="key"
				:ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom"
						v-for="innerItem in item"
						:key="item.id"
						@click="handleCityClick(innerItem.name)">
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState } from 'vuex'
	export default {
		name: 'CityList',
		props: {
			cities: Object,
			hot: Array,
			letter: String
		},
		data () {
			return {

			}
		},
		computed: {
			...mapState(['city'])
		},
		watch: {
			letter() {
				if (this.letter) {
					const element = this.$refs[this.letter] // 获取到的是数组
					this.scroll.scrollToElement(element[0])
				}
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper)
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
	
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
			
	.border-bottom
		&:before
			border-color: #ccc
			
	.list
		position: absolute
		top: rem(158)
		left: 0
		right: 0
		bottom: 0
		overflow: hidden
	
	.title
		line-height: rem(54)
		background-color: #eee
		padding-left: rem(20)
		
	.btn-list
		padding: rem(10) rem(60) rem(10) rem(10)
		overflow: hidden
		.btn-wrapper
			float: left
			width: 33.33%
			.btn
				margin: rem(10)
				padding: rem(10) 0
				text-align: center
				border: 1px solid #ccc
				border-radius: 3px
				
	.item-list
		.item
			padding-left: rem(20)
			line-height: rem(76)
</style>