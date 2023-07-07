export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'letao_mobile',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vant',
    '~/plugins/axios',
    '~/plugins/axios/api'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    prefix:'/api'  // 前端调用接口，自动带/api
  },
  // 代理配置
  proxy: { 
    '/api': {  
      target: 'http://vips968.com:3000',
      pathRewrite: {
        '^/api' : '/'
      }
    }
  },

  server:{
    ip:'localhost',  // ip 地址或者域名的配置,
    port: 8080
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading:'~/components/Loading.vue'
}
