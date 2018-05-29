<template>
	<transition name="fade">
		<slot></slot>
	</transition>
</template>

<script>
	export default {
		data () {
			return {

			}
		}
	}
</script>

<style scoped lang="stylus">
	.fade-enter, .fade-leave-to
		opacity: 0
	.fade-enter-active, .fade-leave-active
		transition: opacity .5s
</style>