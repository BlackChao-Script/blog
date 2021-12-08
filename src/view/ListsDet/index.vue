<template>
  <el-card v-loading="data.Loading">
    <!-- 面包屑 -->
    <el-breadcrumb>
      <el-breadcrumb-item>
        <span class="goback" @click="goBack">返回</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>博文内容</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 创建时间 -->
    <div class="create_time">
      <el-icon>
        <calendar />
      </el-icon>
      {{ data.MdDetList.create_time }}
    </div>
    <!-- 博文内容 -->
    <v-md-preview :include-level="[3, 4]" :text="data.MdDetList.content_md"></v-md-preview>
  </el-card>
</template>

<script setup lang='ts'>
import { ArrowRight, Calendar } from '@element-plus/icons'
import { onMounted } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
import { reactive } from '@vue/reactivity';
import { getMdDetList } from '../../api/getMdData'
interface IDataType {
  MdDetList: any,
  Loading: boolean
}
const $route = useRoute()
const $router = useRouter()
const data = reactive<IDataType>({
  MdDetList: [],
  Loading: true
})
const getMdDetLists = () => {
  getMdDetList($route.params.md_id).then((res) => {
    data.MdDetList = res.data.result
    data.MdDetList.create_time = data.MdDetList.create_time.split('T')[0]
    data.Loading = false
  })
}
const goBack = () => {
  $router.go(-1)
}
onMounted(getMdDetLists)
</script>

<style scoped lang="scss">
.el-card {
  border: 1px solid #342235;
  .create_time {
    margin-top: 10px;
  }
}
.goback {
  cursor: pointer;
  &:hover {
    color: #b47c6f;
  }
}
</style>
