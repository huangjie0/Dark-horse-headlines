<template>
  <div>
    <div>
      <van-nav-bar>
        <template #left>
            <img class="logo" src="@/assets/tab_logo.png" alt="">
        </template>
        <template #right>
          <van-icon name="search" size="18" color="#fff"/>
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang='less' scoped>
.logo{
    width: 100px;
    height: 30px;
}
</style>
