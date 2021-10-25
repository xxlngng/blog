const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-html-loader")
      .loader("pug-html-loader")
      .end();
    config.resolve.alias.set("@", resolve("src"));
  },
  lintOnSave: false,//禁用eslint
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") {
      // 开发环境配置
      config.devtool = "source-map";
    }
  },
  devServer: {
    // 处理host不识别
    disableHostCheck: false,
    https: false,
    // 配置自动启动浏览器
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      "/business": {
        ws: false, // proxy websockets
        // target: "http://172.18.0.91:4000", // 服务器
        target: "http://139.159.191.15:4000", // 服务器
        // target: "http://139.159.191.15:4500", // 服务器
        // target: "http://172.18.0.119:4001",
        changeOrigin: true,
        pathRewrite: {
          "^/": "" // 需要rewrite重写的,
        }
      },
      "/fs": {
        ws: false,
        target: "http://139.159.191.15:4500", // 服务器
        changeOrigin: true,
        pathRewrite: {
          "^/": ""
        }
      }
    }
  }
};
