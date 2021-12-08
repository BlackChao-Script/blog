import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: '/home' },
  {
    path: '/home',
    component: () => import('../view/home/index.vue'),
    meta: {
      index: 0,
    },
  },
  {
    path: '/lists',
    component: () => import('../view/lists/index.vue'),
    meta: {
      index: 1,
    },
  },
  {
    path: '/aboutMe',
    component: () => import('../view/aboutMe/index.vue'),
    meta: {
      index: 2,
    },
  },
  {
    path: '/sort',
    component: () => import('../view/sort/index.vue'),
    meta: {
      index: 3,
    },
  },
  {
    path: '/leaveWord',
    component: () => import('../view/leaveWord/index.vue'),
    meta: {
      index: 4,
    },
  },
  {
    path: '/listsDet/:md_id',
    component: () => import('../view/listsDet/index.vue'),
    meta: {
      index: 5,
    },
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
