<template>
  <el-card>
    <Title>
      <template v-slot:left>
        <el-icon class="fs">
          <chat-dot-round />
        </el-icon>
      </template>
      <template v-slot:centre>
        <div>励志语句</div>
      </template>
    </Title>
    <div class="text">既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。 —— 康德</div>
  </el-card>
</template>

<script setup lang='ts'>
import { ChatDotRound } from '@element-plus/icons'
import Title from './components/Title.vue'

</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
.text {
  margin-top: 10px;
  font-size: 15px;
  color: #c15b56;
}
</style>
