import { request } from './request'

//! 获取文章数据接口
export const getMdList = () => {
  return request({
    url: 'md',
  })
}
//! 获取文章详细接口
export const getMdDetList = (md_id: any) => {
  return request({
    url: 'md/mdDet',
    params: {
      md_id,
    },
  })
}
