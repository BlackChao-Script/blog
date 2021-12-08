<template>
  <div class="title">
    <div class="title_left">
      <slot name="left"></slot>
    </div>
    <div class="title_centre">
      <slot name="centre"></slot>
    </div>
    <div class="title_right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  position: relative;
  color: #b47c6f;
  font-size: 20px;
  font-weight: 700;
  .title_left {
    font-size: 20px;
    margin-right: 10px;
    padding-top: 5px;
  }
  .title_right {
    position: absolute;
    right: 0;
  }
}
</style>
