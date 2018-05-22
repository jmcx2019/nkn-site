'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CONFIG_URL: '"/config-url"',
  VIDEO_URL: '"https://www.nkn.org/video/"',
  API_URL: '"http://nkncms.nkn.org/api/v1/"',
  DOC_URL: '"https://www.nkn.org/doc/"'
})
