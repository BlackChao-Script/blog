<template>
  <!-- 导航栏 -->
  <Nav></Nav>
  <!-- 内容 -->
  <div class="m_top">
    <el-backtop>
      <div class="top_back">
        <el-icon>
          <top />
        </el-icon>
      </div>
    </el-backtop>
    <el-container class="w">
      <!-- 主体 -->
      <el-main>
        <router-view class="router-view" v-slot="{ Component }">
          <transition :name="transitionName">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
      <!-- 侧边 -->
      <el-aside width="300px">
        <TheWidget></TheWidget>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Top } from '@element-plus/icons'
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import Nav from './components/Nav/index.vue'
import TheWidget from './components/TheWidget/index.vue'

const $route = useRoute()
const transition: Array<string> = ['slide-left', 'slide-right']
let transitionName = ref<any>(transition[0])
//! 监控路由的变化
watch(
  () => $route.meta.index,
  (newIndex: any, oldIndex: any) => {
    if (newIndex > oldIndex) {
      transitionName.value = transition[0]
    } else {
      transitionName.value = transition[1]
    }
  }
)
</script>
<style lang="scss">
.el-main {
  margin-right: 20px;
}
.m_top {
  margin-top: 10px;
}
.top_back {
  color: #c15b56;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
