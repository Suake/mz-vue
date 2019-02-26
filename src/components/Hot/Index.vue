<template>
  <div class="film-list-content">
    <div class="nowPlayingList-wrap">
      <ul class="nowPlayingList">
        <li class="nowPlayingFilm-item">
          <a href="#" class="nowPlayingFilm-wrap">
            <div class="lazy-img nowPlayingFilm-img" style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;">
              <div class="lazy-img-wrap" style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;">
                <img src="https://pic.maizuo.com/usr/movie/e2faa90be5a512de432b30d23398f052.jpg?x-oss-process=image/quality,Q_70" class="target-img">
              </div>
            </div>
            <div class="nowPlayingFilm-info" style="float: left;">
              <div class="nowPlayingFilm-name info-col"><span class="name">阿丽塔：战斗天使</span><span class="item">2D</span></div>
              <div class="nowPlayingFilm-grade info-col" style="visibility: visible;">
                <span class="label">观众评分 </span><span class="grade">7.6</span>
              </div>
              <div class="nowPlayingFilm-actors info-col">
                <span class="label">主演：罗伯特·罗德里格兹  克里斯托弗·沃尔兹 罗莎·萨拉查 基恩·约翰逊  詹妮弗·康纳利 艾德·斯克林</span>
              </div>
              <div class="nowPlayingFilm-detail info-col"><span class="label">美国   加拿大 阿根廷 | 100分钟</span></div>
            </div>
            <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
  @import url('./hot.less');
</style>
