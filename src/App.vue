<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
    	<keep-alive exclude="Detail">
    		<router-view/>
    	</keep-alive>
    <!-- </transition> -->
    <div class="loading-container" v-show="loadingState">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import Loading from './common/loading/loading'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Loading
  },
  data() {
  	return {
  		transitionName: 'slide-left'
  	}
  },
  computed: {
    ...mapState(['loadingState'])
  }
  // watch: {
  //   '$route' (to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // }
}
</script>

<style scoped lang="stylus">
	// .slide-left-enter, .slide-right-leave-active
	// 	transform: translate(100%, 0)
	// 	transition: all 0.4s ease-in-out
	// .slide-left-leave-active, .slide-right-enter
	// 	transform: translate(-100%, 0)
	// 	transition: all 0.4s ease-in-out
 
  .loading-container {
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: transparent
  }
    
</style>