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
      <news></news>
      <slogan></slogan>
      <the-footer></the-footer>
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
  import WhatIsNkn from './WhatIsNkn'
  import News from './News'
  import Slogan from './Slogan'
  import TheFooter from './TheFooter'

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
      News,
      Slogan,
      TheFooter
    }
  }
</script>

<style scoped>

</style>
