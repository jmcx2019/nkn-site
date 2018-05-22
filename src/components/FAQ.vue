<template>
  <div>
    <nav-bar></nav-bar>

    <div class="container-fluid">
      <div class="row faq-tit-area">
        <p><strong>{{ $t('faq.name') }}</strong></p>
        <div class="tit-bottom-line hidden-xs"></div>
        <div class="tit-bottom-line-xs hidden-lg hidden-md hidden-sm visible-xs-12"></div>
      </div>

      <div class="row row-faq">
        <div class="container">
          <div class="row row-faq-qa" v-for="n in 11">
            <div class="faq-question">
              <div class="span-num-style">{{ n }}</div>
              <span class="faq-question-txt">{{ $t('faq.q' + n) }}</span>
              <!--<img class="span-tit-arrow" src="./../assets/faq/arrow-down.png" alt="">-->
            </div>
            <div class="faq-answer-txt">
              <p>{{ $t('faq.a' + n) }}</p>
            </div>
          </div>
        </div>
      </div>

      <the-footer></the-footer>
      <!--<nav-bottom></nav-bottom>-->
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import TheFooter from './TheFooter'
  import NavBottom from './NavBottom'

	export default {
		name: "FAQ",
    data() {
      return {
        isShow: [false, false, false, false, false, false, false, false, false, false, false]
      }
    },
    components: {
      NavBar,
      TheFooter,
      NavBottom
    }
	}
</script>

<style scoped>
  .faq-tit-area {
    padding-top: 50px;
    background-color: #253a7e;
    color: white;
    font-size: 24px;
    text-align: center;
  }

  .row-faq {
    position: relative;
    background-color: white;
    font-size: 24px;
    text-align: center;
    padding-bottom: 100px;
    margin-top: 60px;
  }

  .tit-bottom-line,
  .tit-bottom-line-xs {
    height: 4px;
    width: 64px;
    margin: 20px auto 100px auto;
    background-color: white;
    border-radius: 2px;
  }
  .tit-bottom-line-xs {
    height: 2px;
    margin: 10px auto 30px auto;
  }

  .row-faq-qa {
    text-align: left;
    margin-bottom: 40px;
    position: relative;
    padding: 0 15px;
  }
  .row-faq-qa:hover {
    background-color: #f9faff;
  }
  .span-num-style {
    background-color: #253a7e;
    color: white;
    width: 34px;
    border-radius: 34px;
    position: absolute;
    text-align: center;
  }
  .span-tit-arrow {
    position: absolute;
    top: 12px;
    right: 0;
    width: 12px;
  }
  .faq-question-txt{
    margin-left: 50px;
  }
  .faq-answer-txt {
    margin-top: 20px;
    margin-left: 50px;
    font-size: 18px;
    font-weight: 300;
  }
</style>
