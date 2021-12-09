<template>
  <div class="sort">
    <el-card>
      <Title>
        <template v-slot:left>
          <el-icon class="fs">
            <folder-opened />
          </el-icon>
        </template>
        <template v-slot:centre>
          <div>文章分类</div>
        </template>
      </Title>
      <div
        class="sort_item"
        v-for="item in data.sortLists"
        :key="item.id"
        @click="toSort(item.id)"
      >{{ item.sort_name }}</div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { FolderOpened } from '@element-plus/icons'
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { getSortList } from '../../api/getHomeData'
import Title from './components/Title.vue'
interface IDataType {
  sortLists: Array<any>
}
const $router = useRouter()
const data = reactive<IDataType>({
  sortLists: []
})
const getSortLists = () => {
  getSortList().then((res) => {
    data.sortLists = res.data.result.list
  })
}
const toSort = (sort_id: any) => {
  $router.push(`/sortDet/${sort_id}`)
}
onMounted(getSortLists)
</script>

<style scoped lang="scss">
.sort {
  margin-top: 20px;
  .el-card {
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
