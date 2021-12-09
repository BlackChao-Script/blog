import axios from 'axios'

export const getSubjectData = () => {
  return axios.get(
    'http://api.h-camel.com/api?mod=interview&ctr=issues&act=today'
  )
}
