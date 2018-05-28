<template>
	<ul class="list">
		<li class="item"
			v-for="item in letters"
			:key="item"
			:ref="item"
			@click="handleLetterClick"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd">
			{{item}}
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'CityAlphabet',
		props: {
			cities: Object
		},
		data () {
			return {
				touchStatus: false
			}
		},
		computed: {
			letters() {
				const letters = []
				for (let k in this.cities) {
					letters.push(k)
				}
				return letters
				// ['A', 'B', 'C'...]
			}
		},
		methods: {
			handleLetterClick(e) {
				this.$emit('change', e.target.innerText)
			},
			handleTouchStart() {
				this.touchStatus = true
			},
			handleTouchMove(e) {
				if (this.touchStatus) {
					const startY = this.$refs['A'][0].offsetTop
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - startY) / 20)
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change', this.letters[index])
					}
				}
			},
			handleTouchEnd() {
				this.touchStatus = false
			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/variables.styl'
	@import '~@/assets/style/mixin.styl'
	
	.list
		position: absolute
		top: rem(158)
		right: 0
		bottom: 0
		width: rem(40)
		display: flex
		flex-direction: column
		justify-content: center
		.item
			line-height: rem(40)
			text-align: center
			color: $bgColor
</style>