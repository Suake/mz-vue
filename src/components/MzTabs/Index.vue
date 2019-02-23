<template>
  <div class="tabs-bar">
    <ul class="tabs-nav">
      <router-link tag="li" active-class="active" to="/films/hot" @click.native="chaBar(0)" style="width: 50%;">
        <span>正在热映</span>
      </router-link>
      <router-link tag="li" active-class="active" to="/films/fur" @click.native="chaBar(1)" class style="width: 50%;">
        <span>即将上映</span>
      </router-link>
      <div class="tab-ink-bar-wrapper" id="tab-ink-bar-wrapper" style="width: 50%;">
        <span class="tab-ink-bar" style="width: 56px;"></span>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    chaBar (w) {
      var bar = document.getElementById('tab-ink-bar-wrapper');
      if (w) {
        bar.style = 'right: -50%';
      } else {
        bar.style = 'right: 50%;';
      }
    }
  }
}
</script>

<style lang="less">
.tabs-bar {
  display: flex;
  height: 49px;
  -webkit-box-align: center;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1),
    -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  position: relative;
  .tabs-nav {
    align-items: center;
    position: relative;
    width: 100%;
    display: flex;
    li {
      flex-shrink: 0;
      -webkit-flex-shrink: 0;
      color: #191a1b;
      text-align: center;
      height: 16px;
      line-height: 16px;
      font-size: 14px;
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &.active {
        color: #ff5f16;
      }
    }
    .tab-ink-bar-wrapper {
      position: absolute;
      margin: auto;
      top: 30px;
      left: 0;
      .tab-ink-bar{
        border-bottom: 2px solid #ff5f16;
        border-radius: 20px;
        display: block;
        margin: auto;
      }
    }
  }
}
</style>
