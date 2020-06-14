module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            'assets': '@/assets',
            'views': '@/views',
            'network': '@/network',
            'common': '@/common',
            'components': '@/components',
            'store' : '@/store'
            }
        }
    }
}
