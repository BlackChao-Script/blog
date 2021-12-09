<template>
  <div class="aboutMe">
    <div class="aboutMe_o">
      <div class="o_img">
        <el-avatar :size="100" :src="aboutMeData.me_img"></el-avatar>
      </div>
      <div class="o_text">关于我</div>
    </div>
    <div class="aboutMe_t">
      <div class="t_item">
        <div class="item_icon">
          <el-icon>
            <apple />
          </el-icon>
        </div>
        <div class="item_text">年龄/21</div>
      </div>
      <div class="t_item">
        <div class="item_icon">
          <el-icon>
            <reading />
          </el-icon>
        </div>
        <div class="item_text">学历/大专(在校)</div>
      </div>
      <div class="t_item">
        <div class="item_icon">
          <el-icon>
            <position />
          </el-icon>
        </div>
        <div class="item_text">坐标/南昌</div>
      </div>
      <div class="t_item">
        <div class="item_icon">
          <el-icon>
            <tickets />
          </el-icon>
        </div>
        <div class="item_text">状态/学习中</div>
      </div>
    </div>
    <div class="aboutMe_b">
      <div class="b_text">{{ aboutMeData.me_introduce }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Apple, Reading, Position, Tickets } from '@element-plus/icons'
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { getAboutMeData } from '../../api/getaboutMeData'
const store = useStore()
const aboutMeData = ref<any>([])
onMounted(() => {
  getAboutMeData().then((res) => {
    const arr = res.data.result
    arr[0].me_img = store.state.ImgBaseUrl + arr[0].me_img
    aboutMeData.value = arr[0]
  })
})
</script>

<style scoped lang="scss">
.aboutMe {
  margin-top: 100px;
  .aboutMe_o {
    display: flex;
    flex-direction: column;
    align-items: center;
    .o_text {
      font-size: 16px;
      margin-top: 10px;
      color: #fff;
    }
  }
  .aboutMe_t {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .t_item {
      width: 200px;
      height: 150px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .item_icon {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid #fff;
        .el-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 50px;
          color: #fff;
        }
      }
      .item_text {
        margin-top: 10px;
        color: #fff;
      }
    }
  }
  .aboutMe_b {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    .b_text {
      font-size: 17px;
      width: 750px;
      color: #fff;
    }
  }
}
</style>
