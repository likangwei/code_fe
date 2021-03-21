/*
* author: the.one
*
* time: 2021-03-18
*
* desc: 描述文件
*
* */
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
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
        extract: true,
        sourceMap: false,
        // loaderOptions:{
        //     less: {
        //         javascriptEnabled: true,
        //     }
        // },
        // models: true,
    },
    chainWebpack: config => {
        config.resolve.symlinks(true);

        config.resolve.alias
            .set("@", resolve("src"))
            .set("@views", resolve("src/views"))
            .set("@store", resolve("src/store"))
            .set("@components", resolve("src/components"));

        // require('vue-loader').merge(config, {
        //     options: {},
        //     plugins: ['less-loader'],
        // });
    }
}
