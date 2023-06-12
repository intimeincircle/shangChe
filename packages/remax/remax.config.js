const QiniuCDNPlugin = require('webpack-qiniu-cdn-plugin');
const RemaxMinifyPlugin = require('@remax/plugin-minify')
const less = require('@remax/plugin-less');

const isDev = process.env.NODE_ENV !== "production";
module.exports = {
  one: true,
  plugins: isDev?[less()]: [less(), RemaxMinifyPlugin()],
  pxToRpx: true,
  output: `dist/${process.env.REMAX_PLATFORM}`,
  compressTemplate: true,
  configWebpack({ config, webpack, addCSSRule }) {
    console.log('webpack', webpack);
    // console.log("JSON", JSON.stringify(config))
    // config.devServer.disableHostCheck(true).port(8000);
    addCSSRule({
      name: 'less',
      test: /\.less(\?.*)?$/,
      loader: require.resolve('less-loader'),
      // options,
    });
      if(!isDev  && process.env.REMAX_PLATFORM==='web') {
          //TODO QINIU
      }
  }
};
