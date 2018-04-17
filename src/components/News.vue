<template>
  <div v-if="isShow[0].status" class="row row-news">
    <div class="container">
      <p><strong>{{ $t('news.name') }}</strong></p>
      <img class="img-whatwedoline2 hidden-xs" src="./../assets/home/banner/whatwedoline2x.png" alt="">
      <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/whatwedoline2x.png" alt="">

      <div class="row">
        <div class="hidden-lg hidden-md hidden-sm col-xs-12 div-twitter-tit">{{ $t('news.twitterBy') }}</div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div class="twitter-area">
            <a class="twitter-timeline" href="https://twitter.com/NKN_ORG?ref_src=twsrc%5Etfw">{{ $t('news.twitterLoading') }}</a >
          </div>
        </div>

        <div class="hidden-lg hidden-md hidden-sm col-xs-12 div-facebook-tit">{{ $t('news.facebookBy') }}</div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div class="facebook-post hidden-xs">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnkn.org%2Fposts%2F131446084336716&width=500" width="500" height="773" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
          </div>
          <div class="facebook-post hidden-lg hidden-md hidden-sm">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnkn.org%2Fposts%2F131446084336716&width=350" width="350" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    name: "news",
    data() {
      return {
        isShow: [{status: true}]
      }
    },
    created() {
      this.getIp(function (info, self) {
        if (info.country === '中国') {
          self.$set(self.isShow, 0, false)
        }
      })
    },
    methods: {
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
    height: 680px;
    background-color: #f6f9fc;
    position: relative;
    color: #253A7E;
    font-size: 24px;
    text-align: center;
    padding-top: 80px;
    padding-right: 0;
    padding-left: 0;
  }

  .img-whatwedoline2 {
    height: 4px;
    width: 64px;
    margin: 10px 0 60px;
  }
  .img-whatwedoline2-xs {
    height: 2px;
    width: 64px;
    margin: 10px 0 30px;
  }

  .div-twitter-tit,
  .div-facebook-tit {
    width: 100%;
    height: 45px;
    line-height: 60px;
    text-align: left;
    font-size: 16px;
  }
  .div-facebook-tit {
    height: 60px;
    line-height: 90px;
    background-color: #f6f9fc;
  }

  .twitter-area,
  .facebook-post {
    overflow-y: scroll;
    height: 400px;
    -webkit-overflow-scrolling: touch;
  }
  .twitter-timeline {
    color: #253A7E;
  }

  @media screen and (max-width: 768px) {
    .row-news {
      height: 1120px;
    }
  }
</style>
