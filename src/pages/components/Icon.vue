<template>
	<div class="icon-wrapper">
		
		<ul class="icon-list">
			<swiper>
				<swiper-slide v-for="(page, index) in pages" :key="index">
					<li class="icon-item" v-for="item in page">
						<div class="icon-img-wrapper">
							<img class="icon-img" :src="item.imgUrl" alt="">
						</div>
						<p class="icon-desc">{{item.desc}}</p>
					</li>
				</swiper-slide>
			</swiper>
		</ul>
		
	</div>
</template>

<script>
	let desc = '热门景点'
	let imgUrl = 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
	let iconList = []
	for (let i = 0; i < 9; i++) {
		iconList.push({id: i, imgUrl, desc})
	}
	export default {
		name: 'HomeIcon',
		data () {
			return {
				iconList: iconList
			}
		},
		computed: {
			pages() {
				const pages = []
				this.iconList.forEach((item, index) => {
					const page = Math.floor(index / 8) // 0,0,0...,1
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		},
		created() {
			
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/style/mixin.styl'
	.icon-list >>> .swiper-container
		height: 0
		padding-bottom: 50%
.icon-list
	// height: 0
	// padding-bottom: 50%
	// overflow: hidden
	margin-top: rem(10)
	.icon-item
		position: relative
		float: left
		width: 25%
		height: 0
		padding-bottom: 25%
		text-align: center
		.icon-img-wrapper
			box-sizing: border-box
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: rem(44)
			padding: rem(10)
			.icon-img
				height: 100%
		.icon-desc
			position: absolute
			left: 0
			bottom: 0
			width: 100%
			height: rem(44)
			line-height: rem(44)
</style>