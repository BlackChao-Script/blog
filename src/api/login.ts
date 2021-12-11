import { request } from './request'

//! 注册
export const register = (user_name: string, password: string) => {
  return request({
    method: 'post',
    url: 'user/register',
    data: {
      user_name,
      password,
    },
  })
}
//! 登录
export const login = (user_name: string, password: string) => {
  return request({
    method: 'post',
    url: 'user/login',
    data: {
      user_name,
      password,
    },
  })
}
//! 获取用户头像
export const getUserImg = (user_name: any) => {
  return request({
    url: 'user',
    params: {
      user_name,
    },
  })
}
