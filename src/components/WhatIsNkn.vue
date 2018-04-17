<template>
  <div class="row row-what-is-nkn">
    <img class="what-is-nkn-left-1" src="./../assets/home/contact/1left.png" alt="">
    <img class="what-is-nkn-left-2 hidden-xs" src="./../assets/home/contact/2left2x.png" alt="">

    <img class="what-is-nkn-right-1 hidden-xs" src="./../assets/home/contact/1right2x.png" alt="">
    <img class="what-is-nkn-right-3" src="./../assets/home/contact/3right2x.png" alt="">

    <p class="what-is-nkn-name-relative"><strong>{{ $t('whatWeDo.name') }}</strong></p>
    <img class="img-what-is-nkn-line2 hidden-xs" src="./../assets/home/banner/whatwedoline2x.png" alt="">
    <img class="img-what-is-nkn-line2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/whatwedoline2x.png" alt="">

    <div class="container">
      <div class="row what-is-nkn-content">
        {{ $t('whatWeDo.content') }}
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "what-is-nkn"
	}
</script>

<style scoped>
  .row-what-is-nkn {
    position: relative;
    color: #253A7E;
    margin-top: 60px;
    font-size: 24px;
    text-align: center;
    background-color: #f6f9fc;
    padding: 80px 0;
  }

  .what-is-nkn-left-1 { position: absolute; top: 0; left: 0; width: 162px; }
  .what-is-nkn-left-2 { position: absolute; left: 0; bottom: 0; width: 291px; }

  .what-is-nkn-right-1 { position: absolute; top: 0; right: 0; width: 142px; }
  .what-is-nkn-right-3 { position: absolute; bottom: 0; right: 0; width: 142px; }

  .img-what-is-nkn-line2 {
    height: 4px;
    width: 64px;
    margin: 10px 0 60px;
  }
  .img-what-is-nkn-line2-xs {
    height: 2px;
    width: 64px;
    margin: 10px 0 30px;
  }

  /* 防止absolute的img遮挡 */
  .what-is-nkn-name-relative {
    position: relative;
  }

  .what-is-nkn-content {
    position: relative;
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    padding: 0 15px;
  }
</style>
