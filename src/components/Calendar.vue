<template>
  <div>
    <nav-bar></nav-bar>

    <div class="container-fluid">
      <div class="row row-calendar">
        <div class="container">
          <div class="row hidden-sm hidden-xs">
            <!--<p v-if="$i18n.locale === 'zh'">{{ $t('calendar.first') }}</p>-->
          </div>
          <div class="row hidden-sm hidden-xs">
            <div class="col-lg-3 col-md-3 div-calendar-txt">
            </div>
            <div class="col-lg-3 col-md-3 div-calendar-days div-calendar-days-left">
              <img class="img-calendar-days" src="./../assets/calendar/calender.png" alt="">
              <p>{{ days1 }}</p>
            </div>
            <div class="col-lg-3 col-md-3 div-calendar-days div-calendar-days-right">
              <img class="img-calendar-days" src="./../assets/calendar/calender.png" alt="">
              <p class="nkn-calendar-last-num">{{ days2 }}
                <span v-if="$i18n.locale === 'zh'" class="nkn-calendar-unit">{{ $t('calendar.first') }}</span>
                <span v-if="$i18n.locale === 'en'" class="nkn-calendar-unit-en">{{ $t('calendar.first') }}</span>
              </p>
            </div>
            <div class="col-lg-3 col-md-3 div-calendar-txt">
            </div>
          </div>

          <div class="row hidden-sm hidden-xs">
            <p>{{ $t('calendar.second') }}</p>
          </div>

          <div class="row hidden-lg hidden-md">
            <div class="row div-calendar-txt-xs">
              <!--<p v-if="$i18n.locale === 'zh'">{{ $t('calendar.first') }}</p>-->
            </div>
            <div class="row">
              <div class="col-sm-4 col-xs-4 col-sm-offset-2 col-xs-offset-2 div-calendar-days-xs div-calendar-days-left-xs">
                <img class="img-calendar-days-xs-left" src="./../assets/calendar/calender.png" alt="">
                <p>{{ days1 }}</p>
              </div>
              <div class="col-sm-4 col-xs-4 div-calendar-days-xs div-calendar-days-right-xs">
                <img class="img-calendar-days-xs-right" src="./../assets/calendar/calender.png" alt="">
                <p>{{ days2 }}
                  <span v-if="$i18n.locale === 'zh'" class="nkn-calendar-unit">{{ $t('calendar.first') }}</span>
                  <span v-if="$i18n.locale === 'en'" class="nkn-calendar-unit-en">{{ $t('calendar.first') }}</span>
                </p>
              </div>
            </div>
            <div class="row div-calendar-txt-xs">
              <p>{{ $t('calendar.second') }}</p>
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
  import moment from 'moment'

	export default {
    name: "calendar",
    data() {
      return {
        days1: 0,
        days2: 1
      }
    },
    created() {
      this.getDate()
    },
    methods: {
      getDate() {
        let target = moment('2018-07-02')
        let today = moment()
        let days = target.diff(today, 'days') + 1
        let msDiff = target.diff(today)

        if(msDiff < 0) {
          days -= 1
        }

        if(days < 0) {
          days = 0
        }

        if (days < 10) {
          this.days1 = 0
          this.days2 = days
        } else {
          this.days1 = parseInt(days / 10 % 10)
          this.days2 = days % 10
        }
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
  .row-calendar {
    position: relative;
    color: #253A7E;
    font-size: 24px;
    text-align: center;
    padding: 60px 0;
  }

  .div-calendar-txt {
    line-height: 570px;
    white-space: nowrap;
  }
  .div-calendar-days {
    font-size: 400px;
    position: relative;
  }
  .div-calendar-days-xs {
    font-size: 120px;
    position: relative;
  }

  .nkn-calendar-last-num {
    position: relative;
  }

  .div-calendar-days .nkn-calendar-unit {
    position: absolute;
    right: -60px;
    bottom: 100px;
    font-size: 24px !important;
  }

  .div-calendar-days .nkn-calendar-unit-en {
    position: absolute;
    right: -80px;
    bottom: 100px;
    font-size: 24px !important;
  }

  .div-calendar-days-xs .nkn-calendar-unit {
    position: absolute;
    right: -10px;
    bottom: 30px;
    font-size: 24px !important;
  }

  .div-calendar-days-xs .nkn-calendar-unit-en {
    position: absolute;
    right: -40px;
    bottom: 30px;
    font-size: 24px !important;
  }

  .img-calendar-days {
    position: absolute;
    left: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 97%;
  }
  .img-calendar-days-xs-left,
  .img-calendar-days-xs-right {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    height: 90%;
  }
  .img-calendar-days-xs-left {
    margin-left: 25px;
  }
  .img-calendar-days-xs-right {
    margin-right: 25px;
  }

  .div-calendar-days-left {
    padding-right: 5px;
  }
  .div-calendar-days-right {
    padding-left: 5px;
  }
  .div-calendar-days-left-xs {
    padding-left: 30px;
  }
  .div-calendar-days-right-xs {
    padding-right: 30px;
  }
</style>
