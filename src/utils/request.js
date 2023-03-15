// 封装axios
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 这里要进行对token的判断
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 相应拦截
service.interceptors.response.use(
  function (response) {
    // 对相应成功的接口进行处理
    const res = response.data
    if (res.code !== 200) {
      console.log('接口成功，但是状态码不符合预期的处理')
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  function (error) {
    // 对报错进行处理， 弹出一个提示框
    alert('接口报错' + error)
    return Promise.reject(error)
  }
)

export default service
