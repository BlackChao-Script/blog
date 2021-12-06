<template>
  <div class="sort">
    <el-card>
      <div class="sort_title">文章分类</div>
      <div class="sort_item" v-for="item in data.sortLists" :key="item.id">{{ item.sort_name }}</div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { getSortList } from '../../api/getHomeData'
interface IDataType {
  sortLists: Array<any>
}
const data = reactive<IDataType>({
  sortLists: []
})
const getSortLists = () => {
  getSortList().then((res) => {
    data.sortLists = res.data.result.list
  })
}
onMounted(getSortLists)
</script>

<style scoped lang="scss">
.sort {
  margin-top: 20px;
  .el-card {
    border: 1px solid #342235;
    .sort_title {
      text-align: center;
      color: #b47c6f;
      font-size: 20px;
      font-weight: 700;
      text-shadow: 0 3px 6px #342235, 0px -2px 1px #342235;
    }
    .sort_item {
      margin-top: 5px;
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.5s;
      border-bottom: 1px solid #b47c6f;
      color: #b47c6f;
      &:hover {
        border-bottom: 1px solid #342235;
        color: #000;
      }
    }
  }
}
</style>
