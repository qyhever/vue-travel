<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list
			:cities="cities"
			:hot="hotCities"
			:letter="letter">
		</city-list>

		<city-alphabet
			:cities="cities"
			@change="handleLetterChange">
		</city-alphabet>

		<div class="center" v-show="centerAlphabet">{{letter}}</div>
	</div>
</template>

<script>
	import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import CityAlphabet from './components/Alphabet'
	import axios from '@/utils/axios'
	export default {
		name: 'City',
		components: {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data () {
			return {
				cities: {},
				hotCities: [],
				letter: '',
				centerAlphabet: false
			}
		},
		watch: {
			letter(val) {
				this.centerAlphabet = true
				setTimeout(() => {
					this.centerAlphabet = false
				}, 1000)
			}
		},
		mounted() {
			this.getCityInfo()
		},
		methods: {
			getCityInfo() {
				axios.get('/mock/city.json').then(res => {
					res = res.data
					if (res.ret && res.data) {
						const data = res.data
						this.cities = data.cities
						this.hotCities = data.hotCities
					}
				})
			},
			handleLetterChange(letter) {
				this.letter = letter
			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/mixin.styl'
	.center
		z-index: 9
		position: fixed
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		width: rem(100)
		height: rem(100)
		background-color: rgba(0, 0, 0, .3)
		border-radius: 6px
		line-height: rem(100)
		text-align: center
		color: #fff
		font-size: 16px
</style>