<template lang="html">
  <div>
    这里是{{ name }}页
    1112
  </div>
</template>

<script>
  export default{
    data() {
      return {
        name: '行业动态'
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
