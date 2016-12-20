var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css?postcss' },
      { test: /\.scss$/, loader: 'style!css!sass'},
    ]
  },
  postcss: [
    require('autoprefixer')//调用autoprefixer插件
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port:2333,
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  }
}
