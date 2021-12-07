<template>
  <div class="subject" v-loading="data.Loading">
    <el-card>
      <div class="subject_title">前端知识题(每日更新)</div>
      <div class="subject_item" v-for="item in data.SubjectData" :key="item.id">
        <div class="item_dian">.</div>
        <div class="item_tag">[{{ item.label }}]</div>
        <el-tooltip effect="light" placement="top" :content="item.title">
          <div class="item_text">{{ item.title }}</div>
        </el-tooltip>
      </div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { getSubjectData } from '../../api/getSubjectData'
interface IDataType {
  SubjectData: Array<any>
  Loading: boolean
}
const data = reactive<IDataType>({
  //* 每日题库数据
  SubjectData: [],
  Loading: true
})
const getSubjectDatas = () => {
  getSubjectData().then((res) => {
    const arr = res.data.result.today
    arr[3].label = '其它'
    data.SubjectData = arr
    data.Loading = false
  })
}
onMounted(getSubjectDatas)
</script>

<style scoped lang="scss">
.subject {
  margin-top: 20px;
  .el-card {
    border: 1px solid #342235;
    // background-color: #c15b56;
    .subject_title {
      text-align: center;
      color: #b47c6f;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 5px;
      text-shadow: 0 3px 6px #342235, 0px -2px 1px #342235;
    }
    .subject_item {
      margin-top: 10px;
      display: flex;
      align-items: center;
      .item_dian {
        margin-right: 5px;
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 20px;
        color: #342235;
      }
      .item_tag {
        color: #e9e3e1;
      }
      .item_text {
        margin-left: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        color: #b47c6f;
      }
    }
  }
}
</style>
