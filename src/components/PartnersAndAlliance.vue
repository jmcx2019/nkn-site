<template>
    <div class="row row-partners-and-alliance">
        <div class="container">
            <p><strong>{{ $t('partnersAndAlliance.tit') }}</strong></p>
            <img class="img-whatwedoline2 hidden-xs" src="./../assets/banner/whatwedoline2x.png" alt="">
            <img class="img-whatwedoline2-xs hidden-lg hidden-md hidden-sm visible-xs-12" src="./../assets/banner/whatwedoline2x.png" alt="">

            <div class="row nkn-pa-logo-container">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a target="_blank" href="https://telecominfraproject.com">
                        <img class="nkn-pa-logo" src="./../assets/partners-and-alliance/telecom.png"/>
                    </a>
                </div>

                <div class="col-lg-4 col-md-4 hidden-sm hidden-xs nkn-pa-logo-lg">
                    <a target="_blank" href="https://www.opennetworking.org">
                        <img class="nkn-pa-logo" src="./../assets/partners-and-alliance/open.png"/>
                    </a>
                </div>

                <div class="col-sm-12 col-xs-12 hidden-lg hidden-md nkn-pa-logo-sm">
                    <a target="_blank" href="https://www.opennetworking.org">
                        <img class="nkn-pa-logo" src="./../assets/partners-and-alliance/open.png"/>
                    </a>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a target="_blank" href="http://crypticlabs.org">
                        <img class="nkn-pa-logo" src="./../assets/partners-and-alliance/cryptic.png"/>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "partners-and-alliance"
  }
</script>

<style scoped>
    .row-partners-and-alliance {
        background-color: #F9FAFF;
        position: relative;
        color: #253A7E;
        font-size: 24px;
        text-align: center;
        padding: 100px 0;
    }

    .img-whatwedoline2 {
        height: 4px;
        width: 64px;
        margin: 20px 0 100px;
    }
    .img-whatwedoline2-xs {
        height: 2px;
        width: 64px;
        margin: 10px 0 30px;
    }

    .row-partners-and-alliance img.nkn-pa-logo {
        width: 200px;
    }

    .nkn-pa-logo-container > .nkn-pa-logo-sm {
        margin: 60px 0;
    }
</style>