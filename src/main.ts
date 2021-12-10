import { createApp } from 'vue'
import App from './App.vue'
//! 引入router路由组件
import router from './router'
//! 引入vuex状态管理组件
import store from './store'
//! 引入初始化样式
import './style/base/base.scss'
//! 引入v-md-editor相关
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index'
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css'

//! 使用主题
VMdPreview.use(vuepressTheme, {
  Prism,
})
VMdPreview.use(createHighlightLinesPlugin())

const app = createApp(App)
app.use(VMdPreview)
app.use(router)
app.use(store)
app.mount('#app')
