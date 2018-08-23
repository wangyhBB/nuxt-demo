module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '全城淘官网',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '全城淘云ERP管理系统，是基于云平台架构的在线连锁专卖管理系统，为购物中心、百货商场超市、专营专卖、服装专卖、服装连锁、餐饮娱乐、餐饮管理软件、POS支付、移动互联网企业提供解决方案。服务热线：4006-877-999'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '全城淘软件,全城淘云ERP,SaaS软件,进销存SaaS,在线进销存软件,在线财务管理,超市管理系统,商场收银系统,服装管理系统,服装管理软件,好帮手服装管理系统,好帮手云平台,服装ERP系统,好帮手软件,好帮手Saas,餐饮软件,餐饮管理软件,收银软件,POS支付'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    loader: [{
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10000, // 10KO
        name: 'img/[name].[hash].[ext]'
      }
    }],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend(config, ctx) {
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'assets/scss/colors.scss'
          ]
        }
      }
      // 遍历nuxt定义的loader配置，向里面添加新的配置。
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
          rule.use.push(sassResourcesLoader)
        }
      })

    },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    vendor: ['element-ui', 'jquery']
  },
  css: [
    '~assets/css/reset.css',
    '~assets/css/animate.css',
    'swiper/dist/css/swiper.css',
    {
      src: 'element-ui/lib/theme-chalk/index.css'
    }
  ],
  plugins: [
    '@/plugins/element-ui',
    {
      src: '~plugins/jquery',
      ssr: false
    },
    { src: '~/plugins/nuxt-swiper-plugin', ssr: false }
  ]
}
