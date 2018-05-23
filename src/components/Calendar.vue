<template>
  <div>
    <nav-bar></nav-bar>

    <div class="container-fluid">
      <div class="row row-calendar">
        <div class="container">
          <div class="row hidden-sm hidden-xs">
            <div class="col-lg-3 col-md-3 div-calendar-txt">
            </div>
            <div class="col-lg-3 col-md-3 div-calendar-days div-calendar-days-left">
              <img class="img-calendar-days" src="./../assets/calendar/calender.png" alt="">
              <p>{{ days1 }}</p>
            </div>
            <div class="col-lg-3 col-md-3 div-calendar-days div-calendar-days-right">
              <img class="img-calendar-days" src="./../assets/calendar/calender.png" alt="">
              <p>{{ days2 }}</p>
            </div>
            <div class="col-lg-3 col-md-3 div-calendar-txt">
            </div>
          </div>

          <div class="row hidden-sm hidden-xs">
            <p>{{ $t('calendar.first') }}</p>
          </div>

          <div class="row hidden-lg hidden-md">
            <div class="row div-calendar-txt-xs">
              <!--<p>{{ $t('calendar.first') }}</p>-->
            </div>
            <div class="row">
              <div class="col-sm-4 col-xs-4 col-sm-offset-2 col-xs-offset-2 div-calendar-days-xs div-calendar-days-left-xs">
                <img class="img-calendar-days-xs-left" src="./../assets/calendar/calender.png" alt="">
                <p>{{ days1 }}</p>
              </div>
              <div class="col-sm-4 col-xs-4 div-calendar-days-xs div-calendar-days-right-xs">
                <img class="img-calendar-days-xs-right" src="./../assets/calendar/calender.png" alt="">
                <p>{{ days2 }}</p>
              </div>
            </div>
            <div class="row div-calendar-txt-xs">
              <p>{{ $t('calendar.first') }}</p>
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
        let myDate = new Date()
        let now = myDate.getFullYear() + '/' + (myDate.getMonth() + 1) + '/' + myDate.getDate()
        let days = this.dateDiff(now, '2018/07/02')
        if (days < 10) {
          this.days1 = 0
          this.days2 = days
        } else {
          this.days1 = parseInt(days / 10 % 10)
          this.days2 = days % 10
        }
      },
      dateDiff(sDate1, sDate2) { //sDate1和sDate2是2002-12-18格式
        let aDate, oDate1, oDate2, iDays
        aDate = sDate1.split("-")
        oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]) //转换为12-18-2002格式
        aDate = sDate2.split("-")
        oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0])
        iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
        return iDays
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
    padding: 110px 0;

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
