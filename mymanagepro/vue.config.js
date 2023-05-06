const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:'127.0.0.1',
    port:'8080',
    open:true
  }// 启动项目自动打开浏览器
})
