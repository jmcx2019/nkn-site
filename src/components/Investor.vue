<template>
  <div class="row row-investor">
    <p><strong>{{ $t('investor.name') }}</strong></p>
    <img class="img-whatwedoline2 hidden-xs" src="./../assets/banner/whatwedoline2x.png" alt="">
    <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/banner/whatwedoline2x.png" alt="">

    <div class="container">
      <div class="row partners-img">
        <ul>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/Block-VC-blue.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/NGC-Blue.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/Node-Capital-Blue.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/String-blue.png" alt=""></a></li>

          <li><a v-on:click.stop.prevent><img src="./../assets/partners/fenbushi-blue.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/arrington-XRP-blue.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/DFG-blue.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/Genesis.png" alt=""></a></li>

          <li><a v-on:click.stop.prevent><img src="./../assets/partners/OKEx-logo.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/jdblue.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/IF-blue.png" alt=""></a></li>
          <li><a v-on:click.stop.prevent><img src="./../assets/partners/BKfund-Blue.png" alt=""></a></li>
        </ul>


        <!--Old :-->
        <!--<ul>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(1)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/NGC.jpg" alt="">-->
              <!--<img v-show="active === 1" class="hide_img" src="./../assets/investor/NGC2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(2)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/blockvc.jpg" alt="">-->
              <!--<img v-show="active === 2" class="hide_img" src="./../assets/investor/blockvc2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(3)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/fenbushi.jpg" alt="">-->
              <!--<img v-show="active === 3" class="hide_img" src="./../assets/investor/fenbushi2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(4)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/dynamics.jpg" alt="">-->
              <!--<img v-show="active === 4" class="hide_img" src="./../assets/investor/dynamics2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->

          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(5)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/DFG.jpg" alt="">-->
              <!--<img v-show="active === 5" class="hide_img" src="./../assets/investor/DFG2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(6)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/jiuding.jpg" alt="">-->
              <!--<img v-show="active === 6" class="hide_img" src="./../assets/investor/jiuding2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(7)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/nude.jpg" alt="">-->
              <!--<img v-show="active === 7" class="hide_img" src="./../assets/investor/nude2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(8)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/genesis.jpg" alt="">-->
              <!--<img v-show="active === 8" class="hide_img" src="./../assets/investor/genesis2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->

          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(9)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/okex.jpg" alt="">-->
              <!--<img v-show="active === 9" class="hide_img" src="./../assets/investor/okex2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(10)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/xrp.jpg" alt="">-->
              <!--<img v-show="active === 10" class="hide_img" src="./../assets/investor/xrp.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(11)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/chuxin.jpg" alt="">-->
              <!--<img v-show="active === 11" class="hide_img" src="./../assets/investor/chuxin2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a v-on:click.stop.prevent href="" @mouseenter="showActive(12)" @mouseleave="showActive(0)">-->
              <!--<img src="./../assets/investor/Av.jpg" alt="">-->
              <!--<img v-show="active === 12" class="hide_img" src="./../assets/investor/Av2.jpg" alt="">-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    name: "Investor",
    data() {
      return {
        active: 0
      }
    },
    methods: {
      showActive(index) {
        this.active = index;
      }
    }
  }
</script>

<style scoped>
  .row-investor {
    background-color: white;
    position: relative;
    color: #253A7E;
    font-size: 24px;
    text-align: center;
    padding: 80px 0;
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

  .partners-img {
    text-align: center;
  }
  .partners-img > ul {
    list-style: none;
    padding: 0;
  }
  .partners-img > ul > li {
    display: inline-block;
    margin: 15px 0;
    padding: 0;
    width: 24%;
  }
  .partners-img > ul > li > a {
    position: relative;
    display: inline-block;
  }
  .partners-img > ul > li > a > img {
    width: 50%;
  }

  /*OLD :*/
  .investor-img {
    text-align: center;
  }
  .investor-img > ul {
    list-style: none;
    padding: 0;
  }
  .investor-img > ul > li {
    display: inline-block;
    margin: 15px 0;
    padding: 0;
    width: 24%;
  }
  .investor-img > ul > li > a {
    position: relative;
    display: inline-block;
  }
  .investor-img > ul > li > a > img {
    width: 100%;
  }

  .hide_img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
