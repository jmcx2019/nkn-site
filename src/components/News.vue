<template>
  <div class="row row-news">
    <div class="container">
      <p><strong>{{ $t('media.name') }}</strong></p>
      <img class="img-whatwedoline2 hidden-xs" src="./../assets/banner/whatwedoline2x.png" alt="">
      <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/banner/whatwedoline2x.png" alt="">

      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <!--<div v-if="noChina[0].status" class="twitter-area">-->
          <div v-if="$i18n.locale === 'en'" class="twitter-area">
            <a v-if="$i18n.locale === 'en'" class="twitter-timeline" href="https://twitter.com/NKN_ORG?ref_src=twsrc%5Etfw">{{ $t('media.twitterLoading') }}</a >
            <!--<iframe v-show="isChina[0].status" width="100%" height="730" frameborder="0" scrolling="no" src="http://v.t.sina.com.cn/widget/widget_blog.php?language=zh_cn&width=0&height=730&uid=6551363980"></iframe>-->
          </div>

          <!--<div v-if="$i18n.locale === 'zh'" v-for="newI in 3">-->
          <div v-show="$i18n.locale === 'zh'" class="news-area">
            <div v-for="newI in 3">
              <p class="new-tit"><a target="_blank" :href="$t('media.newsCN.newsUrl' + newI)">{{ $t('media.newsCN.newsTit' + newI) }}</a></p>
              <p class="new-time">{{ $t('media.newsCN.newsTime' + newI) }}</p>
              <div class="row">
                <div class="col-lg-5 col-md-5 col-new-img">
                  <a target="_blank" :href="$t('media.newsCN.newsUrl' + newI)">
                    <img v-if="newI === 1" class="new-img" src="./../assets/media/news/CN-1.png" alt="" width="90%">
                    <img v-if="newI === 2" class="new-img" src="./../assets/media/news/CN-2.png" alt="" width="90%">
                    <img v-if="newI === 3" class="new-img" src="./../assets/media/news/CN-3.png" alt="" width="90%">
                  </a>
                </div>
                <div class="col-lg-7 col-md-7 col-news-txt">
                  <a target="_blank" :href="$t('media.newsCN.newsUrl' + newI)">
                    <p class="new-txt">{{ $t('media.newsCN.newsTxt' + newI) }}</p>
                  </a>
                </div>
              </div>
              <hr v-if="newI !== 3" class="new-hr">
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="news-area">
            <div v-for="newI in 3">
              <p class="new-tit"><a target="_blank" :href="$t('media.news.newsUrl' + newI)">{{ $t('media.news.newsTit' + newI) }}</a></p>
              <p class="new-time">{{ $t('media.news.newsTime' + newI) }}</p>
              <div class="row">
                <div class="col-lg-5 col-md-5 col-new-img">
                  <a target="_blank" :href="$t('media.news.newsUrl' + newI)">
                    <img v-if="newI === 1" class="new-img" src="./../assets/media/news/EN-1.png" alt="" width="90%">
                    <img v-if="newI === 2" class="new-img" src="./../assets/media/news/EN-2.png" alt="" width="90%">
                    <img v-if="newI === 3" class="new-img" src="./../assets/media/news/EN-3.png" alt="" width="90%">
                  </a>
                </div>
                <div class="col-lg-7 col-md-7 col-news-txt">
                  <a target="_blank" :href="$t('media.news.newsUrl' + newI)">
                    <p class="new-txt">{{ $t('media.news.newsTxt' + newI) }}</p>
                  </a>
                </div>
              </div>
              <hr v-if="newI !== 3" class="new-hr">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-video1">
          <div class="video1-area">
            <video width="100%" controls="controls" v-show="isPlay[0].status" playsinline>
              <source :src="videoUrlList.mp4.nknVideo1" type="video/mp4">
              <source :src="videoUrlList.ogg.nknVideo1" type="video/ogg">
            </video>
            <a v-show="!isPlay[0].status" target="_blank" href="https://www.youtube.com/watch?v=smzyW75ttH8">
              <img class="img-video1" src="../assets/media/video/video1.png">
              <img v-show="isShowPlay[0]" class="img-youtube1" src="./../assets/media/youtube.png" alt="">
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-video2">
          <div class="video2-area">
            <video width="100%" controls="controls" v-show="isPlay[0].status" playsinline>
              <source :src="videoUrlList.mp4.nknVideo2" type="video/mp4">
              <source :src="videoUrlList.ogg.nknVideo2" type="video/ogg">
            </video>
            <a v-show="!isPlay[0].status" target="_blank" href="https://youtu.be/oyNjTbtMD94">
              <img class="img-video2" src="../assets/media/video/video2.png">
              <img v-show="isShowPlay[1]" class="img-youtube2" src="./../assets/media/youtube.png" alt="">
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-video3">
          <div class="video3-area">
            <video width="100%" controls="controls" v-show="isPlay[0].status" playsinline>
              <source :src="videoUrlList.mp4.nknVideo3" type="video/mp4">
              <source :src="videoUrlList.ogg.nknVideo3" type="video/ogg">
            </video>
            <a v-show="!isPlay[0].status" target="_blank" href="https://youtu.be/4pl2WkEbkus">
              <img class="img-video3" src="./../assets/media/video/video3.png">
              <img v-show="isShowPlay[2]" class="img-youtube2" src="./../assets/media/youtube.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LangStorage from './../helpers/lang'

	export default {
    name: "news",
    data() {
      return {
        videoUrlList: {
          mp4: {
            nknVideo1: process.env.VIDEO_URL + 'nkn1.mp4',
            nknVideo2: process.env.VIDEO_URL + 'nkn2.mp4',
            nknVideo3: process.env.VIDEO_URL + 'nkn3.mp4'
          },
          ogg: {
            nknVideo1: process.env.VIDEO_URL + 'nkn1.ogg',
            nknVideo2: process.env.VIDEO_URL + 'nkn2.ogg',
            nknVideo3: process.env.VIDEO_URL + 'nkn3.ogg'
          }
        },
        isChina: [{status: false}],
        noChina: [{status: false}],
        isPlay: [{status: false}],
        isShowPlay: [true, true, true]
      }
    },
    created() {
      this.getIp(function (info, self) {
        if (info.country === '中国') {
          self.$set(self.isChina, 0, {status: true})
        } else {
          self.$set(self.noChina, 0, {status: true})
          self.$set(self.isPlay, 0, {status: false})
        }
      })
    },
    methods: {
      showIcon($id) {
        this.$set(this.isShowPlay, $id, true);
      },
      hideIcon($id) {
        this.$set(this.isShowPlay, $id, false);
      },
      getIp(cb) {
        let script = document.createElement("script"),
          s = document.getElementsByTagName("script")[0];

        script.src = "https://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js";
        s.parentNode.insertBefore(script, s);

        let self = this
        let it = setInterval(function () {
          if (typeof(remote_ip_info) !== 'undefined') {
            try {
              cb(remote_ip_info, self);
            } catch (error) {
              console.log(error)
            }

            clearInterval(it);
            it = null;
          }
        }, 100);
      }
    }
  }
