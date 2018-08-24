var version = +new Date();
// 全局配置
require.config({
	// urlArgs: 'v=' + version,
	// 根路径设置，paths下面全部都是根据baseUrl的路径去设置
	baseUrl: '../js/',
	paths: {
		jquery: 'lib/jquery',
        template: 'lib/template-web',
        text : "lib/require-text",
        superSlide: 'lib/superSlide',
        swiper:'lib/swiper-3.4.2.min',
		common: 'common',
		mobile: 'mobile',
		pc: 'pc'
	},
	// 用来配置不兼容的模块，意思是：该模块没有module.exports,
	// jquery就有module.exports输出值
	shim: {
		//bootstrap没有module.exports输出值，所以得放在shim
		common: {
			//bootstrap需要依赖jquery，所以得加deps
			deps: ["jquery"]
			// 如果该模块加载进来，需要输出一个值，那就用exports来设置，这里不用设置
			// exports:''
		},
		mobile: {
			deps: [
                'jquery'
                // ,
				// 'css!../css/mobile.css'
			]
		},
		pc: {
			deps: [
                'jquery'
                ,
				'css!../css/animate.css'
				// 'css!../css/style.css',
			]
		},
		superSlide: {
			deps: ["jquery"]
        },
        swiper: [
			'css!lib/swiper-3.4.2.min.css'
        ]
	},
	//map"告诉RequireJS在任何模块之前，都先载入这个模块
	map: {
		// 这里没有设置，举个例子
		'*': {
			'css': 'lib/require-css'
		}
	}
})
