<template>
	<div>
		<div class="recommend-title">周末去哪儿</div>
		<ul class="recommend-list">
			<li class="item border-bottom" v-for="item in weekendList" :key="item.id">
				<div class="img-wrapper">
					<img :src="item.imgUrl" alt="" class="img">
				</div>
				<div class="info">
					<p class="title">{{item.title}}</p>
					<p class="desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeWeekend',
		props: {
			weekendList: Array
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/mixin.styl'
	.recommend-title
		line-height: rem(80)
		background-color: #eee
		text-indent: rem(20)
		
	.img-wrapper
		height: 0
		padding-bottom: 37.1%
		overflow: hidden
		.img
			width: 100%
	.info
		flex: 1
		padding: rem(10)
		min-width: 0 // 省略号兼容技巧
		.title
			line-height: rem(54)
			ellipsis()
		.desc
			line-height: rem(40)
			color: #ccc
			ellipsis()
</style>