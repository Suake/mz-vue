<template>
    <div class="tabs-bar">
        正在热映
        即将上映
    </div>
</template>

<style lang="less">
.tabs-bar{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    transition: transform .2s cubic-bezier(.35,0,.25,1),-webkit-transform .2s cubic-bezier(.35,0,.25,1);
    position: relative;
}
</style>
