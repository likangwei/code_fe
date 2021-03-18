/*
* author: the.one
*
* time: 2021-03-18
*
* desc: 描述文件
*
* */
module.exports = {
    filenameHashing: true,
    devServer: {
        port: 8187,
        proxy: {
            '/api': {
                target: '********',
                ws: true,
                changeOrigin: true,
                secure: true,
            },
        },
        disableHostCheck: true,
    },
    css: {
        extract: false,
    },
    chainWebpack: (config) => {},
}
