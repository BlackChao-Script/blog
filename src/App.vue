<template>
  <!-- 导航栏 -->
  <Nav></Nav>
  <!-- 内容 -->
  <div class="m_top">
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
import Nav from './components/Nav/index.vue'
import TheWidget from './components/TheWidget/index.vue'
</script>


<style lang="scss">
.el-main {
  margin-right: 20px;
}
.m_top {
  margin-top: 10px;
}
</style>
