<template>
  <div id="home">
    <video-banner/>
    <nav-bar></nav-bar>

    <div class="container-fluid">
      <banner></banner>
      <!--<introduction></introduction>-->
      <why id="nkn-overview-container"></why>
      <what></what>
      <how></how>
      <e-a></e-a>
      <news id="nkn-news-container"></news>
      <team id="nkn-team-container"></team>
      <partners-and-alliance></partners-and-alliance>
      <!--<investor></investor>-->
      <slogan></slogan>
      <the-footer></the-footer>
      <nav-bottom></nav-bottom>
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import Banner from './Banner'
  import Introduction from './Introduction'
  import Why from './highlights/Why'
  import What from './highlights/What'
  import How from './highlights/How'
  import EA from './highlights/EA'
  import News from './News'
  import Team from './Team'
  import Investor from './Investor'
  import Slogan from './Slogan'
  import TheFooter from './TheFooter'
  import NavBottom from './NavBottom'
  import VideoBanner from "./VideoBanner";
  import PartnersAndAlliance from "./PartnersAndAlliance";

	export default {
    name: "home",
    components: {
      PartnersAndAlliance,
      VideoBanner,
        NavBar,
      Banner,
      Introduction,
      Why,
      What,
      How,
      EA,
      News,
      Team,
      // Investor,
      Slogan,
      TheFooter,
      NavBottom
    }
  }
</script>

<style scoped>

</style>
