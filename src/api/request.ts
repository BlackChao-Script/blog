import axios from 'axios'

export function request(config: any) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5 * 1000,
  })
  //请求拦截
  instance.interceptors.request.use(
    (config) => {
      //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
      config.data = JSON.stringify(config.data) //数据转化,也可以使用qs转换
      config.headers = {
        'Content-Type': 'application/json;charSet=UTF-8', //配置请求头
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  //响应拦截
  instance.interceptors.response.use(
    (response) => {
      if (response.status !== 200) {
        console.log('请求信息', response)
        return Promise.reject(new Error('Error'))
      } else {
        return response
      }
    },
    (error) => {
      console.log(`err${error}`)
      return Promise.reject(error)
    }
  )
  return instance(config)
}
