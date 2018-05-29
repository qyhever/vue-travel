<template>
	<div>
		<div class="item"
			v-for="(item, index) in list"
			:key="index">
			<div class="item-title border-bottom">
				<span class="item-title-icon"></span>
				{{item.title}}
			</div>
			<div v-if="item.children" class="item-children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailList',
		props: {
			list: Array
		},
		data () {
			return {

			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/mixin.styl'
	@import '~@/assets/style/variables.styl'
	
	.item-title
		line-height: rem(80)
		padding: 0 rem(20)
		
	.item-title-icon
		position: relative
		top: rem(6)
		left: rem(6)
		display: inline-block
		width: rem(36)
		height: rem(36)
		background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
		margin-right: rem(10)
		background-size: rem(40) rem(300)
		
	.item-children
		padding: 0 rem(20)
</style>