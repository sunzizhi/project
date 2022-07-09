const { defineConfig } = require('@vue/cli-service')
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer:{
  //   historyApiFallback:true,
  //   noInfo:true,
  //   overlay:true,
  //   host:'localhost',
  //   port:'8080',
  //   open:'http://localhost:8080/',
  // }
  devServer: {
    /* 跨域代理 */
    proxy: {

      '/api': {
        // 目标代理服务器
        target: 'http://localhost:8080/',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: { '^/api': '/public' }
      }
    }
  },

  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('style', resolve('src/assets/style'))
  }


})

