<template>
  <div class="row row-ca-introduction">
    <p class="model-tit">{{ $t('why.tit') }}</p>
    <p class="model-txt"><strong>{{ $t('why.name') }}</strong></p>

    <div class="container">
      <div class="col-lg-4 col-md-4 hidden-sm hidden-xs">
        <div class="th-div th-div-left">
          <img src="./../../assets/highlights/why/Neutrality.png" class="img-highlights">
          <p class="th-p-title">{{ $t('why.model1.name') }}</p>
          <p class="th-p-content">{{ $t('why.model1.content') }}</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 hidden-sm hidden-xs">
        <div class="th-div th-div-center">
          <img src="../../assets/highlights/why/inefficinecy.png" class="img-highlights">
          <p class="th-p-title">{{ $t('why.model2.name') }}</p>
          <p class="th-p-content">{{ $t('why.model2.content') }}</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 hidden-sm hidden-xs">
        <div class="th-div th-div-right">
          <img src="../../assets/highlights/why/fragmentation.png" class="img-highlights">
          <p class="th-p-title">{{ $t('why.model3.name') }}</p>
          <p class="th-p-content">{{ $t('why.model3.content') }}</p>
        </div>
      </div>

      <div class="hidden-lg hidden-md">
        <div class="th-div th-div-center">
          <img src="../../assets/highlights/why/Neutrality.png" class="img-highlights">
          <p class="th-p-title">{{ $t('why.model1.name') }}</p>
          <p class="th-p-content">{{ $t('why.model1.content') }}</p>
        </div>
        <div class="th-div th-div-center th-div-xs">
          <img src="../../assets/highlights/why/inefficinecy.png" class="img-highlights">
          <p class="th-p-title">{{ $t('why.model2.name') }}</p>
          <p class="th-p-content">{{ $t('why.model2.content') }}</p>
        </div>
        <div class="th-div th-div-center">
          <img src="../../assets/highlights/why/fragmentation.png" class="img-highlights">
          <p class="th-p-title">{{ $t('why.model3.name') }}</p>
          <p class="th-p-content">{{ $t('why.model3.content') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "why"
	}
</script>

<style scoped>
  .row-ca-introduction {
    background-color: #F9FAFF;
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
    font-weight: bolder;
    margin-top: 40px;
    font-size: 20px;
  }
  .th-p-content {
    margin-top: 15px;
    font-size: 14px;
    line-height: 26px;
    text-align: justify;
  }

  .img-highlights {
    width: 150px;
    text-align: center;
  }
</style>
