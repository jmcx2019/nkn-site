<template>
  <nav class="navbar navbar-default fixed-top">
    <div class="container-fluid container-fluid-fix">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <img src="./../assets/Contactlogo2x.png" alt="">
      </div>
      <div class="hidden-xs">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/" class="scroll-top" @click="scrollTop">{{ $t('navbar.home') }}</router-link></li>

          <li><a class="scroll-bottom" @click="scrollTeam">{{ $t('navbar.team') }}</a></li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('navbar.documents') }}<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a target="_blank" :href="urlList.introduction">{{ $t('navbar.introduction') }}</a></li>
              <li><a target="_blank" :href="urlList.whitePaper">{{ $t('navbar.whitepaper') }}</a></li>
            </ul>
          </li>

          <!--<li><a class="scroll-bottom" target="_blank" :href="urlList.introduction">{{ $t('navbar.introduction') }}</a></li>-->

          <li><a class="scroll-bottom" @click="scrollBottom">{{ $t('navbar.contact') }}</a></li>

          <!--<li><a class="scroll-bottom" @click="changeLocale">{{ $t('language.name') }}</a></li>-->
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import LangStorage from './../helpers/lang'

	export default {
    name: "NavBar",
    data() {
      return {
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
      scrollBottom() {
        $(window).scrollTop($("#home").get(0).scrollHeight)
      },
      scrollTop() {
        $(window).scrollTop(0)
      },
      scrollTeam() {
        $(window).scrollTop(2500)
      },
      changeLocale() {
        let locale = this.$i18n.locale
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        LangStorage.setLang(this.$i18n.locale)
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
  .container-fluid-fix {
    padding: 0;
  }
  .navbar-default {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
    height: 90px;
  }
  .navbar-header {
    height: 90px;
  }
  .navbar-header img{
    margin-top: 20px;
    margin-left: 35px;
    width: 134px;
  }

  .navbar-nav {
    margin-right: 25px;
  }
  .navbar-nav > li > a,
  .navbar-nav > li > a:active,
  .navbar-nav > li > a:focus,
  .navbar-nav > li > a:visited {
    font-size: 14px;
    font-weight: 400;
    color: #253A7E;
    background-color: transparent;
  }
  .navbar-default .navbar-nav>.open>a,
  .navbar-default .navbar-nav>.open>a:hover,
  .navbar-default .navbar-nav>.open>a:focus {
    color: #c93420;
    background-color: transparent;
  }
  .dropdown-menu>li>a {
    color: #253A7E;
    background-color: white;
  }
  .dropdown-menu>li>a:hover,
  .dropdown-menu>li>a:focus {
    color: #c93420;
    background-color: white;
  }

  .scroll-top:hover,
  .scroll-bottom:hover {
    cursor: pointer;
  }
  .navbar-nav > li > a:hover {
    color: #c93420;
  }
</style>
