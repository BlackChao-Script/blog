<template>
  <div class="group" v-if="!data.showuser">
    <el-button-group>
      <el-button
        :icon="Avatar"
        size="mini"
        color="#b47c6f"
        plain
        round
        @click="clickShowRegister"
      >注册</el-button>
      <el-button :icon="Notification" size="mini" color="#c15b56" plain round>登录</el-button>
    </el-button-group>
  </div>
  <div class="group_else" v-else>
    <el-popover trigger="hover" placement="bottom" :width="40">
      <div class="else_btn">
        <el-button plain :icon="Notification" size="mini" color="#b47c6f" round>退出登录</el-button>
      </div>
      <template #reference>
        <el-button plain :icon="Avatar" size="mini" color="#b47c6f" round></el-button>
      </template>
    </el-popover>
  </div>
  <!-- 注册表 -->
  <el-dialog width="20%" v-model="data.showRegister" :show-close="false">
    <template #title>
      <div class="title">注册</div>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import { Avatar, Notification } from '@element-plus/icons'
import { reactive } from '@vue/reactivity';

//! 定义接口
interface IDataType {
  showuser: boolean,
  showRegister: boolean
}
//! 数据
const data = reactive<IDataType>({
  showuser: false,
  showRegister: false
})
//! 点击注册时触发的方法
const clickShowRegister = () => {
  data.showRegister = true
}

</script>

<style scoped lang="scss">
.group,
.group_else {
  margin-left: 10px;
  margin-top: 15px;
}
.else_btn {
  display: flex;
  justify-content: center;
}
.title {
  color: pink;
}
</style>
