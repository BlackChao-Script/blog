<template>
  <div class="carousel">
    <el-carousel :interval="3000" type="card" height="200px" :initial-index="1">
      <el-carousel-item v-loading="data.Loading" v-for="item in data.CarouselData" :key="item.id">
        <a :href="item.carousel_link" target="_Blank">
          <el-image :src="item.carousel_src" fit="fill"></el-image>
          <div class="carousel_title">{{ item.carousel_name }}</div>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { getCarouselList } from '../../../api/getHomeData'
interface IDataType {
  CarouselData: Array<any>
  Loading: boolean
}
const store = useStore()
const data = reactive<IDataType>({
  CarouselData: [],
  Loading: true
})
const getCarouselData = () => {
  getCarouselList().then((res) => {
    const arr = res.data.result.list
    for (const i in arr) {
      arr[i].carousel_src = store.state.ImgBaseUrl + arr[i].carousel_src
    }
    data.CarouselData = arr
    data.Loading = false
  })
}
onMounted(getCarouselData)

</script>

<style scoped lang="scss">
.carousel {
  margin-bottom: 10px;
  position: relative;
  .carousel_title {
    width: 100%;
    height: 100%;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    text-shadow: 0 3px 6px #c15b56, 0px -2px 1px #c15b56;
    color: #452435;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.5s;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
