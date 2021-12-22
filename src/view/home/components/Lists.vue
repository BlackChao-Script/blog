<template>
  <el-card class="index_box" v-loading="data.Loading">
    <div class="box_card">
      <el-card
        class="card"
        shadow="hover"
        v-for="item in data.MdLists"
        :key="item.id"
        @click="toListsDet(item.id)"
      >
        <div class="card_img">
          <el-image fit="cover" :src="item.markdown_img"></el-image>
        </div>
        <div class="card_name">{{ item.markdown_name }}</div>
        <div class="card_title">{{ item.markdown_title }}</div>
        <div class="card_sort">
          <el-tag type="danger">{{ item.sort_class }}</el-tag>
        </div>
        <div class="card_bottom">
          <div class="bottom_name">+文章阅读</div>
          <div class="bottom_titme">{{ item.create_time }}</div>
        </div>
      </el-card>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { getMdList } from '../../../api/getMdData'
interface IDataType {
  MdLists: Array<any>
  Loading: boolean
}
const stort = useStore()
const $router = useRouter()
const data = reactive<IDataType>({
  MdLists: [],
  Loading: true
})
const getMdLists = () => {
  getMdList(1, 6).then((res) => {
    const arr = res.data.result.list
    let str: Array<any> = []
    for (const i in arr) {
      arr[i].markdown_img = stort.state.ImgBaseUrl + arr[i].markdown_img
      str = arr[i].create_time.split('T')
      arr[i].create_time = str[0]
    }
    data.MdLists = arr
    data.Loading = false
  })
}
const toListsDet = (md_id: String | Number) => {
  $router.push(`/ListsDet/${md_id}`)
}
onMounted(getMdLists)
</script>

<style scoped lang="scss">
.index_box {
  border: 1px solid #b47c6f;
  .box_card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    .card {
      cursor: pointer;
      width: 30%;
      height: 360px;
      margin-bottom: 10px;
      .card_img {
        width: 100%;
        height: 150px;
        overflow: hidden;
        .el-image {
          width: 100%;
          height: 100%;
          border-radius: 5%;
          transition: all 0.6s;
          &:hover {
            transform: scale(1.4);
          }
        }
      }
      .card_name {
        margin-top: 10px;
        font-weight: 600;
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card_title {
        font-size: 14px;
        color: #b47c6f;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .card_sort {
        margin-top: 15px;
      }
      .card_bottom {
        margin-top: 15px;
        display: flex;
        align-items: center;
        .bottom_name {
          color: #c15b56;
          margin-right: 10px;
        }
        .bottom_titme {
          font-size: 14px;
          color: #342235;
        }
      }
    }
    &:not(:nth-child(3n)) {
      margin-right: calc(4% / 3);
    }
  }
}
</style>
