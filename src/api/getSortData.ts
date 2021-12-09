import { request } from './request'

export const getSortDetData = (sort_id: any) => {
  return request({
    url: 'sort/sortDet',
    params: {
      sort_id,
    },
  })
}
