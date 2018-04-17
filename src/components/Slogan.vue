<template>
  <div class="row row-contact">
    <img class="img-left-1" src="./../assets/home/contact/1left.png" alt="">
    <img class="img-left-2 hidden-xs" src="./../assets/home/contact/2left2x.png" alt="">
    <img class="img-left-3 hidden-xs" src="./../assets/home/contact/3left2x.png" alt="">

    <img class="img-right-1" src="./../assets/home/contact/1right2x.png" alt="">
    <img class="img-right-2 hidden-xs" src="./../assets/home/contact/2right2x.png" alt="">
    <img class="img-right-3" src="./../assets/home/contact/3right2x.png" alt="">

    <img class="img-logo-2" src="./../assets/NKN-logo-2.png" alt="">

    <div class="contact-free-the-bits">
      {{ $t('freeTheBits.first') }}<span class="contact-free-the-bits-end">{{ $t('freeTheBits.last') }}</span>
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
    height: 420px;
    background-color: white;
    position: relative;
  }

  .img-left-1 { position: absolute; top: 0; left: 0; width: 162px; }
  .img-left-2 { position: absolute; left: 0; bottom: 0; width: 290px; }
  .img-left-3 { position: absolute; top: 0; left: 30%; width: 118px; }

  .img-right-1 { position: absolute; top: 0; right: 0; width: 142px; }
  .img-right-2 { position: absolute; bottom: 0; right: 150px; width: 293px; }
  .img-right-3 { position: absolute; bottom: 0; right: 45%; width: 118px; }

  .img-logo-2 {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    margin: auto;
    width: 350px;
  }

  .contact-free-the-bits {
    position: absolute;
    top: 250px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 32px;
    text-align: center;
    color: #c93420;
  }
  .contact-free-the-bits-end {
    color: #253A7E;
  }
  .contact-staytuned {
    position: absolute;
    top: 330px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 18px;
    color: #253A7E;
    text-align: center;
  }
  .contact-staytuned-xs {
    position: absolute;
    bottom: 170px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 18px;
    color: #253A7E;
    text-align: center;
  }

  .stay-tuned-download {
    position: absolute;
    width: 297px;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
  }

  @media screen and (max-width: 414px) {
  }
  @media screen and (max-width: 400px) {
    .contact-free-the-bits {
      font-size: 28px;
    }
  }
</style>
