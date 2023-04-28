// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// create the dev server that all the forwarded proxy requests go to
module.exports = {
  devServer: {
    // This will protect your code from being visible to the user of the site
    proxy: 'http://127.0.0.1:3000'
  }
}