<template>
    <div id="nkn-video-banner-outer">
        <video id="nkn-video-banner" class="video-banner-lg-md-sm" width="100%" preload="metadata" autoplay playsinline muted loop>
            <source src="./../assets/video/NKN-animation.mp4" type="video/mp4">
            <source src="./../assets/video/NKN-animation.ogg" type="video/ogg">
        </video>
    </div>
</template>

<script>
    export default {
        name: "video-banner"
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