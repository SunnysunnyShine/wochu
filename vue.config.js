// 代理解决跨域问题
module.exports = {
    devServer: {
      proxy: {
        '': {
          target: 'http://api9.wochu.cn',
          changeOrigin: true
        }
      }
    }
  }