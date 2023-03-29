const { defineConfig } = require('@vue/cli-service')
//let timeStamp = new Date().getTime();
// const path = require("path");
// const fs = require("fs");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  filenameHashing: false, // 打包的时候不使用hash值.因为我们有时间戳来确定项目的唯一性了.
	
	//设置路径别名 @=src
	// configureWebpack: {
	// 	name: 'Autoliv China Digital All In One',   //网页标签名字，需在index.html中也修改 title为： <%= webpackConfig.name %>
	// 	// timeStamp: timeStamp,  //自定义的，用以在index首页中，解决引用JS 缓存的问题。
	// 	resolve: {
	// 		alias: {
	// 			'assets': '@/assets',
	// 			'components': '@/components',
	// 			'api': '@/api',
	// 			'store': '@/store',
	// 			'views': '@/views'
	// 		},
	// 	},
	// 	output: { // 输出重构 打包编译后的js文件名称,添加时间戳.
	// 		filename: `js/js[name].${timeStamp}.js`,
	// 		chunkFilename: `js/chunk.[id].${timeStamp}.js`,
	// 	}
	// },
	// css: {
	// 		extract: { // 打包后css文件名称添加时间戳
	// 				filename: `css/[name].${timeStamp}.css`,
	// 				chunkFilename: `css/chunk.[id].${timeStamp}.css`,
	// 		}
	// },
 // devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'url',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    // 此处开启 https
    //https: true,
    // 是否自动打开浏览器
    // open: true,
    // https: {
    //     // 配置证书
    //     cert: fs.readFileSync(path.join(__dirname, "src/cert/localhost.crt")),
    //     // 配置证书密钥
    //     key: fs.readFileSync(path.join(__dirname, "src/cert/localhost.key"))
    // },
    // 添加后， WebSocket 就不会报错了
    //client: {
      //webSocketURL: 'ws://0.0.0.0:8999/ws'
   // }
  //}
})
