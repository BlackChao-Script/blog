import { request } from './request'

//! 获取轮播图数据接口
export function getCarouselList() {
  return request({
    url: 'home/carousel',
  })
}
//! 获取简介数据接口
export function getIntroductionList() {
  return request({
    url: 'home/introduction',
  })
}
//! 获取图标数据接口
export function getIconList() {
  return request({
    url: 'home/icon',
  })
}
//! 获取分类列表数据接口
export function getSortList() {
  return request({
    url: 'sort',
  })
}
