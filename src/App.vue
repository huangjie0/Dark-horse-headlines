<template>
  <div>

  </div>
</template>

<script>
import { getAllChannelsAPI } from '@/api/index'
export default {
  async created () {
    const res = await getAllChannelsAPI()
    console.log(res)
  }
}
</script>

<style>

</style>
