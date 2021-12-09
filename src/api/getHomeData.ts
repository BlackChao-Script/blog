import { request } from './request'

//! 获取轮播图数据接口
export const getCarouselList = () => {
  return request({
    url: 'home/carousel',
  })
}
//! 获取简介数据接口
export const getIntroductionList = () => {
  return request({
    url: 'home/introduction',
  })
}
//! 获取图标数据接口
export const getIconList = () => {
  return request({
    url: 'home/icon',
  })
}
//! 获取分类列表数据接口
export const getSortList = () => {
  return request({
    url: 'sort',
  })
}
