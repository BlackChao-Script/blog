import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: '/home' },
  { path: '/home', component: () => import('../view/home/index.vue') },
  { path: '/lists', component: () => import('../view/Lists/index.vue') },
  { path: '/aboutMe', component: () => import('../view/aboutMe/index.vue') },
  { path: '/resource', component: () => import('../view/resource/index.vue') },
  {
    path: '/LeaveWord',
    component: () => import('../view/LeaveWord/index.vue'),
  },
  {
    path: '/ListsDet/:md_id',
    component: () => import('../view/ListsDet/index.vue'),
  },
]

// 工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  next()
})

export default router