</script>

<style scoped>
  .row-news {
    background-color: #F9FAFF;
    position: relative;
    color: #253A7E;
    font-size: 24px;
    text-align: center;
    padding: 100px 0;
  }

  .img-whatwedoline2 {
    height: 4px;
    width: 64px;
    margin: 20px 0 100px;
  }
  .img-whatwedoline2-xs {
    height: 2px;
    width: 64px;
    margin: 10px 0 30px;
  }

  .twitter-area {
    margin-top: 15px;
    overflow-y: scroll;
    height: 730px;
    -webkit-overflow-scrolling: touch;
  }
  .twitter-timeline {
    color: #253A7E;
  }
  .news-area {
    text-align: left;
    font-size: 14px;
    min-height: 730px;
    padding: 30px;
  }
  .new-tit {
    font-size: 18px;
  }
  .col-news-txt > a,
  .new-tit > a {
    color: #253A7E;
  }
  .new-txt {
    color: black;
  }
  .new-hr {
    background-color: #dadada;
    height: 1px;
  }
  .new-time {
    color: #949494;
    font-weight: 200;
  }
  hr {
    margin: 14px 0;
  }

  .col-video1,
  .col-video2,
  .col-video3 {
    margin-top: 50px;
  }
  .img-video1,
  .img-video2,
  .img-video3 {
    width: 100%;
  }
  .img-youtube1,
  .img-youtube2,
  .img-youtube3 {
    width: 72px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .new-img:hover{
    margin-top: -1px;
    padding-bottom: 1px;
  }
  .news-area {
    margin-top: 15px;
  }
  /* start 阴影 - shadow */
  .twitter-area,
  .news-area,
  .new-img,
  .video1-area,
  .video2-area,
  .video3-area {
    -moz-box-shadow:0 0 3px #D4D6E3;
    -webkit-box-shadow:0 0 3px #D4D6E3;
    box-shadow:0 0 3px #D4D6E3;
  }
  .twitter-area:hover,
  .news-area:hover,
  .new-img:hover,
  .video1-area:hover,
  .video2-area:hover,
  .video3-area:hover {
    -moz-box-shadow:0 0 20px #D4D6E3;
    -webkit-box-shadow:0 0 20px #D4D6E3;
    box-shadow:0 0 20px #D4D6E3;
  }
  /* end 阴影 - shadow */
</style>
