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
        <router-view></router-view>
        <!-- 侧边 -->
      </el-main>
      <el-aside width="300px">
        <TheWidget></TheWidget>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Top } from '@element-plus/icons'
import { reactive } from '@vue/reactivity';
import Nav from './components/Nav/index.vue'
import TheWidget from './components/TheWidget/index.vue'
interface IDataType {
  routerTime: number,
  transitionName: string
}
const data = reactive<IDataType>({
  routerTime: 0,
  transitionName: "slide-left"
})
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
</style>
