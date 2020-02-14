module.exports = {
    publicPath: '/',
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
