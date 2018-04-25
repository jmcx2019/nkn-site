<template>
  <div id="home">
    <nav-bar></nav-bar>

    <div class="container-fluid">
      <banner></banner>
      <what-is-nkn></what-is-nkn>
      <!--<goals-of-nkn></goals-of-nkn>-->
      <!--<nkn-features></nkn-features>-->
      <technical-highlights></technical-highlights>
      <road-map></road-map>
      <team></team>
      <!--<investor></investor>-->
      <news></news>
      <slogan></slogan>
      <the-footer></the-footer>
      <nav-bottom></nav-bottom>
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import Banner from './Banner'
  import GoalsOfNkn from './GoalsOfNkn'
  import NknFeatures from './NknFeatures'
  import TechnicalHighlights from './TechnicalHighlights'
  import RoadMap from './RoadMap'
  import Team from './Team'
  import Investor from './Investor'
  import WhatIsNkn from './WhatIsNkn'
  import News from './News'
  import Slogan from './Slogan'
  import TheFooter from './TheFooter'
  import NavBottom from './NavBottom'

	export default {
    name: "home",
    components: {
      NavBar,
      Banner,
      WhatIsNkn,
      GoalsOfNkn,
      NknFeatures,
      TechnicalHighlights,
      RoadMap,
      Team,
      Investor,
      News,
      Slogan,
      TheFooter,
      NavBottom
    }
  }
</script>

<style scoped>

</style>
