<template>
  <el-card>
    <div class="title">留言板</div>
    <div class="message_box">
      <div class="box_l">
        <div class="l_img">
          <el-avatar :size="50" src="www" @error="errorHandler">
            <img src="../../assets/images/Snipaste_2021-12-10_11-08-16.png" />
          </el-avatar>
        </div>
        <div class="l_name">报上名来</div>
      </div>
      <div class="box_r">
        <div class="r_input">
          <el-input
            v-model="data.textarea"
            :rows="4"
            type="textarea"
            placeholder="请输入内容并按回车键发送"
            resize="none"
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
      <div v-if="!data.show" class="box_item">
        <div class="item_img">
          <el-avatar :size="50" src="https://empty" @error="errorHandler">
            <img src="../../assets/images/Snipaste_2021-12-10_11-08-16.png" />
          </el-avatar>
        </div>
        <div class="item_content">
          <div class="content_o">
            <div class="o_name">Chaoer</div>
            <div class="o_time">2021-12-10 10:35:20</div>
            <div class="o_index">#1</div>
          </div>
          <div class="content_t">我就想知道案件非黑即白加快步伐手机百科解释的比较v在v不能再v从不能自拔v吹牛逼v微弱i任务额入围如我认为若仍未如额外人</div>
        </div>
      </div>
      <div v-else class="box_message">当前暂无留言</div>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
interface IDataType {
  textarea: string,
  show: boolean
}

const data = reactive<IDataType>({
  textarea: '',
  show: true
})
const errorHandler = () => true
</script>

<style scoped lang="scss">
.el-card {
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
