<template>
  <div>

  </div>
</template>

<script>
import { getAllChannelsAPI } from '@/api/index'
// try catch来来捕获同步代码的错误
export default {
  async created () {
    try {
      const res = await getAllChannelsAPI()
      console.log(res)
    } catch (error) {
      // err参数拿到就是错误对象
      // 详细打印
      console.dir(error)
    }
  }
}
</script>
<style>

</style>
