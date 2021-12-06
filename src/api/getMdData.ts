import { request } from './request'

//! 获取文章数据接口
export function getMdList() {
  return request({
    url: 'md',
  })
}
//! 获取文章详细接口
export function getMdDetList(md_id: any) {
  return request({
    url: 'md/mdDet',
    params: {
      md_id,
    },
  })
}
