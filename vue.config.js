const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const setting = require('./setting.js')

// 设置系统启动名字
const name = setting.title || process.env.VUE_APP_BASE_API
module.exports = defineConfig({
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  transpileDependencies: true,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8999,
    https: false,
    hotOnly: true,
    //跨域配置
    proxy: {}
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
  },
  chainWebpack: config => {
    // 设置标题
    config.plugin('html').tap(args => {
      args[0].title = name
      // 设置标题
      return args
    })
  }
})
