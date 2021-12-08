<template>
  <div class="w">
    <el-row align="middle">
      <el-col :span="9" class="title">
        <a href="/">Chaoerの博客</a>
      </el-col>
      <el-col :push="2" :span="15">
        <el-menu
          :default-active="data.activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#c15b56"
          :router="true"
        >
          <el-menu-item index="/home">
            <el-icon>
              <price-tag />
            </el-icon>
            <span>博客首页</span>
          </el-menu-item>
          <el-menu-item index="/lists">
            <el-icon>
              <document />
            </el-icon>
            <span>技术博文</span>
          </el-menu-item>
          <el-menu-item index="/sort">
            <el-icon>
              <files />
            </el-icon>
            <span>分类</span>
          </el-menu-item>
          <el-menu-item index="/aboutMe">
            <el-icon>
              <user />
            </el-icon>
            <span>关于我</span>
          </el-menu-item>
          <el-menu-item index="/leaveWord">
            <el-icon>
              <edit />
            </el-icon>
            <span>留言</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { PriceTag, Document, Files, User, Edit } from '@element-plus/icons'
import { reactive } from '@vue/reactivity';

//! 定义接口
interface IDataType {
  activeIndex: string
}

const data = reactive<IDataType>({
  activeIndex: '/home'
})

</script>

<style scoped lang="scss">
.el-menu {
  margin-left: 150px;
  border-bottom: 0 !important;
  background-color: rgba(0, 0, 0, 0);
}
.el-menu-item {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #fff !important;
  &:hover {
    background-color: rgba(0, 0, 0, 0) !important;
    color: #fff !important;
  }
}
.title {
  color: #fff;
  font-size: 33px;
  font-weight: 600;
  text-shadow: 0 3px 6px #c15b56, 0px -2px 1px #fff;
}
</style>
