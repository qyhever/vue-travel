<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
    	<keep-alive exclude="Detail">
    		<router-view/>
    	</keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
  	return {
  		transitionName: 'slide-left'
  	}
  },
  // watch: {
  //   '$route' (to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // }
}
</script>

<!-- <style scoped lang="stylus">
	.slide-left-enter, .slide-right-leave-active
		transform: translate(100%, 0)
		transition: all 0.4s ease-in-out
	.slide-left-leave-active, .slide-right-enter
		transform: translate(-100%, 0)
		transition: all 0.4s ease-in-out
</style> -->