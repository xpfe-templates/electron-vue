module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'precss': {},
    cssnano: {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
}
