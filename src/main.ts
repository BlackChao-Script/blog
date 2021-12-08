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
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import hljs from 'highlight.js'
import '@kangc/v-md-editor/lib/style/preview.css'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'

//! 使用主题
VMdPreview.use(githubTheme, {
  Hljs: hljs,
})
//! 显示代码行数
VMdPreview.use(createLineNumbertPlugin())
//! 快速复制代码
VMdPreview.use(createCopyCodePlugin())

const app = createApp(App)
app.use(VMdPreview)
app.use(router)
app.use(store)
app.mount('#app')
