<template>
  <div class="row row-contact">
    <div class="container">
      <img class="img-left-1" src="../assets/contact/1left.png" alt="">
      <img class="img-left-2 hidden-xs" src="../assets/contact/2left2x.png" alt="">
      <img class="img-left-3 hidden-xs" src="../assets/contact/3left2x.png" alt="">

      <img class="img-right-1 hidden-xs" src="../assets/contact/1right2x.png" alt="">
      <img class="img-right-2 hidden-xs" src="../assets/contact/2right2x.png" alt="">
      <img class="img-right-3" src="../assets/contact/3right2x.png" alt="">

      <div class="div-img-logo">
        <img class="img-logo" src="./../assets/slogan/logonkn.png" alt="">
      </div>

      <div class="contact-free-the-bits">
        {{ $t('freeTheBits.first') }}<span class="contact-free-the-bits-end">{{ $t('freeTheBits.last') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "slogan"
	}
</script>

<style scoped>
  .row-contact{
    background-color: white;
    position: relative;
    padding: 80px 0 50px 0;
  }

  .img-left-1 { position: absolute; top: 0; left: 0; width: 120px; }
  .img-left-2 { position: absolute; left: 0; bottom: 0; width: 180px; }
  .img-left-3 { position: absolute; top: 0; left: 20%; width: 120px; }

  .img-right-1 { position: absolute; top: 0; right: 0; width: 165px; }
  .img-right-2 { position: absolute; bottom: 0; right: 20%; width: 190px; }
  .img-right-3 { position: absolute; bottom: 0; right: 0; width: 120px; }

  .div-img-logo {
    position: relative;
    text-align: center;
  }
  .img-logo {
    width: 122px;
  }

  .contact-free-the-bits {
    margin-top: 20px;
    position: relative;
    font-size: 27px;
    text-align: center;
    color: #c93420;
  }
  .contact-free-the-bits-end {
    color: #253A7E;
  }
</style>
