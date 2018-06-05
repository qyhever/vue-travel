<template>
	<div>
		<detail-banner
			:sightName="sightName"
			:bannerImg="bannerImg"
			:bannerImgs="galleryImgs">
		</detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	import axios from '@/utils/axios'
	export default {
		name: 'Detail',
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data () {
			return {
				sightName: '',
				bannerImg: '',
				galleryImgs: [],
				list: []
			}
		},
		mounted() {
			this.getDetailInfo()
		},
		methods: {
			getDetailInfo() {
				const id = this.$route.params.id
				axios.get(`/api/detail.json?id=${id}`).then(res => {
					res = res.data
					if (res.ret && res.data) {
						const data = res.data
						this.sightName = data.sightName
						this.bannerImg = data.bannerImg
						this.galleryImgs = data.galleryImgs
						this.list = data.categoryList
					}
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		height: 900px;
	}
</style>