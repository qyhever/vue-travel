<template>
  <div class="loading">
    <div class="rotate"></div>
    <p class="desc">{{loadingText}}</p>
  </div>
</template>
<script>
  export default {
    props: {
      loadingText: {
        type: String,
        default: '载入中...'
      }
    }
  }
</script>
<style scoped lang="stylus">

  .loading
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 76px
    height: 76px
    border-radius: 6px
    background: rgba(0, 0, 0, .4)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
      
  .loading
    .rotate
      height: 25px
      width: 25px
      border: 2px solid #eee
      border-radius: 50%
      border-bottom-color: transparent
      /*animation-fill-mode: both*/
      animation: rotate .8s 0s linear infinite
    .desc
      line-height: 24px
      color: #ccc
  

  @keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
</style>