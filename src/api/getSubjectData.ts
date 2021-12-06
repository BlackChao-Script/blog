import axios from 'axios'

export function getSubjectData() {
  return axios.get(
    'http://api.h-camel.com/api?mod=interview&ctr=issues&act=today'
  )
}
