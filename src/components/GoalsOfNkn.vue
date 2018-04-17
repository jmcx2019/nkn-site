<template>
  <div class="row row-goals-of-nkn">
    <p><strong>GOALS of NKN</strong></p>
    <img class="img-whatwedoline2 hidden-xs" src="./../assets/home/banner/whatwedoline2x.png" alt="">
    <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/home/banner/whatwedoline2x.png" alt="">

    <div class="">
      <img class="img-goals-flag" src="./../assets/goals/flag.png" alt="">
      <img class="img-goals-bg" src="./../assets/goals/goals.png" alt="">
    </div>

  </div>
</template>

<script>
	export default {
		name: "goals-of-nkn"
	}
</script>

<style scoped>
  .row-goals-of-nkn {
    height: 880px;
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

  .img-goals-flag {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 50px;
  }

  .img-goals-bg {
    width: 800px;
  }
  @media screen and (max-width: 992px) {
    .row-goals-of-nkn {
      height: 800px;
    }
    .img-goals-bg {
      width: 720px;
    }
  }
  @media screen and (max-width: 768px) {
    .row-goals-of-nkn {
      height: 700px;
    }
    .img-goals-flag {
      width: 40px;
    }
    .img-goals-bg {
      width: 560px;
    }
  }
  @media screen and (max-width: 414px) {
    .row-goals-of-nkn {
      height: 540px;
    }
    .img-goals-flag {
      width: 30px;
    }
    .img-goals-bg {
      width: 400px;
    }
  }
</style>
