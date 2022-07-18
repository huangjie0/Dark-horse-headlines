// 基于axios封装网络请求
import theAxios from 'axios'
const axios = theAxios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 2000 // 20秒超时时间
})

// 默认暴露处理axios方法
export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
