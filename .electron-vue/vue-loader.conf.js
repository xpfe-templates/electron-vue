'use strict'

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: {
    css: [
      'vue-style-loader',
      { loader: 'css-loader', options: { sourceMap: isProduction } }
    ],

    postcss: [
      'vue-style-loader',
      { loader: 'css-loader', options: { sourceMap: isProduction } },
    ],

    less: [
      'vue-style-loader',
      { loader: 'css-loader', options: { sourceMap: isProduction } },
      { loader: 'less-loader', options: { sourceMap: isProduction } }
    ],

    sass: [
      'vue-style-loader',
      { loader: 'css-loader', options: { sourceMap: isProduction } },
      { loader: 'sass-loader', options: { indentedSyntax: true, sourceMap: isProduction } }
    ],

    scss: [
      'vue-style-loader',
      { loader: 'css-loader', options: { sourceMap: isProduction } },
      { loader: 'sass-loader', options: { sourceMap: isProduction } }
    ],

    stylus: [
      'vue-style-loader',
      { loader: 'css-loader', options: { sourceMap: isProduction } },
      { loader: 'stylus-loader', options: { sourceMap: isProduction } }
    ],

    styl: [
      'vue-style-loader',
      { loader: 'css-loader', options: { sourceMap: isProduction } },
      { loader: 'stylus-loader', options: { sourceMap: isProduction } }
    ]
  },

  transformToRequire: { video: ['src', 'poster'], source: 'src', img: 'src', image: 'xlink:href' }
}
