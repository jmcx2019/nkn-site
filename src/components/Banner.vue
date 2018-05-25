<template>
  <div class="row nkn-banner">

    <div class="container">
      <div class="row row-banner-slogan hidden-xs">
        <p>{{ $t('banner.slogan') }}</p>
      </div>
      <div class="row row-banner-slogan-xs hidden-lg hidden-md hidden-sm">
        <p>{{ $t('banner.slogan') }}</p>
      </div>

      <div class="row hidden-xs">
        <a v-if="$i18n.locale === 'en'" class="a-btn-hover btn-about2 btn-left" target="_blank" :href="urlList.introductionEn">
          {{ $t('banner.introduction') }}
        </a>
        <a v-if="$i18n.locale === 'zh'" class="a-btn-hover btn-about2 btn-left" target="_blank" :href="urlList.introductionCn">
          {{ $t('banner.introduction') }}
        </a>

        <router-link v-show="$i18n.locale === 'en'" class="a-nkn-github2 btn-github2 btn-center" :to="{name: 'Calendar', params: {}}">
          {{ $t('banner.sourceCode') }}
        </router-link>

        <router-link v-show="$i18n.locale === 'zh'" class="a-nkn-github2 btn-github2 btn-center" :to="{name: 'Calendar', params: {}}">
          {{ $t('banner.sourceCode') }}
        </router-link>
      </div>

      <div class="row hidden-lg hidden-md hidden-sm">
        <div class="col-lg-6 col-md-6 col-sm-6 col-banner-xs-">
          <a v-if="$i18n.locale === 'en'" class="a-btn-hover btn-about2 btn-center" target="_blank" :href="urlList.introductionEn">
            {{ $t('banner.introduction') }}
          </a>
          <a v-if="$i18n.locale === 'zh'" class="a-btn-hover btn-about2 btn-center" target="_blank" :href="urlList.introductionCn">
            {{ $t('banner.introduction') }}
          </a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <router-link v-show="$i18n.locale === 'en'" class="a-nkn-github2 btn-github2 btn-center" :to="{name: 'Calendar', params: {}}">
            {{ $t('banner.sourceCode') }}
          </router-link>

          <router-link v-show="$i18n.locale === 'zh'" class="a-nkn-github2 btn-github2 btn-center" :to="{name: 'Calendar', params: {}}">
            {{ $t('banner.sourceCode') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "banner",
    data() {
      return {
        urlList: {
          introductionEn: process.env.DOC_URL + 'NKN_Introduction_en.pdf',
          introductionCn: process.env.DOC_URL + 'NKN_Introduction_cn.pdf'
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
    height: 640px;
  }
  .row-banner-slogan,
  .row-banner-slogan-xs {
    color: white;
    position: relative;
    margin: 270px 0 20px;
    font-size: 18px;
    line-height: 32px;
    padding: 15px;
    max-width: 480px;
    letter-spacing: 0.05em;
  }
  .row-banner-slogan-xs {
    margin-top: 100px;
    width: 100%;
    text-align: left;
  }

  .a-btn-hover,
  .btn-about2,
  .btn-github2 {
    width: 160px;
    height: 56px;
    line-height: 52px;
    border-radius: 38px;
    text-align: center;
    cursor: pointer;
    position: relative;
    margin-left: 25px;
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 0.1em;
    background-color: #0b1943;
    border: #4d6ec3 solid 2px;
    color: white;
  }

  .btn-github2.lg-btn-github2 {
    margin-left: 60px;
  }
  .btn-left {
    float: left;
  }
  .btn-center {
    margin-bottom: 20px;
    float: left;
  }
  .btn-about2:hover,
  .btn-github2:hover {
    background-color: #4f68e1;
    text-decoration: none;
    box-shadow: 0 0 20px 0 #4f68e1;
  }
</style>
