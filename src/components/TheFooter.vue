<template>
  <div class="footer row">
    <div class="community-area-lg-md-sm row hidden-xs">
      <div class="col-lg-2 col-md-2 col-sm-2 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">
        <p>{{ $t('footer.home') }}</p>
        <div>
          <a class="community-area-lg-md-sm-a-21 go-to-home" @click="scrollTop">
            <span><i class="fa fa-home" aria-hidden="true"></i></span>
            <span class="community-area-lg-md-sm-name">{{ $t('footer.homepage') }}</span>
          </a>
        </div>
        <div>
          <a class="community-area-lg-md-sm-a-21" href="mailto:contact@nkn.org">
            <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
            <span class="community-area-lg-md-sm-name">{{ $t('footer.email') }}</span>
          </a>
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2">
        <p>{{ $t('footer.community') }}</p>
        <div>
          <a class="community-area-lg-md-sm-a-21" target="_blank" href="https://t.me/nknorg">
            <span><i class="fa fa-send" aria-hidden="true"></i></span>
            <span class="community-area-lg-md-sm-name">{{ $t('footer.telegram') }}</span>
          </a>
        </div>
        <div>
          <a class="community-area-lg-md-sm-a-21" target="_blank" href="https://twitter.com/NKN_ORG">
            <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
            <span class="community-area-lg-md-sm-name">{{ $t('footer.twitter') }}</span>
          </a>
        </div>
        <div>
          <a class="community-area-lg-md-sm-a-21" target="_blank" href="https://www.facebook.com/nkn.org">
            <span><i class="fa fa-facebook" aria-hidden="true"></i></span>
            <span class="community-area-lg-md-sm-name">{{ $t('footer.facebook') }}</span>
          </a>
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2">
        <p>{{ $t('footer.resource') }}</p>
        <div>
          <a class="community-area-lg-md-sm-a-21" target="_blank" href="https://github.com/nknorg">
            <span><i class="fa fa-github" aria-hidden="true"></i></span>
            <span class="community-area-lg-md-sm-name">{{ $t('footer.gitHub') }}</span>
          </a>
        </div>
        <div>
          <a class="community-area-lg-md-sm-a-21" target="_blank" :href="urlList.introduction">
            <span><i class="fa fa-file-pdf-o" aria-hidden="true"></i></span>
            <span class="community-area-lg-md-sm-name">{{ $t('footer.introduction') }}</span>
          </a>
        </div>
        <div>
          <a class="community-area-lg-md-sm-a-21" target="_blank" :href="urlList.whitePaper">
            <span><i class="fa fa-file-pdf-o" aria-hidden="true"></i></span>
            <span class="community-area-lg-md-sm-name">{{ $t('footer.whitepaper') }}</span>
          </a>
        </div>
      </div>

      <div class="col-lg-5 col-md-5 col-sm-5">
        <p>{{ $t('footer.contact.content') }}</p>
        <a class="email-address" href="mailto:contact@nkn.org">{{ $t('footer.contact.email') }}</a>
      </div>
    </div>

    <div class="community-area-xs row hidden-lg hidden-md hidden-sm visible-xs-12">
      <a href="mailto:contact@nkn.org"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
      <a target="_blank" href="https://t.me/nknorg"><i class="fa fa-send" aria-hidden="true"></i></a>
      <a target="_blank" href="https://github.com/nknorg"><i class="fa fa-github" aria-hidden="true"></i></a>
      <a target="_blank" href="https://www.facebook.com/nkn.org"><i class="fa fa-facebook" aria-hidden="true"></i></a>

      <div>
        <a class="btn a-footer-introduction" target="_blank" :href="urlList.introduction"><i class="fa fa-file-pdf-o" aria-hidden="true"></i>{{ $t('footer.introduction') }}</a>
      </div>
      <div>
        <a class="btn a-footer-white-paper" target="_blank" :href="urlList.whitePaper"><i class="fa fa-file-pdf-o" aria-hidden="true"></i>{{ $t('footer.whitepaper') }}</a>
      </div>
    </div>
    <div class="row row-footer-further hidden-lg hidden-md hidden-sm visible-xs-12">
      <p>{{ $t('footer.contact.content') }}</p>
      <a class="email-address-xs" href="mailto:contact@nkn.org">{{ $t('footer.contact.email') }}</a>
    </div>

    <div class="div-copy-right-line hidden-xs"></div>
    <p class="copyright">{{ $t('copyRight') }}</p>
  </div>
</template>

<script>
	export default {
    name: "the-footer",
    data() {
      return {
        email: '',
        content: '',
        disabledVal: false,
        completed: false,
        urlList: {
          introduction: '',
          whitePaper: ''
        }
      }
    },
    created() {
      this.getConfig()
    },
    methods: {
      scrollTop() {
        $(window).scrollTop(0)
      },
      getConfig() {
        return this.axios.get(process.env.CONFIG_URL + 'config.json').then(response => {
          this.urlList.introduction = response.data.introduction
          this.urlList.whitePaper = response.data.whitepaper
        }).catch(error => {
          this.urlList.introduction = this.$config.introduction
          this.urlList.whitePaper = this.$config.whitePaper
        })
      }
    }
  }
</script>

<style scoped>
  /*****************************/
  /* 以下是提交邮箱、联系方式等 */
  /*****************************/
  .footer {
    position: relative;
    color: white;
    text-align: center;
    height: 360px;
    background-color: #253A7E;
    padding-top: 60px;
  }

  .community-area-lg-md-sm {
    text-align: left;
  }
  .community-area-lg-md-sm > div > p {
    font-size: 18px;
  }
  .community-area-lg-md-sm > div > div {
    margin-top: 20px;
  }

  .community-area-lg-md-sm-a-21 {
    color: white;
    text-decoration: none;
  }
  .community-area-lg-md-sm-a-21:hover {
    color: #c93420;
  }
  .community-area-lg-md-sm-a-21 {
    font-size: 21px;
  }
  .community-area-lg-md-sm-name {
    font-weight: 200;
    font-size: 14px;
    position: absolute;
    line-height:31px;
    left: 50px;
  }

  .go-to-home:hover {
    cursor: pointer;
  }

  .community-area-xs {
    text-align: center;
    font-size: 28px;
    margin-bottom: 35px;
  }
  .community-area-xs > a {
    color: white;
    margin: 0 15px;
  }

  .email-address,
  .email-address-xs {
    margin-top: 32px;
    font-size: 18px;
    color: #58b4e2;
    text-decoration: underline;
  }

  .div-copy-right-line {
    position: absolute;
    background-color: white;
    height: 1px;
    width: 100%;
    bottom: 60px;
  }
  .copyright {
    position: absolute;
    color: white;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 12px;
    font-weight: 100;
  }

  .row-footer-further {
    margin-top: 70px;
  }

  .a-footer-introduction {
    margin-top: 30px;
  }
  .a-footer-white-paper {
    margin-top: 10px;
  }
  .a-footer-introduction,
  .a-footer-white-paper {
    width: 240px;
    height: 32px;
    line-height: 32px;
    border: 1px solid white;
    font-size: 16px;
    font-weight: 100;
    color: white;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    .footer {
      height: 420px;
    }
    .copyright {
      bottom: 14px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  /*input placeholder字体颜色*/
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color: #e4e4e4;}
  input:-moz-placeholder, textarea:-moz-placeholder {color:#e4e4e4;}
  input::-moz-placeholder, textarea::-moz-placeholder {color:#e4e4e4;}
  input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:#e4e4e4;}
</style>
