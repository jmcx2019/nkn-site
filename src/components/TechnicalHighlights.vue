<template>
  <div class="row row-ca-introduction">
    <p><strong>{{ $t('caIntro.name') }}</strong></p>
    <img class="img-whatwedoline2 hidden-xs" src="./../assets/home/banner/whatwedoline2x.png" alt="">
    <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/whatwedoline2x.png" alt="">

    <div class="container">
      <div class="row hidden-xs">
        <div class="col-lg-6 col-md-6 hidden-sm" style="position: relative">
          <img class="img-ca-rule" src="./../assets/ca/ca-rule.png" alt="">
          <img class="img-triangle" src="./../assets/ca/triangle.png" alt="">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 ca-right-content">
          <div class="row row-right-content-1">
            <div class="col-lg-2 col-md-2 col-sm-2">
              <img class="img-ca-right-networking" src="./../assets/ca/networking.png" alt="">
            </div>
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-9 col-ca-right">
              <p>{{ $t('caIntro.networking.name') }}</p>
              {{ $t('caIntro.networking.content') }}
            </div>
          </div>
          <div class="row row-right-content-2">
            <div class="col-lg-2 col-md-2 col-sm-2">
              <img class="img-ca-right-blockchain" src="./../assets/ca/blockchain.png" alt="">
            </div>
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-9 col-ca-right">
              <p>{{ $t('caIntro.blockchain.name') }}</p>
              {{ $t('caIntro.blockchain.content') }}
            </div>
          </div>
          <div class="row row-right-content-3">
            <div class="col-lg-2 col-md-2 col-sm-2">
              <img class="img-ca-right-resource" src="./../assets/ca/resource.png" alt="">
            </div>
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-9 col-ca-right">
              <p>{{ $t('caIntro.tokenizing.name') }}</p>
              {{ $t('caIntro.tokenizing.content') }}
            </div>
          </div>
        </div>
      </div>

      <div class="row hidden-lg hidden-md hidden-sm">
        <img class="img-ca-right-networking-xs" src="./../assets/ca/networking.png" alt="">
        <div class="col-ca-right-xs col-ca-right-xs-1">
          <p>{{ $t('caIntro.networking.name') }}</p>
          {{ $t('caIntro.networking.content') }}
        </div>
        <img class="img-ca-right-blockchain-xs" src="./../assets/ca/blockchain.png" alt="">
        <div class="col-ca-right-xs">
          <p>{{ $t('caIntro.blockchain.name') }}</p>
          {{ $t('caIntro.blockchain.content') }}
        </div>
        <img class="img-ca-right-resource-xs" src="./../assets/ca/resource.png" alt="">
        <div class="col-ca-right-xs">
          <p>{{ $t('caIntro.tokenizing.name') }}</p>
          {{ $t('caIntro.tokenizing.content') }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
	export default {
		name: "technical-highlights"
	}
</script>

<style scoped>
  .row-ca-introduction {
    height: 630px;
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

  .img-ca-rule {
    width: 274px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .img-triangle {
    width: 362px;
    position: absolute;
    right: 90px;
  }

  .ca-right-content {
    text-align: left;
  }
  .ca-right-content > div > div > img {
    height: 70px;
    margin-left: -15px;
  }
  .row-right-content-1 {
    padding-left: 30px;
  }
  .row-right-content-2,
  .row-right-content-3 {
    margin-top: 72px;
    padding-left: 30px;
  }

  .col-ca-right {
    font-size: 18px;
    white-space: nowrap;
  }
  .col-ca-right > p {
    font-size: 24px;
    font-weight: 800;
  }

  .col-ca-right-xs-1 {
    margin-top: 20px;
  }
  .col-ca-right-xs {
    margin-bottom: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
  .col-ca-right-xs > p {
    font-size: 21px;
    font-weight: 800;
  }
  .img-ca-right-networking-xs,
  .img-ca-right-blockchain-xs,
  .img-ca-right-resource-xs {
    width: 100px;
  }

  @media screen and (max-width: 414px) {
    .row-ca-introduction {
      height: 920px;
    }
  }
  @media screen and (max-width: 400px) {
    .col-ca-right-xs {
      font-size: 15px;
    }
  }
</style>
