<template>
  <div>
    <van-nav-bar title="黑马头条-登录" />
    <div>
      <van-form @submit="onSubmit">
        <van-field
          required
          v-model="user.mobile"
          name="mobile"
          label="手机号"
          placeholder="请输入11位手机号"
          :rules="[{ required: true, message: '请填写正确手机号',pattern:/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/}]"
        />
        <van-field
          required
          v-model="user.code"
          type="password"
          name="codee"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请输入正确6位密码',pattern:/^\d{6}$/ }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
          :loading="isloading" loading-text="正在登录中..." :disabled="isloading"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api/index'
import { Notify } from 'vant'
import { setToken } from '@/utils/token'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13888888888', // 手机号
        code: '246810' // 密码246810
      },
      isloading: false
    }
  },
  methods: {
    // 提交按钮
    async onSubmit (values) {
      this.isloading = true
      // 捕获异常
      try {
        const res = await loginAPI(this.user)
        console.log(res)
        // 设置token值
        const token = res.data.data.token
        setToken(token)
        Notify({ type: 'success', message: '登录成功了！！！' })
        // 跳转路由页面
        this.$router.replace('/layout')
      } catch (error) {
        // 弹框提示
        Notify({ type: 'danger', message: '账号或密码错误' })
      }
      // 把状态关掉
      this.isloading = false
    }
  }
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  background-color: #007bff;
}

/deep/ .van-nav-bar__title {
  color: white;
}
</style>
