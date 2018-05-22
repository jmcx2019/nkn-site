<template>
  <div class="row row-team">
    <p><strong>{{ $t('team.name') }}</strong></p>
    <img class="img-whatwedoline2 hidden-xs" src="./../assets/banner/whatwedoline2x.png" alt="">
    <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/banner/whatwedoline2x.png" alt="">

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="div-team-item" v-on:mouseenter="enableIcon(0)" v-on:mouseleave="disabledIcon(0)">
            <div class="row">
              <img class="img-team-avatar" src="../assets/team/avatar/Yanbo.png" alt="">
            </div>
            <div class="row row-team-name">
              {{ $t('team.yanBoLi.name') }}
            </div>
            <div class="row row-team-tit">
              <p>{{ $t('team.yanBoLi.tit1') }}</p>
              <p>{{ $t('team.yanBoLi.tit2') }}</p>
            </div>
            <div class="row row-team-desc">
              <p>{{ $t('team.yanBoLi.desc1') }}</p>
              <p>{{ $t('team.yanBoLi.desc2') }}</p>
            </div>
            <div class="row row-team-link">
              <a target="_blank" :href="$t('team.yanBoLi.linkedin')">
                <img v-show="!iconShow[0]" src="./../assets/team/link/linkedin.png" alt="">
                <img v-show="iconShow[0]" src="./../assets/team/link/linkedin-hover.png" alt="">
              </a>
              <a target="_blank" :href="$t('team.yanBoLi.github')">
                <img v-show="!iconShow[0]" src="./../assets/team/link/github.png" alt="">
                <img v-show="iconShow[0]" src="./../assets/team/link/github-hover.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="div-team-item" v-on:mouseenter="enableIcon(2)" v-on:mouseleave="disabledIcon(2)">
            <div class="row">
              <img class="img-team-avatar" src="./../assets/team/avatar/bruceZLi.png" alt="">
            </div>
            <div class="row row-team-name">
              {{ $t('team.bruceZLi.name') }}
            </div>
            <div class="row row-team-tit">
              <p>{{ $t('team.bruceZLi.tit') }}</p>
            </div>
            <div class="row row-team-desc">
              <p>{{ $t('team.bruceZLi.desc1') }}</p>
              <p>{{ $t('team.bruceZLi.desc2') }}</p>
            </div>
            <div class="row row-team-link">
              <a target="_blank" :href="$t('team.bruceZLi.linkedin')">
                <img v-show="!iconShow[2]" src="./../assets/team/link/linkedin.png" alt="">
                <img v-show="iconShow[2]" src="./../assets/team/link/linkedin-hover.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="div-team-item" v-on:mouseenter="enableIcon(3)" v-on:mouseleave="disabledIcon(3)">
            <div class="row">
              <img class="img-team-avatar" src="../assets/team/avatar/Yilun.png" alt="">
            </div>
            <div class="row row-team-name">
              {{ $t('team.yiLunZhang.name') }}
            </div>
            <div class="row row-team-tit">
              <p>{{ $t('team.yiLunZhang.tit') }}</p>
            </div>
            <div class="row row-team-desc">
              <p>{{ $t('team.yiLunZhang.desc1') }}</p>
              <p>{{ $t('team.yiLunZhang.desc2') }}</p>
            </div>
            <div class="row row-team-link">
              <a target="_blank" :href="$t('team.yiLunZhang.linkedin')">
                <img v-show="!iconShow[3]" src="./../assets/team/link/linkedin.png" alt="">
                <img v-show="iconShow[3]" src="./../assets/team/link/linkedin-hover.png" alt="">
              </a>
              <a target="_blank" :href="$t('team.yiLunZhang.github')">
                <img v-show="!iconShow[3]" src="./../assets/team/link/github.png" alt="">
                <img v-show="iconShow[3]" src="./../assets/team/link/github-hover.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="div-team-item" v-on:mouseenter="enableIcon(4)" v-on:mouseleave="disabledIcon(4)">
            <div class="row">
              <img class="img-team-avatar" src="../assets/team/avatar/Justin.png" alt="">
            </div>
            <div class="row row-team-name">
              {{ $t('team.justinWang.name') }}
            </div>
            <div class="row row-team-tit">
              <p>{{ $t('team.justinWang.tit') }}</p>
            </div>
            <div class="row row-team-desc">
              <p>{{ $t('team.justinWang.desc1') }}</p>
              <p>{{ $t('team.justinWang.desc2') }}</p>
            </div>
            <div class="row row-team-link">
              <a target="_blank" :href="$t('team.justinWang.linkedin')">
                <img v-show="!iconShow[4]" src="./../assets/team/link/linkedin.png" alt="">
                <img v-show="iconShow[4]" src="./../assets/team/link/linkedin-hover.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="div-team-item" v-on:mouseenter="enableIcon(5)" v-on:mouseleave="disabledIcon(5)">
            <div class="row">
              <img class="img-team-avatar" src="./../assets/team/avatar/Allen.png" alt="">
            </div>
            <div class="row row-team-name">
              {{ $t('team.allenDixon.name') }}
            </div>
            <div class="row row-team-tit">
              <p>{{ $t('team.allenDixon.tit') }}</p>
            </div>
            <div class="row row-team-desc">
              <p>{{ $t('team.allenDixon.desc1') }}</p>
              <p>{{ $t('team.allenDixon.desc2') }}</p>
            </div>
            <div class="row row-team-link">
              <a target="_blank" :href="$t('team.allenDixon.linkedin')">
                <img v-show="!iconShow[5]" src="./../assets/team/link/linkedin.png" alt="">
                <img v-show="iconShow[5]" src="./../assets/team/link/linkedin-hover.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="div-team-item" v-on:mouseenter="enableIcon(6)" v-on:mouseleave="disabledIcon(6)">
            <div class="row">
              <img class="img-team-avatar" src="./../assets/team/avatar/Chris.png" alt="">
            </div>
            <div class="row row-team-name">
              {{ $t('team.chrisWu.name') }}
            </div>
            <div class="row row-team-tit">
              <p>{{ $t('team.chrisWu.tit') }}</p>
            </div>
            <div class="row row-team-desc">
              <p>{{ $t('team.chrisWu.desc1') }}</p>
              <p>{{ $t('team.chrisWu.desc2') }}</p>
            </div>
            <div class="row row-team-link">
              <a target="_blank" :href="$t('team.chrisWu.linkedin')">
                <img v-show="!iconShow[6]" src="./../assets/team/link/linkedin.png" alt="">
                <img v-show="iconShow[6]" src="./../assets/team/link/linkedin-hover.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Advisor: -->
      <div class="row row-team-advisor">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 hidden-xs">
            <img class="img-team-advisor" src="./../assets/team/Diffie.png">
          </div>
          <div class=" hidden-lg hidden-md hidden-sm col-xs-12 img-team-advisor-xs">
            <img class="img-team-advisor" src="./../assets/team/Diffie.png">
          </div>
          <div class="col-lg-9 col-md-8 col-sm-6 col-xs-12 advisor-name-tit">
            <p class="p-team-advisor-tit">{{ $t('team.whitfieldDiffie.tit') }}</p>
            <div class="p-team-advisor-line"></div>
            <img src="./../assets/team/NKN_BG.png" class="hidden-xs lg-md-sm-advisor-bg">
            <img src="./../assets/team/NKN_BG.png" class="hidden-lg hidden-md hidden-sm xs-advisor-bg">
            <a class="a-advisor-name" target="_blank" :href="$t('team.whitfieldDiffie.url')">
              <p class="p-team-advisor-name">{{ $t('team.whitfieldDiffie.name') }}</p>
            </a>
            <div class="cryptography-turing-award">
              <div class="row">
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2">
                  <img src="./../assets/team/cryptography.png" class="img-cryptography">
                </div>
                <div class="col-lg-11 col-md-11 col-sm-11 col-xs-10">
                  <p class="p-team-advisor-introduction1 introduction-cryptography">{{ $t('team.whitfieldDiffie.introductionCryptography') }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2">
                  <img src="./../assets/team/TuringAward.png" class="img-turing-award">
                </div>
                <div class="col-lg-11 col-md-11 col-sm-11 col-xs-10">
                  <p class="p-team-advisor-introduction1 introduction-turing-award">{{ $t('team.whitfieldDiffie.introductionTuringAward') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row advisor-introduction-area">
          <p class="p-team-advisor-introduction3">{{ $t('team.whitfieldDiffie.introductionTit') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction1') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction2') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction3') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction4') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction5') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction6') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction7') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction8') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction9') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    name: "team",
    data() {
      return {
        iconShow: [false, false, false, false, false, false, false]
      }
    },
    methods: {
      enableIcon($id) {
        this.$set(this.iconShow, $id, true);
      },
      disabledIcon($id) {
        this.$set(this.iconShow, $id, false);
      }
    }
  }
