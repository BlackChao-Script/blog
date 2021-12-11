<template>
  <el-card>
    <div class="title">留言板</div>
    <div class="message_box">
      <div class="box_l">
        <div class="l_img">
          <el-avatar :size="50" :src="store.state.userImg" @error="errorHandler">
            <img src="../../assets/images/Snipaste_2021-12-10_11-08-16.png" />
          </el-avatar>
        </div>
        <div class="l_name" @click="showLogin" v-if="!store.state.userName">报上名来</div>
        <div class="l_name" v-else>{{ store.state.userName }}</div>
      </div>
      <div class="box_r">
        <div class="r_input">
          <el-input
            v-model="data.textarea"
            :rows="4"
            :maxlength="50"
            :show-word-limit="true"
            :clearable="true"
            type="textarea"
            placeholder="请输入内容并按回车键发送"
            resize="none"
            @keyup.enter="sendTextarea"
          />
        </div>
      </div>
    </div>
    <hr />
    <div class="titlemessage_box">
      <div class="box_title">
        <span class="title_icon"></span>
        <span class="title_name">留言</span>
      </div>
      <div
        class="box_item"
        v-for="(item,index) in data.leaveWordData"
        :key="item.id"
        v-loading="data.loading"
      >
        <div class="item_img">
          <el-avatar :size="50" :src="item.leaveWord_img" @error="errorHandler">
            <img src="../../assets/images/Snipaste_2021-12-10_11-08-16.png" />
          </el-avatar>
        </div>
        <div class="item_content">
          <div class="content_o">
            <div class="o_name">{{ item.leaveWord_name }}</div>
            <div class="o_time">{{ item.leaveWord_time }}</div>
            <div class="o_index">#{{ index + 1 }}</div>
          </div>
          <div class="content_t">{{ item.leaveWord_text }}</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { sendLeaveWord, getLeaveWordData } from '../../api/getleaveWord'
import { ElMessage } from 'element-plus'

//! 接口
interface IDataType {
  textarea: string,
  show: boolean,
  showLogin: Boolean,
  userName: any,
  leaveWordData: any,
  loading: boolean
}

//! 数据
const data = reactive<IDataType>({
  textarea: '',
  show: false,
  showLogin: false,
  userName: '',
  leaveWordData: [],
  loading: true

})

//! 使用vuex
const store = useStore()

//! 方法
const errorHandler = () => true
const showLogin = () => {
  store.state.showLogin = true
}
const sendTextarea = () => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    sendLeaveWord(store.state.userName, data.textarea, store.state.userImg).then(() => {
      ElMessage({
        message: '留言成功',
        type: 'success',
      })
    })
  } else {
    ElMessage({
      message: '请先登录',
      type: 'warning',
    })
  }
  setTimeout(() => {
    getLeaveWordDatas()
  }, 500);
  data.textarea = ''
}
const getLeaveWordDatas = () => {

  getLeaveWordData().then((res) => {
    const arr = res.data.result
    const formateDate = (datetime: any) => {
      function addDateZero(num: any) {
        return (num < 10 ? "0" + num : num)
      }
      let d = new Date(datetime);
      let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds())
      return formatdatetime
    }
    for (const i in arr) {
      arr[i].leaveWord_time = formateDate(arr[i].leaveWord_time)
    }
    data.leaveWordData = arr
    data.loading = false
  })
}

//! 生命周期
onMounted(() => {
  store.state.userName = window.sessionStorage.getItem('name')
  store.state.userImg = window.sessionStorage.getItem('img')
  getLeaveWordDatas()
})
</script>

<style scoped lang="scss">
.el-card {
  border: 1px solid #b47c6f;
  .title {
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 700;
  }
  .message_box {
    display: flex;
    .box_l {
      width: 100px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .l_img {
        width: 50px;
        height: 50px;
        .el-avatar {
          width: 100%;
          height: 100%;
        }
      }
      .l_name {
        margin-top: 10px;
        font-size: 13px;
      }
    }
    .box_r {
      width: 100%;
    }
  }
  hr {
    margin: 2rem auto;
    border: 1px dashed #b47c6f;
    width: calc(100% - 4px);
  }
  .titlemessage_box {
    .box_title {
      padding-bottom: 10px;
      border-bottom: 1px solid #f4f4f4;
      .title_icon {
        width: 5px;
        height: 10px;
        border-left: 3px solid #b47c6f;
      }
      .title_name {
        font-size: 17px;
        margin-left: 5px;
        font-weight: 700;
      }
    }
    .box_item {
      padding: 10px;
      display: flex;
      margin-top: 10px;
      border-bottom: 1px dashed #f4f4f4;
      .item_img {
        padding: 0 10px;
        width: 50px;
        margin-right: 10px;
      }
      .item_content {
        width: 100%;
        .content_o {
          position: relative;
          display: flex;
          align-items: center;

          .o_name {
            margin-right: 20px;
            color: #b47c6f;
          }
          .o_time {
            font-size: 13px;
            margin-right: 20px;
            color: #ccc;
          }
          .o_index {
            position: absolute;
            right: 0;
            color: #c15b56;
          }
        }
        .content_t {
          height: 50px;
          margin-top: 10px;
          font-size: 15px;
          padding-bottom: 10px;
        }
      }
    }
  }
  .box_message {
    text-align: center;
    margin-top: 10px;
    color: #c15b56;
  }
}
</style>
