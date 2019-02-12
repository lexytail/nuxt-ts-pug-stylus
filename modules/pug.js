module.exports = function () {

  this.extendBuild((config) => {

    config.module.rules.push({

      test: /\.pug$/,

      loader: 'pug-plain-loader',

      options: { data: {} }

    })

  })

}