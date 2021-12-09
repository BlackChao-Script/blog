import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: '/home' },
  {
    path: '/home',
    component: () => import('../view/home/index.vue'),
    meta: {
      index: 0,
      keepAlive: true,
    },
  },
  {
    path: '/lists',
    component: () => import('../view/lists/index.vue'),
    meta: {
      index: 1,
      keepAlive: true,
    },
  },
  {
    path: '/aboutMe',
    component: () => import('../view/aboutMe/index.vue'),
    meta: {
      index: 2,
      keepAlive: true,
    },
  },
  {
    path: '/leaveWord',
    component: () => import('../view/leaveWord/index.vue'),
    meta: {
      index: 3,
      keepAlive: true,
    },
  },
  {
    path: '/listsDet/:md_id',
    component: () => import('../view/listsDet/index.vue'),
    meta: {
      index: 4,
      keepAlive: false,
    },
  },
  {
    path: '/sortDet/:sort_id',
    component: () => import('../view/sortDet/index.vue'),
    meta: {
      index: 5,
      keepAlive: false,
      transitionName: '',
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
