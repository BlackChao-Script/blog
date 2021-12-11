import { request } from './request'

//! 发送评论
export const sendLeaveWord = (
  leaveWord_name: any,
  leaveWord_text: any,
  leaveWord_img: any
) => {
  return request({
    method: 'post',
    url: 'leaveWord',
    data: {
      leaveWord_name,
      leaveWord_text,
      leaveWord_img,
    },
  })
}
//! 获取评论列表
export const getLeaveWordData = () => {
  return request({
    url: 'leaveWord',
  })
}
