const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['lodash'] // vendor 包含的第三方库
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(), //使用hash作为module的id 两种不同情况测试
    new webpack.optimize.CommonsChunkPlugin({ //提取第三方模块包
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({ //提取webpack的模板代码  官方推荐
      name: 'manifest', 
    }),
     // new webpack.optimize.CommonsChunkPlugin({ 
    //   names: ['vendor', 'manifest'],
   // })
  ],
  output: {
    //filename:'[name].bundle.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};