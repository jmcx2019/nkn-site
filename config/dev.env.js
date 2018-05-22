'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CONFIG_URL: '"/config-url"',
  VIDEO_URL: '"http://47.52.198.176/video/"',
  API_URL: '"http://47.52.198.176/api/v1/"',
  DOC_URL: '"https://47.52.198.176/doc/"'
})
