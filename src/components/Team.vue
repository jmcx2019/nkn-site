<template>
  <div class="row row-team">
    <p><strong>{{ $t('team.name') }}</strong></p>
    <img class="img-whatwedoline2 hidden-xs" src="./../assets/home/banner/whatwedoline2x.png" alt="">
    <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/whatwedoline2x.png" alt="">


    <div class="container">
      <div class="row row-team-introduction">
        <div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">{{ $t('team.introduction') }}</div>
      </div>
      <div class="row row-team-introduction-line"></div>

      <div class="row">
        <div class="hidden-sm hidden-xs">
          <div class="row">
            <div class="col-lg-5 col-md-5">
              <team-item-founder :member="founder"></team-item-founder>
            </div>
            <div class="col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-2">
              <team-item :member="memberR" :column="false"></team-item>
            </div>
          </div>

          <div class="row" v-for="(member, key) in allMembers" :key="key">
            <div class="row row-team-top-line"></div>

            <div class="col-lg-5 col-md-5">
              <team-item :member="member.left"></team-item>
            </div>
            <div class="col-lg-5 col-md-5 col-lg-offset-2 col-md-offset-2">
              <team-item :member="member.right"></team-item>
            </div>
          </div>
        </div>

        <div class="hidden-lg hidden-md col-sm-10 col-xs-12 col-sm-offset-1">
          <div class="row row-phone-style">
            <team-item-founder :member="founder"></team-item-founder>
          </div>
          <div class="row row-phone-style" v-for="(member, key) in members" :key="key">
            <div class="row row-team-top-line"></div>
            <team-item :member="member"></team-item>
          </div>
        </div>
      </div>

      <div class="row">
        <button class="btn btn-view-all" v-show="showViewAll" @click="viewAll">{{$t('team.btnName')}}</button>
      </div>

      <div class="row row-team-advisor">
        <div class="row row-team-top-line"></div>

        <div class="col-lg-4 col-md-4">
          <div>
            <img class="img-team-advisor" src="./../assets/team/Diffie.png" alt="">
          </div>
          <p class="p-team-advisor-name">{{ $t('team.whitfieldDiffie.name') }}</p>
          <div class="p-team-advisor-line"></div>
          <p class="p-team-advisor-tit">{{ $t('team.whitfieldDiffie.tit') }}</p>
        </div>
        <div class="col-lg-8 col-md-8">
          <div>
            <img class="img-team-advisor-cryptography" src="./../assets/team/cryptography.png" alt="">
          </div>
          <p class="p-team-advisor-introduction1">{{ $t('team.whitfieldDiffie.introduction1') }}</p>
          <p class="p-team-advisor-introduction2">{{ $t('team.whitfieldDiffie.introduction2') }}</p>

          <div>
            <img class="img-team-advisor-awards" src="./../assets/team/Awards.png" alt="">
          </div>
          <p class="p-team-advisor-introduction3">{{ $t('team.whitfieldDiffie.introduction3') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction4') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction5') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction6') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction7') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction8') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction9') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction10') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction11') }}</p>
          <p class="p-team-advisor-introduction4">{{ $t('team.whitfieldDiffie.introduction12') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TeamItem from './team/TeamItem'
  import TeamItemFounder from './team/TeamItemFounder'

	export default {
    name: "team",
    data() {
      return {
        showViewAll: true,
        founder: 'yanBoLi',
        memberR: 'bruceZLi',
        members: ['bruceZLi', 'justinWang', 'yiLunZhang'],
        allMembers: [{left: 'justinWang', right: 'yiLunZhang'}]
      }
    },
    methods: {
      viewAll() {
        this.showViewAll = false
        this.members = [
          'bruceZLi', 'justinWang', 'yiLunZhang', 'allenDixon', 'arronJow', 'oscarC',
          'mouXinMo', 'kingK', 'zhiGuoHong', 'chenXingLi', 'annieLiu'
        ]
        this.allMembers = [
          {left: 'justinWang', right: 'yiLunZhang'},
          {left: 'allenDixon', right: 'arronJow'},
          {left: 'oscarC', right: 'mouXinMo'},
          {left: 'kingK', right: 'zhiGuoHong'},
          {left: 'chenXingLi', right: 'annieLiu'}
        ]
      }
    },
    components: {
      TeamItem,
      TeamItemFounder
    }
  }
</script>

<style scoped>
  .row-team {
    background-color: white;
    position: relative;
    color: #253A7E;
    font-size: 24px;
    text-align: center;
    padding: 80px 0;
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

  .row-team-introduction {
    font-size: 18px;
    margin-bottom: 50px;
    text-align: left;
  }
  .row-team-introduction-line{
    width: 100%;
    height: 2px;
    background-color: #f5f5f5;
    margin-bottom: 40px;
    margin-left: 0;
    margin-right: 0;
  }

  .row-phone-style {
    padding: 0 15px;
  }

  .row-team-advisor {
    margin-top: 40px;
    text-align: left;
  }
  .img-team-advisor {
    width: 273px;
  }
  .img-team-advisor-cryptography {
    width: 30px;
    margin-bottom: 5px;
  }
  .img-team-advisor-awards {
    width: 32px;
    margin-bottom: 5px;
  }
  .p-team-advisor-name {
    font-size: 40px;
  }

  .p-team-advisor-name,
  .p-team-advisor-introduction1,
  .p-team-advisor-introduction3 {
    font-family: "Roboto","Helvetica Neue",Helvetica,Arial,sans-serif !important;
  }

  .row-team-top-line {
    width: 100%;
    height: 2px;
    background-color: #f5f5f5;
    margin: 25px 0;
  }

  .btn-view-all {
    margin-top: 20px;
    width: 150px;
    border: 1px solid #253A7E;
    background-color: white;
    color: #253A7E;
    font-size: 16px;
    font-weight: 300;
  }
  .btn-view-all:focus,
  .btn-view-all:hover {
    border: 1px solid white;
    background-color: #253A7E;
    color: white;
  }

  .p-team-advisor-line {
    height: 2px;
    background-color: #253A7E;
    width: 80%;
    margin-bottom: 20px;
  }
  .p-team-advisor-tit {
    font-size: 24px;
    color: #0071bc;
  }
  .p-team-advisor-introduction1 {
    font-size: 24px;
    font-weight: 500;
  }
  .p-team-advisor-introduction2 {
    font-size: 18px;
    margin-bottom: 30px;
  }
  .p-team-advisor-introduction3 {
    font-size: 24px;
  }
  .p-team-advisor-introduction4 {
    font-size: 18px;
  }
</style>
