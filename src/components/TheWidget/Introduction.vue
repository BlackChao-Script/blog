<template>
  <el-card class="box_card" shadow="always">
    <Title>
      <template v-slot:left>
        <el-icon class="fs">
          <document-remove />
        </el-icon>
      </template>
      <template v-slot:centre>
        <div class="card_title">Chaoer.简介</div>
      </template>
    </Title>
    <div class="card_message">
      <el-row align="middle" v-for="item in data.IntroductionLists" :key="item.id">
        <el-col :span="1">
          <el-icon>
            <minus />
          </el-icon>
        </el-col>
        <el-col :span="5" :push="1">
          <div>{{ item.Introduction_sort }}：</div>
        </el-col>
        <el-col :span="12">
          <div>{{ item.Introduction_text }}</div>
        </el-col>
      </el-row>
    </div>
    <div class="card_icon">
      <el-row>
        <el-col :span="6" v-for="item in data.IconLists" :key="item.id">
          <a :href="item.icon_link" target="_Blank">
            <el-avatar :size="50" :src="item.icon_src" fit="fill"></el-avatar>
          </a>
        </el-col>
      </el-row>
    </div>
    <div class="card_titles">A handsome man</div>
  </el-card>
</template>

<script setup lang='ts'>
import { DocumentRemove, Minus } from '@element-plus/icons'
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Title from './components/Title.vue'
import { getIntroductionList, getIconList } from '../../api/getHomeData'
interface IDataType {
  IntroductionLists: Array<any>,
  IconLists: Array<any>,
}
const store = useStore()
const data = reactive<IDataType>({
  IntroductionLists: [],
  IconLists: []
})
const getIntroductionLists = () => {
  getIntroductionList().then((res) => {
    data.IntroductionLists = res.data.result.list
  })
}
const getIconLists = () => {
  getIconList().then((res) => {
    const arr = res.data.result.list
    for (const i in arr) {
      arr[i].icon_src = store.state.ImgBaseUrl + arr[i].icon_src
    }
    data.IconLists = arr
  })
}
onMounted(() => {
  getIntroductionLists(),
    getIconLists()
})
</script>

<style scoped lang="scss">
.box_card {
  margin-top: 10px;
  background-color: #c15b56;
  border: 1px solid #c15b56;
  .card_title {
    color: #b47c6f;
    font-size: 20px;
    font-weight: 700;
    text-shadow: 0 3px 6px #c15b56, 0px -2px 1px #342235;
  }
  .card_message {
    margin-top: 10px;
    font-size: 15px;
    color: #342235;
  }
  .card_titles {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
}
.el-row {
  margin-top: 10px;
}
</style>
