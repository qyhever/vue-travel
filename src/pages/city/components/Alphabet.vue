<template>
	<ul class="list">
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
	</ul>
</template>

<script>
	export default {
		name: 'CityAlphabet',
		data () {
			return {

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
			line-height: rem(44)
			text-align: center
			color: $bgColor
</style>