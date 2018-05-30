<template>
    <div id="nkn-video-banner-outer">
        <video autoplay loop muted playsinline
                :poster="poster"
                id="nkn-video-banner"
                width="100%">
            <source src="./../assets/video/NKN-animation.mp4" type="video/mp4">
            <source src="./../assets/video/NKN-animation.ogg" type="video/ogg">
        </video>
    </div>
</template>

<script>
  export default {
    name: "video-banner",
    data: function () {
      return {
        poster: require("./../assets/video/NKN-animation-cover.jpg")
      }
    }
  }
</script>

<style scoped>
    #nkn-video-banner-outer {
        height: 890px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: #030B15;
        overflow: hidden;
    }

    #nkn-video-banner {
        width: 100%;
    }
</style>