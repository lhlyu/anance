const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: isProduction ? 'https://cdn.jsdelivr.net/gh/lhlyu/anance@gh-pages/' : '/',
    outputDir: './dist',
    configureWebpack: config => {
        config['externals'] = {
            'echarts': 'echarts'
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/scss/variables.scss";`
            }
        }
    }
}
