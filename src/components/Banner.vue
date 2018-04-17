<template>
  <div class="row nkn-banner">
    <div class="row">
      <img class="img-vertical hidden-xs" src="./../assets/home/banner/blockchain.png" alt="">
      <img class="img-vertical-xs hidden-lg hidden-md hidden-sm" src="./../assets/home/banner/blockchain.png" alt="">
    </div>
    <div class="row">
      <img class="img-whatwedoline" src="./../assets/home/banner/whatwedoline2x.png" alt="">
    </div>
    <div class="row">
      <img class="img-leftcorner" src="./../assets/home/banner/leftcorner2x.png" alt="">
    </div>

    <img class="nkn-banner-bg hidden-sm hidden-xs" src="./../assets/home/banner/sector2x.png" alt="">
    <img class="nkn-banner-img hidden-sm hidden-xs" src="./../assets/home/banner/bigimage2x.png" alt="">

    <img class="nkn-banner-bg-sm hidden-lg hidden-md visible-sm-12 hidden-xs" src="./../assets/home/banner/sector2x.png" alt="">
    <img class="nkn-banner-img-sm hidden-lg hidden-md visible-sm-12 hidden-xs" src="./../assets/home/banner/bigimage2x.png" alt="">

    <img class="nkn-banner-bg-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/sector2x.png" alt="">
    <img class="nkn-banner-img-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/bigimage2x.png" alt="">
  </div>
</template>

<script>
	export default {
		name: "banner"
	}
</script>

<style scoped>
  .img-vertical {
    margin-left: 50px;
    height: 270px;
  }
  .img-vertical-xs {
    margin-left: 50px;
    height: 220px;
  }
  .img-whatwedoline {
    margin: 68px 0 68px 50px;
    height: 2px;
    width: 160px;
  }
  .img-leftcorner {
    margin-left: 50px;
    height: 230px;
    width: 340px;
  }

  @media screen and (max-width: 413px) {
    .img-leftcorner {
      width: 310px;
    }
  }

  .nkn-banner-bg {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    height: 827px;
  }
  .nkn-banner-img {
    position: absolute;
    top: 100px;
    right: 40px;
    height: 640px;
  }
  .nkn-banner-bg-sm {
    position: absolute;
    top: 30px;
    right: 0;
    z-index: -1;
    height: 420px;
  }
  .nkn-banner-img-sm {
    position: absolute;
    top: 70px;
    right: 10px;
    height: 360px;
  }
  .nkn-banner-bg-xs {
    position: absolute;
    top: 30px;
    right: 0;
    z-index: -1;
    height: 300px;
  }
  .nkn-banner-img-xs {
    position: absolute;
    top: 70px;
    right: 10px;
    height: 240px;
  }
</style>
