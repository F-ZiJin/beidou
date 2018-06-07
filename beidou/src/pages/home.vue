<template lang="html">
  <div>
    这里是{{ name }}页
  </div>
</template>

<script>
  export default{
    data() {
      return {
        name: '首页'
      }
    }
  }
</script>

<style lang="scss" scoped>
  html,body{
    div{
      color: white;
    }
  }
</style>
