<template>
  <div v-show="showWarning" class="navbar-fixed-bottom">
    <div class="navbar-bottom hidden-xs">
      <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-10">
          <div class="warning-left">
            <div class="warning-text">
              <img class="warning-pic" src="./../../src/assets/warning/warning.png">
              <p class="warning-p">{{ $t('navBottom.txt') }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2">
          <div class="warning-right" @click="hideWarning">
            <div class="warning-btn">{{ $t('navBottom.gotIt') }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-bottom-xs hidden-lg hidden-md hidden-sm">
      <div class="warning-text-xs">
        <img class="warning-pic-xs" src="./../../src/assets/warning/warning.png">
        <p class="warning-p-xs">{{ $t('navBottom.txt') }}</p>
      </div>
      <div>
        <div class="warning-bottom" @click="hideWarning">
          <div class="warning-btn">{{ $t('navBottom.gotIt') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "NavBottom",
    data() {
		  return {
		    showWarning: true
      }
    },
    methods: {
      hideWarning() {
        this.showWarning = false
      }
    }
	}
</script>

<style scoped>
  .navbar-bottom {
    height: 90px;
    background-color: #65709D;
    padding: 15px 75px;
    -moz-opacity: 0.9;
    opacity:.90;
    filter: alpha(opacity=90);
  }
  .warning-left {
    height: 60px;
    border-radius: 30px;
    background-color: #C93420;
  }
  .warning-text {
    position: relative;
    padding: 10px;
    color: white;
  }
  .warning-pic {
    height: 30px;
    position: absolute;
    top: 15px;
    left: 25px;
  }
  .warning-pic-xs {
    height: 30px;
    margin: 15px 0;
  }
  .warning-p {
    margin-left: 75px;
  }

  .navbar-bottom-xs {
    background-color: #65709D;
    width: 100%;
    height: 100%;
    -moz-opacity: 0.9;
    opacity:.90;
    filter: alpha(opacity=90);
    padding: 10px;
  }
  .warning-text-xs {
    border-radius: 30px;
    background-color: #C93420;
    padding: 10px;
    color: white;
    margin: 15px;
    text-align: center;
  }
  .warning-p-xs {
    padding: 8px;
    font-size: 16px;
    text-align: left;
  }

  .warning-right,
  .warning-bottom {
    height: 60px;
    border-radius: 30px;
    background-color: #253a7e;
    cursor: pointer;
  }
  .warning-bottom {
    margin: 15px;
  }
  .warning-btn {
    position: relative;
    padding-top: 15px;
    color: white;
    text-align: center;
    font-size: 21px;
  }
</style>
