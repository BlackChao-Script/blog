<template>
  <div>文章详细</div>
</template>

<script setup lang='ts'>
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { getMdDetList } from '../../api/getMdData'
const $route = useRoute()
const getMdDetLists = () => {
  getMdDetList($route.params.md_id).then((res) => {
    console.log(res.data.result)
  })
}
onMounted(getMdDetLists)
</script>

<style scoped lang="scss">
</style>
