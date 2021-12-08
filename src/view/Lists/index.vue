<template>
  <div class="bolgs">
    <el-card
      class="bolgs_item"
      v-for="item in data.MdListData"
      :key="item.id"
      v-loading="data.Loading"
    >
      <div class="item">
        <div class="item_r">
          <div class="r_title">{{ item.markdown_name }}</div>
          <div
            class="r_name-sotr"
          >作者：| {{ item.article_user }}&nbsp;&nbsp;&nbsp;分类：| {{ item.sort_class }}</div>
        </div>
        <div class="item_l">2021-12-10</div>
      </div>
      <div class="item_content">
        <div class="content_img">
          <el-image fit="fill" :src="item.markdown_img"></el-image>
        </div>
        <div class="content_text">{{ item.markdown_title }}</div>
      </div>
      <div class="item_tag">
        <div class="tag_r">
          <el-icon>
            <collection-tag />
          </el-icon>
          <div class="tag_text">{{ item.sort_class }}</div>
        </div>
        <div class="tag_l">
          <el-button @click="toMdDet(item.id)" color="#b47c6f" plain>阅读博文</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { CollectionTag } from '@element-plus/icons'
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { getMdList } from '../../api/getMdData'
interface IDataType {
  MdListData: Array<any>
  Loading: boolean
}
const store = useStore()
const $router = useRouter()
const data = reactive<IDataType>({
  MdListData: [],
  Loading: true
})
const getMdLists = () => {
  getMdList().then((res) => {
    const arr = res.data.result.list
    for (const i in arr) {
      arr[i].markdown_img = store.state.ImgBaseUrl + arr[i].markdown_img
      arr[i].create_time = arr[i].create_time.split('T')[0]
    }
    data.MdListData = arr
    data.Loading = false
  })
}
const toMdDet = (md_id: Number | String) => {
  $router.push(`/ListsDet/${md_id}`)
}
onMounted(getMdLists)
</script>

<style scoped lang="scss">
.bolgs {
  .bolgs_item {
    border: 1px solid #b47c6f;
    margin-bottom: 10px;
    padding-bottom: 5px;
    .item {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #b47c6f;
      .item_r {
        width: 90%;
        .r_title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .r_name-sotr {
          color: #b47c6f;
          font-size: 15px;
        }
      }
      .item_l {
        width: 10%;
        color: #b47c6f;
        text-shadow: 0 3px 6px #342235, 0px -2px 1px #342235;
      }
    }
    .item_content {
      margin-top: 10px;
      display: flex;
      .content_img {
        width: 40%;
        height: 210px;
        .el-image {
          border-radius: 5%;
          width: 100%;
          height: 100%;
        }
      }
      .content_text {
        margin-left: 10px;
        width: 60%;
        line-height: 25px;
        color: #b47c6f;
      }
    }

    .item_tag {
      display: flex;
      align-items: center;
      color: #b47c6f;
      margin-top: 10px;
      padding: 5px;
      .tag_r {
        display: flex;
        width: 90%;
        .el-icon {
          font-size: 20px;
        }
        .tag_text {
          display: flex;
          margin-left: 10px;
          font-size: 14px;
        }
      }
      .tag_l {
        width: 10%;
      }
    }
    // &:hover {

    // }
  }
}
</style>
