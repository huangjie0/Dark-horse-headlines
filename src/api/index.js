// 统一封装接口方法
import axios from '@/utils/request'

// 频道 - 获取所有频道
export const getAllChannelsAPI = () => axios({
  url: '/v1_0/channels',
  method: 'GET'
})
