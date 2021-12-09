import { request } from './request'

//! 获取关于我的数据
export const getAboutMeData = () => {
  return request({
    url: 'aboutMe',
  })
}
