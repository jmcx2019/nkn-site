<template>
  <div class="row row-what-is-nkn">
    <p class="what-is-nkn-name-relative"><strong>{{ $t('whatWeDo.name') }}</strong></p>
    <img class="img-what-is-nkn-line2 hidden-xs" src="./../assets/banner/whatwedoline2x.png" alt="">
    <img class="img-what-is-nkn-line2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/banner/whatwedoline2x.png" alt="">

    <div class="container">
      <div class="row what-is-nkn-content">
        {{ $t('whatWeDo.content') }}
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "introduction"
	}
</script>

<style scoped>
  .row-what-is-nkn {
    position: relative;
    color: #253A7E;
    margin-top: 60px;
    font-size: 24px;
    text-align: center;
    padding: 100px 0;
  }

  .img-what-is-nkn-line2 {
    height: 4px;
    width: 64px;
    margin: 20px 0 60px;
  }
  .img-what-is-nkn-line2-xs {
    height: 2px;
    width: 64px;
    margin: 10px 0 30px;
  }

  .what-is-nkn-content {
    position: relative;
    font-weight: 400;
    font-size: 20px;
    text-align: justify;
    padding: 0 15px;
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
