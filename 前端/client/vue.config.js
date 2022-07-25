const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const path=require("path")
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  outputDir: "dist",
  assetsDir: "assets",
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: false,
  productionSourceMap: true,
  // configureWebpack: (config) => {
  //   // webpack配置，值位对象时会合并配置，为方法时会改写配置
  //   if (debug) {
  //     // 开发环境配置
  //     config.devtool = "eval-cheap-module-source-map";
  //   } else {
  //     // 生产环境配置
  //   }
  // },
  // chainWebpack: (config) => {
  //   // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  //   if (debug) {
  //     config.devtool = "eval-cheap-module-source-map"; // 本地开发配置
  //   } else {
  //     // 生产开发配置
  //   }
  // },
  parallel: require("os").cpus().length > 1,
  pluginOptions: {
    // 第三方插件配置
  },
  pwa: {
    // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    hot: false,
    proxy: {
      "/api": {
        target: "http://localhost:5000/api/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
