import { createStore } from 'vuex'

export default createStore({
  state: {
    // 资源公共路径
    ImgBaseUrl: 'http://101.43.95.179:8889/uploads/',
    // 是否展示登录表
    showLogin: false,
    // 用户名
    userName: '',
    // 用户头像
    userImg: '',
  },
  mutations: {},
  actions: {},
  modules: {},
})
