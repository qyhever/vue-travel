<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul class="recommend-list">
			<router-link class="item border-bottom"
				v-for="item in recommendList"
				:key="item.id"
				tag="li"
				:to="'/detail/' + item.id">
				<img :src="item.imgUrl" alt="" class="img">
				<div class="info">
					<p class="title">{{item.title}}</p>
					<p class="desc">{{item.desc}}</p>
					<button class="btn">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		props: {
			recommendList: Array
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/mixin.styl'
	.recommend-title
		margin-top: rem(20)
		line-height: rem(80)
		background-color: #eee
		text-indent: rem(20)
		
	.item
		display: flex
		height: rem(190)
		overflow: hidden
		.img
			width: rem(170)
			height: rem(170)
			padding: rem(10)
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
			.btn
				margin-top: rem(20)
				padding: 0 rem(10)
				background-color: #ff9300
				border-radius: 4px
				color: #fff
</style>