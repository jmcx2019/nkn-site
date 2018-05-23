<template>
  <div class="row row-new-net-highlight">
    <p class="model-tit">{{ $t('ea.tit') }}</p>
    <p class="model-txt"><strong>{{ $t('ea.name') }}</strong></p>

    <div class="container">
      <div class="col-lg-4 col-md-4 hidden-sm hidden-xs">
        <div class="th-div th-div-left">
          <img src="./../../assets/highlights/ea/openness.png" class="img-highlights">
          <p class="th-p-title">{{ $t('ea.model1.name') }}</p>
          <p class="th-p-content">{{ $t('ea.model1.content') }}</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 hidden-sm hidden-xs">
        <div class="th-div th-div-center">
          <img src="./../../assets/highlights/ea/uberized.png" class="img-highlights">
          <p class="th-p-title">{{ $t('ea.model2.name') }}</p>
          <p class="th-p-content">{{ $t('ea.model2.content') }}</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 hidden-sm hidden-xs">
        <div class="th-div th-div-right">
          <img src="./../../assets/highlights/ea/co-build.png" class="img-highlights">
          <p class="th-p-title">{{ $t('ea.model3.name') }}</p>
          <p class="th-p-content">{{ $t('ea.model3.content') }}</p>
        </div>
      </div>

      <div class="hidden-lg hidden-md">
        <div class="th-div th-div-center">
          <img src="./../../assets/highlights/ea/openness.png" class="img-highlights">
          <p class="th-p-title">{{ $t('ea.model1.name') }}</p>
          <p class="th-p-content">{{ $t('ea.model1.content') }}</p>
        </div>
        <div class="th-div th-div-center th-div-xs">
          <img src="./../../assets/highlights/ea/uberized.png" class="img-highlights">
          <p class="th-p-title">{{ $t('ea.model2.name') }}</p>
          <p class="th-p-content">{{ $t('ea.model2.content') }}</p>
        </div>
        <div class="th-div th-div-center">
          <img src="./../../assets/highlights/ea/co-build.png" class="img-highlights">
          <p class="th-p-title">{{ $t('ea.model3.name') }}</p>
          <p class="th-p-content">{{ $t('ea.model3.content') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "e-a"
	}
</script>

<style scoped>
  .row-new-net-highlight {
    position: relative;
    color: #253A7E;
    font-size: 24px;
    text-align: center;
    padding: 100px 0;
  }
  .model-tit {
    color: #44abf5;
    font-size: 16px;
    letter-spacing: 0.2em;
    margin-bottom: 15px;
  }
  .model-txt {
    margin-bottom: 80px;
  }

  .th-div {
    width: 95%;
  }
  .th-div-center {
    margin-left: auto;
    margin-right: auto;
  }
  .th-div-right {
    float: right;
  }
  .th-div-xs {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .th-p-title {
    margin-top: 40px;
    font-size: 20px;
    font-weight: bolder;
  }
  .th-p-content {
    margin-top: 15px;
    font-size: 14px;
    line-height: 26px;
    text-align: justify;
    text-justify:inter-ideograph;
  }

  .img-highlights {
    width: 150px;
    text-align: center;
  }
</style>
