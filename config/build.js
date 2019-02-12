const TsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const dev = require('./env')

module.exports = {
  
  extractCSS: !dev,

  plugins: [

    new TsCheckerPlugin({ vue: true })

  ]

}