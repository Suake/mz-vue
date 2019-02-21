<template>
  <div class="main">
    <div class="center-view">
      <router-link tag="div" to="/login" class="avatar">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC"
          class="avator-icon"
        >
        <div class="nick-name">立即登录</div>
      </router-link>
      <ul class="my-order-tab">
          <router-link tag="li" to="#">
              <i class="iconfont icon-dingdan"></i>
              <div class="common-p">电影订单</div>
          </router-link>
          <router-link tag="li" to="#">
              <i class="iconfont icon-pingtuan"></i>
              <div class="common-p">拼团订单</div>
          </router-link>
      </ul>
      <router-link tag="div" class="margin-set my-card" to="/card">
        <i class="iconfont icon-card"></i>
        <span class="label">卖座卡</span>
        <em class="iconfont icon-right arrow"></em>
      </router-link>
      <router-link tag="div" class="margin-set my-balance" to="/money">
        <i class="iconfont icon-money"></i>
        <span class="label">余额</span>
        ￥0
        <em class="iconfont icon-right arrow yue"></em>
      </router-link>
      <router-link tag="div" class="margin-set my-system" to="/system">
        <i class="iconfont icon-system"></i>
        <span class="label">设置</span>
        <em class="iconfont icon-right arrow"></em>
      </router-link>
    </div>
  </div>
</template>
<style lang="less">
.center-view {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  font-size: 15px;
  background: #f4f4f4;
  margin-bottom: 59px;
  .avatar {
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: flex;
    -webkit-box-align: center;
    box-sizing: border-box;
    align-items: center;
    color: #fff;
    .avator-icon {
      width: 63px;
      height: 63px;
      border-radius: 35px;
      margin-right: 20px;
      border: 2px solid #fff;
    }
    .nick-name {
      font-size: 16px;
    }
  }
  .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    -webkit-box-align: center;
    align-items: center;
    li {
        position: relative;
        flex: 1;
        list-style: none;
        i {
            font-size: 26px;
            display: block;
            margin-bottom: 10px;
        }
        .icon-dingdan{
            color: orange;
        }
        .icon-pingtuan{
          color: greenyellow;
        }
        .common-p{
            color: #797d82;
        }
    }
  }
  .margin-set{
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    i {
      font-size: 20px;
      display: block;
      &.icon-card{
        color: orange;
      }
      &.icon-money{
        color: yellow;
      }
      &.icon-system{
        color: greenyellow;
      }
    }
    .label{
      margin-left: 15px;
      color: #191a1b;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    .arrow{
      font-size: 8px;
      text-align: right;
      width: 6px;
      height: 10px;
    }
    .yue{
      margin-left: 10px;
      color: #797d82;
    }
  }
}
</style>