</script>

<style scoped>
  .row-team {
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

  /* Team Models Start */
  .div-team-item {
    background-color: white;
    padding: 20px 0 15px;
    height: 480px;
    margin-bottom: 60px;
    position: relative;
    box-shadow: 0 0 3px 0 #D6DBEE;
  }
  .div-team-item:hover {
    box-shadow: 0 0 20px 0 #D6DBEE;
  }
  .img-team-avatar {
    width: 160px;
    margin-bottom: 30px;
  }
  .row-team-name {
    font-size: 30px;
    font-weight: 500;
    color: #253a7e;
  }
  .row-team-tit {
    margin-top: 10px;
    font-size: 15px;
    font-weight: 500;
    color: #0071bc;
  }
  .row-team-desc {
    font-size: 14px;
    color: #a6a6a6;
  }
  .row-team-desc > p {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  .row-team-link {
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
  }
  .row-team-link > a > img {
    width: 30px;
    margin: 0 8px;
  }
  /* Team Models End */

  .row-team-advisor {
    margin-top: 40px;
    text-align: left;
    max-width: 740px;
    margin-left: auto;
    margin-right: auto;
  }
  .img-team-advisor {
    width: 200px;
    z-index: 99;
    position: relative;
  }
  .img-team-advisor-xs {
    text-align: center;
    margin-bottom: 20px;
  }
  .p-team-advisor-name {
    font-size: 40px;
    position: relative;
  }
  .a-advisor-name {
    color: #253a7e;
    text-decoration: none;
  }
  .a-advisor-name:hover {
    color: #465eae;
    text-decoration: none;
  }

  .cryptography-turing-award {
    margin-top: 20px;
  }

  .img-cryptography {
    width: 36px
  }

  .advisor-name-tit {
    padding-left: 60px;
    position: relative;
  }

  .lg-md-sm-advisor-bg {
    position: absolute;
    width: 100%;
    left: 0;
  }
  .xs-advisor-bg {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    padding: 0 15px;
  }

  .p-team-advisor-name,
  .p-team-advisor-introduction1,
  .p-team-advisor-introduction3 {
    font-family: "Roboto","Helvetica Neue",Helvetica,Arial,sans-serif !important;
  }

  .introduction-cryptography {
    position: relative;
    line-height: 48px;
    padding-left: 5px;
  }
  .introduction-turing-award {
    position: relative;
    line-height: 40px;
    padding-left: 5px;
  }
  .img-turing-award {
    width: 36px;
  }

  .advisor-introduction-area {
    margin-top: 46px;
    padding: 0 30px;
  }
  .p-team-advisor-line {
    height: 2px;
    background-color: #253A7E;
    width: 30%;
    margin-bottom: 20px;
  }
  .p-team-advisor-tit {
    font-size: 24px;
    color: #0071bc;
  }
  .p-team-advisor-introduction1 {
    font-size: 18px;
    font-weight: 500;
  }
  .p-team-advisor-introduction3 {
    font-size: 24px;
  }
  .p-team-advisor-introduction4 {
    font-size: 18px;
  }
</style>
