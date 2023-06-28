export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-example",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/base.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/test.js" //默认插件
    // {
    //   src: "~/plugins/test.js", //不指定mode，默认在客户端和服务端都使用
    // },
    // {
    //   src: "~/plugins/test.js",
    //   mode: "client", //仅在客户端使用
    // },
    // {
    //   src: "~/plugins/test.js",
    //   mode: "server", //仅在服务端使用
    // },

    // {
    //   src: "~/plugins/test.client.js",
    // },
    // {
    //   src: "~/plugins/test.server.js",
    // },
    // {
    //   src: "~/plugins/tooltop.js",
    // },
    {
      src: "~/plugins/axios.js",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["~/assets/scss/variables.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
