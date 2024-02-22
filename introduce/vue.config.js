const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
// 追加
module.exports = {
  publicPath: './',

  transpileDependencies: [
    'vuetify'
  ]
}

// module.exports = defineConfig({
//   publicPath: process.env.NODE_ENV === 'production'
//  ?  '/app/'
//  : './'
//  })
