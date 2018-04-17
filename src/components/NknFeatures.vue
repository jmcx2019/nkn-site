<template>
  <div class="row row-nkn-features">
    <p><strong>{{ $t('feature.name') }}</strong></p>
    <img class="img-whatwedoline2 hidden-xs" src="./../assets/home/banner/whatwedoline2x.png" alt="">
    <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/whatwedoline2x.png" alt="">

    <div style="position: relative;">
      <img class="img-feature" src="./../assets/feature/code_logo.png" alt="">

      <div class="feature-block-area hidden-xs">
        <div class="col-lg-2 col-md-2 col-sm-2 feature-block-1"><div>{{ $t('feature.block1') }}</div></div>
        <div class="col-lg-2 col-md-2 col-sm-2 feature-block-2"><div>{{ $t('feature.block2') }}</div></div>
        <div class="col-lg-4 col-md-4 col-sm-4 feature-block-3"><div>{{ $t('feature.block3') }}</div></div>
        <div class="col-lg-2 col-md-2 col-sm-2 feature-block-4"><div>{{ $t('feature.block4') }}</div></div>
        <div class="col-lg-2 col-md-2 col-sm-2 feature-block-5"><div>{{ $t('feature.block5') }}</div></div>
      </div>

      <div class="feature-block-area-xs hidden-lg hidden-md hidden-sm">
        <div class="feature-block-xs-1"><div>{{ $t('feature.block1') }}</div></div>
        <div class="feature-block-xs-2"><div>{{ $t('feature.block2') }}</div></div>
        <div class="feature-block-xs-3"><div>{{ $t('feature.block3') }}</div></div>
        <div class="feature-block-xs-4"><div>{{ $t('feature.block4') }}</div></div>
        <div class="feature-block-xs-5"><div>{{ $t('feature.block5') }}</div></div>
      </div>
    </div>

    <div class="feature-footer hidden-xs">{{ $t('feature.footer') }}</div>
    <div class="feature-footer-xs">{{ $t('feature.footer') }}</div>
  </div>
</template>

<script>
	export default {
		name: "nkn-features"
	}
</script>

<style scoped>
  .row-nkn-features {
    height: 590px;
    background-color: white;
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

  .feature-block-area {
    width: 1280px;
    height: 106px;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .feature-block-area > div > div {
    background-color: #253A7E;
    color: white;
  }
  .feature-block-1 > div,
  .feature-block-2 > div,
  .feature-block-4 > div,
  .feature-block-5 > div {
    margin-top: 15px;
    width: 225px;
    height: 76px;
    font-size: 18px;
    font-weight: 100;
    line-height: 76px;
  }
  .feature-block-1 > div {
    margin-left: -15px;
  }
  .feature-block-2 > div {
    margin-left: 11px;
  }
  .feature-block-3 {
    position: relative;
  }
  .feature-block-3 > div {
    width: 323px;
    height: 106px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 24px;
    line-height: 106px;
  }
  .feature-block-4 > div {
    margin-left: -53px;
  }
  .feature-block-5 > div {
    margin-left: -28px;
  }

  .feature-block-area-xs {
    width: 225px;
    height: 106px;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .feature-block-area-xs > div > div {
    background-color: #253A7E;
    color: white;
    margin-top: 15px;
    width: 225px;
    height: 76px;
    font-size: 18px;
    font-weight: 100;
    line-height: 76px;
  }

  .img-feature {
    width: 240px;
  }

  @media screen and (max-width: 1280px) {
    .feature-block-area {
      width: 990px;
      height: 90px;
    }
    .feature-block-1 > div,
    .feature-block-2 > div,
    .feature-block-4 > div,
    .feature-block-5 > div {
      margin-top: 15px;
      font-size: 18px;
      width: 180px;
      height: 65px;
      line-height: 65px;
    }
    .feature-block-3 > div {
      font-size: 21px;
      width: 220px;
      height: 90px;
      line-height: 90px;
    }
    .feature-block-1 > div {
      margin-left: -10px;
    }
    .feature-block-2 > div {
      margin-left: 15px;
    }
    .feature-block-4 > div {
      margin-left: -60px;
    }
    .feature-block-5 > div {
      margin-left: -35px;
    }
  }
  @media screen and (max-width: 992px) {
    .feature-block-area {
      width: 770px;
      height: 72px;
    }
    .feature-block-1 > div,
    .feature-block-2 > div,
    .feature-block-4 > div,
    .feature-block-5 > div {
      margin-top: 10px;
      font-size: 15px;
      width: 130px;
      height: 48px;
      line-height: 48px;
    }
    .feature-block-3 > div {
      font-size: 18px;
      width: 200px;
      height: 72px;
      line-height: 72px;
    }
    .feature-block-1 > div {
      margin-left: -10px;
    }
    .feature-block-2 > div {
      margin-left: 0px;
    }
    .feature-block-4 > div {
      margin-left: -30px;
    }
    .feature-block-5 > div {
      margin-left: -20px;
    }
  }
  @media screen and (max-width: 768px) {
    .row-nkn-features {
      height: 800px;
    }
  }

  .feature-footer {
    margin-top: 20px;
    font-size: 24px;
    color: #c93420;
  }
  .feature-footer-xs {
    margin-top: 270px;
    font-size: 24px;
    color: #c93420;
  }
</style>
