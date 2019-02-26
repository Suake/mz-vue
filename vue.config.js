module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://m.maizuo.com',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
