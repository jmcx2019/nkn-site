<template>
  <router-view></router-view>
</template>

<script>
  import LangStorage from './helpers/lang'

  export default {
    name: 'app',
    created() {
      this.getIp(function (info, self) {
        let locale = 'en'

        if (info.country === '中国') {
          locale = 'zh'
        }

        if (locale !== self.$i18n.locale) {
          self.$i18n.locale = locale
          LangStorage.setLang(self.$i18n.locale)
        }
      })
    },
    methods: {
      getIp(cb) {
        let script = document.createElement("script"),
          s = document.getElementsByTagName("script")[0];

        script.src = "https://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js";
        s.parentNode.insertBefore(script, s);

        let self = this
        let it = setInterval(function () {
          if (typeof(remote_ip_info) !== 'undefined') {
            try {
              cb(remote_ip_info, self);
            } catch (error) {
              console.log(error)
            }

            clearInterval(it);
            it = null;
          }
        }, 100);
      }
    }
  }
</script>

<style>
  html {
    overflow-x: hidden;
  }
  body {
    font-family: "PingFang SC", Verdana, "Microsoft YaHei", "微软雅黑", sans-serif;
    overflow-x: hidden;
  }
</style>
