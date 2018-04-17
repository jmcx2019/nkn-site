<template>
  <div class="row row-road-map">
    <p><strong>{{ $t('roadMap.name') }}</strong></p>
    <img class="img-whatwedoline2 hidden-xs" src="./../assets/home/banner/whatwedoline2x.png" alt="">
    <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/whatwedoline2x.png" alt="">

    <div class="row col-road-map-phrase hidden-xs">
      <div class="container">
        <div class="row">
          <img class="img-road-map-arrow hidden-xs" src="./../assets/road-map/Phase.png" alt="">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-road-map-phrase">
            <p class="p-phrase-content-1">
              <strong>{{ $t('roadMap.phrase1.time') }}</strong>
              {{ $t('roadMap.phrase1.content') }}
            </p>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-road-map-phrase">
            <p class="p-phrase-content-2">
              <strong>{{ $t('roadMap.phrase2.time') }}</strong>
              {{ $t('roadMap.phrase2.content') }}
            </p>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-road-map-phrase">
            <p class="p-phrase-content-3">
              <strong>{{ $t('roadMap.phrase3.time') }}</strong>
              {{ $t('roadMap.phrase3.content') }}
            </p>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-road-map-phrase">
            <p class="p-phrase-content-4">
              <strong>{{ $t('roadMap.phrase4.time') }}</strong>
              {{ $t('roadMap.phrase4.content') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--xs view-->
    <div class="row col-road-map-phrase-xs hidden-lg hidden-md hidden-sm">
      <div class="container">
        <div class="row">
          <img class="img-road-map-arrow-xs" src="./../assets/road-map/arrow.png" alt="">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-road-map-phrase-xs">
            <p class="p-phrase-tit">{{ $t('roadMap.phrase1.name') }}</p>
            <p class="p-phrase-content">{{ $t('roadMap.phrase1.content') }}</p>
            <img class="img-road-map-phrase" src="./../assets/road-map/roadmap.png" alt="">
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-road-map-phrase-xs">
            <p class="p-phrase-tit"><i class="fa fa-star" aria-hidden="true"></i> {{ $t('roadMap.phrase2.name') }}</p>
            <p class="p-phrase-content">{{ $t('roadMap.phrase2.content') }}</p>
            <img class="img-road-map-phrase" src="./../assets/road-map/roadmap.png" alt="">
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-road-map-phrase-xs">
            <p class="p-phrase-tit">{{ $t('roadMap.phrase3.name') }}</p>
            <p class="p-phrase-content">{{ $t('roadMap.phrase3.content') }}</p>
            <img class="img-road-map-phrase" src="./../assets/road-map/roadmap.png" alt="">
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-road-map-phrase-xs">
            <p class="p-phrase-tit">{{ $t('roadMap.phrase4.name') }}</p>
            <p class="p-phrase-content">{{ $t('roadMap.phrase4.content') }}</p>
            <img class="img-road-map-phrase" src="./../assets/road-map/roadmap.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "road-map"
	}
</script>

<style scoped>
  .row-road-map {
    height: 620px;
    background-color: #f6f9fc;
    position: relative;
    color: #253A7E;
    font-size: 24px;
    text-align: center;
    padding-top: 80px;
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

  .img-road-map-arrow {
    position: absolute;
    width: 1100px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .col-road-map-phrase {
    position: relative;
    text-align: left;
  }
  .p-phrase-content-1 {
    position: absolute;
    left: 48px;
    top: 100px;
    font-size: 18px;
    width: 180px;
  }
  .p-phrase-content-2 {
    position: absolute;
    left: 115px;
    top: 170px;
    font-size: 18px;
    width: 180px;
    color: #c93420;
  }
  .p-phrase-content-3 {
    position: absolute;
    left: 165px;
    top: 160px;
    font-size: 18px;
    width: 170px;
  }
  .p-phrase-content-4 {
    position: absolute;
    right: 0;
    top: 115px;
    font-size: 18px;
    width: 150px;
  }

  /*xs view*/
  .img-road-map-arrow-xs {
    position: absolute;
    width: 1100px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .col-road-map-phrase-xs {
    position: relative;
  }
  .p-phrase-tit {
     position: absolute;
     left: 0;
     right: 0;
     margin: auto;
     top:68px;
     color: white;
     font-weight: 300;
     font-size: 21px;
   }
  .p-phrase-content {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top:130px;
    color: white;
    font-weight: 300;
    font-size: 16px;
    width: 160px;
  }
  .img-road-map-phrase {
    margin-top: 60px;
    width: 270px;
  }
  .fa-star {
    color: yellow;
  }

  @media screen and (max-width: 1200px) {
    .p-phrase-content-1 {
      left: -50px;
    }
    .p-phrase-content-2 {
      left: -175px;
    }
    .p-phrase-content-3 {
      left: 650px;
    }
    .p-phrase-content-4 {
      right: -100px;
    }
  }
  @media screen and (max-width: 1110px) {
    .img-road-map-arrow {
      width: 770px;
    }
    .p-phrase-content-1 {
      left: 40px;
      top: 50px;
    }
    .p-phrase-content-2 {
      left: -175px;
      top: 130px;
    }
    .p-phrase-content-3 {
      left: 550px;
      top: 110px;
    }
    .p-phrase-content-4 {
      right: 0;
      top: 90px;
    }
  }
  @media screen and (max-width: 992px) {
    .img-road-map-arrow {
      width: 770px;
    }
    .p-phrase-content-1 {
      left: -30px;
      top: 40px;
    }
    .p-phrase-content-2 {
      left: -175px;
      top: 140px;
    }
    .p-phrase-content-3 {
      left: 450px;
      top: 110px;
    }
    .p-phrase-content-4 {
      right: -60px;
      top: 90px;
    }
  }
  @media screen and (max-width: 768px) {
    .row-road-map {
      height: 1360px;
    }
  }
  @media screen and (max-width: 414px) {
    .row-road-map {
      height: 1360px;
    }
    .img-road-map-arrow {
      width: 400px;
    }
  }
  @media screen and (max-width: 400px) {
    .row-road-map {
      height: 1360px;
    }
    .img-road-map-arrow {
      width: 370px;
    }
  }
</style>
