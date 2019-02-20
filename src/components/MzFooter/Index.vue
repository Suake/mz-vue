<template>
    <footer class="mz-footer">
        <router-link to="/films">
            <i class="iconfont icon-films"></i>电影
        </router-link>
        <router-link to="/cinemas">
            <i class="iconfont icon-cinemas"></i>影院
        </router-link>
        <router-link to="#">
            <i class="iconfont icon-sales"></i>9.9拼团
        </router-link>
        <router-link to="/center">
            <i class="iconfont icon-center"></i>我的
        </router-link>
    </footer>
</template>

<style lang="less">
    .mz-footer{
        height: 48px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #797d82;
            text-decoration: none;
            i{
                font-size: 21px;
            }
            &.router-link-active{
                color: #ff5f16;
            }
        }
    }
</style>
