import { createApp } from 'vue'
import App from './App.vue'
//! 引入router路由组件
import router from './router'
//! 引入vuex状态管理组件
import store from './store'
//! 引入初始化样式
import './style/base/base.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
