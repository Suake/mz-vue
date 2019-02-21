<template>
  <header class="mz-header">
    <div class="title">
      <div>{{ title }}</div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '卖座电影'
    }
  }
}
</script>

<style lang="less">
.mz-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  z-index: 3000;
  background-color: #fff;
  display: flex;

  .title {
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
