<template>
  <div class="container nkn-banner">

    <div class="div-blue-block hidden-sm hidden-xs"></div>

    <div class="row">
      <img class="img-vertical hidden-xs" src="./../assets/banner/CAPowered.png" alt="">
      <img class="img-vertical-xs hidden-lg hidden-md hidden-sm" src="./../assets/banner/CAPowered.png" alt="">
    </div>
    <div class="row">
      <img class="img-whatwedoline hidden-xs" src="./../assets/banner/whatwedoline2x.png" alt="">
      <img class="img-whatwedoline-xs hidden-lg hidden-md hidden-sm" src="./../assets/banner/whatwedoline2x.png" alt="">
    </div>

    <div class="row">
      <a v-if="$i18n.locale === 'en'" class="a-nkn-intro" target="_blank" :href="urlList.introductionEn">
        <div class="btn-about">
          {{ $t('banner.introduction') }}
          <img class="img-banner-right" src="./../assets/banner/white-right.png" alt="">
        </div>
      </a>
      <a v-if="$i18n.locale === 'zh'" class="a-nkn-intro" target="_blank" :href="urlList.introductionCn">
        <div class="btn-about">
          {{ $t('banner.introduction') }}
          <img class="img-banner-right" src="./../assets/banner/white-right.png" alt="">
        </div>
      </a>
      <router-link class="a-nkn-github" :to="{name: 'Calendar', params: {}}">
        <div class="btn-github">
          {{ $t('banner.sourceCode') }}
          <img class="img-banner-right" src="./../assets/banner/blue-right.png" alt="">
        </div>
      </router-link>
    </div>

    <div class="row hidden-sm hidden-xs">
      <img class="img-leftcorner" src="./../assets/banner/leftcorner2x.png" alt="">
    </div>

    <img class="nkn-banner-bg hidden-sm hidden-xs" src="./../assets/banner/sector2x.png" alt="">
    <img class="nkn-banner-img hidden-sm hidden-xs" src="./../assets/banner/biglogo.png" alt="">

    <img class="nkn-banner-bg-sm hidden-lg hidden-md visible-sm-12 hidden-xs" src="./../assets/banner/sector2x.png" alt="">
    <img class="nkn-banner-img-sm hidden-lg hidden-md visible-sm-12 hidden-xs" src="./../assets/banner/biglogo.png" alt="">

    <img class="nkn-banner-bg-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/banner/sector2x.png" alt="">
    <img class="nkn-banner-img-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/banner/biglogo.png" alt="">
  </div>
</template>

<script>
	export default {
		name: "banner",
    data() {
      return {
        urlList: {
          introductionEn: 'https://www.nkn.org/doc/NKN_Introduction_en.pdf',
          introductionCn: 'https://www.nkn.org/doc/NKN_Introduction_cn.pdf'
        }
      }
    },
    created() {
      // this.getConfig()
    },
    methods: {
      getConfig() {
        return this.axios.get(process.env.CONFIG_URL + 'config.json').then(response => {
          this.urlList.introductionEn = response.data.introduction_en
          this.urlList.introductionCn = response.data.introduction_cn
        }).catch(error => {
          this.urlList.introductionEn = this.$config.introduction_en
          this.urlList.introductionCn = this.$config.introduction_cn
        })
      }
    }
	}
</script>

<style scoped>
  .nkn-banner {
    position: relative;
  }
  .div-blue-block {
    position: absolute;
    top: -155px;
    width: 100%;
    left: 100%;
    height: 845px;
    background-color: #f7f8fc;
  }
  .img-vertical {
    margin-left: 50px;
    width: 34px;
  }
  .img-vertical-xs {
    margin-left: 40px;
    width: 33px;
  }
  .img-whatwedoline {
    margin: 50px 0 50px 50px;
    height: 2px;
    width: 160px;
  }
  .img-whatwedoline-xs {
    margin: 10px 0 50px 50px;
    height: 0;
  }

  .a-nkn-intro,
  .a-nkn-intro:hover,
  .a-nkn-github,
  .a-nkn-github:hover {
    text-decoration: none;
  }
  .a-nkn-github {
    color: #253a7e;
  }

  .btn-about,
  .btn-github {
    width: 260px;
    height: 76px;
    line-height: 76px;
    border-radius: 38px;
    text-align: center;
    cursor: pointer;
    position: relative;
    margin-left: 50px;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 0.1em;
  }
  .btn-about {
    background-color: #253a7e;
    color: white;
  }
  .btn-about:hover{
    background-color: #3F59AE;
    box-shadow: 0 0 20px 0 #43507D;
  }
  .btn-github:hover {
    box-shadow: 0 0 20px 0 #D6DBEE;
  }
  .btn-github {
    margin: 30px 0 50px 50px;
    border: 2px solid #253a7e;
    font-weight: 400;
  }
  .img-banner-right {
    width: 14px;
    position: absolute;
    top: 27px;
    right: 30px;
  }

  .img-leftcorner {
    margin-left: 50px;
    width: 260px;
  }

  @media screen and (max-width: 413px) {
    .img-leftcorner {
      width: 310px;
    }
  }

  /* 右上的大图标和底图： */
  .nkn-banner-bg {
    position: absolute;
    top: -155px;
    right: 0;
    z-index: -1;
    height: 845px;
  }
  .nkn-banner-img {
    position: absolute;
    top: 5px;
    right: 50px;
    height: 640px;
  }
  .nkn-banner-bg-sm {
    position: absolute;
    top: 30px;
    right: 0;
    z-index: -1;
    height: 420px;
  }
  .nkn-banner-img-sm {
    position: absolute;
    top: 70px;
    right: 10px;
    height: 360px;
  }
  .nkn-banner-bg-xs {
    position: absolute;
    top: -60px;
    right: 0;
    z-index: -1;
    height: 240px;
  }
  .nkn-banner-img-xs {
    position: absolute;
    top: -15px;
    right: 10px;
    height: 180px;
  }
</style>
