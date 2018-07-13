## 0. 目标
    分离css 优化性能
    利用 extract-text-webpack-plugin 插件进行处理

    单独分离压缩 css 
    
## 1. 下载依赖
npm install extract-text-webpack-plugin

 ## 2. src/style.css
    body {
      background: blue;
    }  
    p {
      color:red;
    }

## src/math.js
export function square(x) {
      return x * x;
    }
    export function cube(x) {
      return x * x * x;
    }
## 3. src/index.js

  import _ from 'lodash';
  import module from './another-module'
  import './style.css'

  function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack222'], ' ');
  
    element.onclick = function () {
      import('./math').then(math => {
        alert(math.square(2))
      } )
    }
  
    return element;
  }
  
  document.body.appendChild(component());

## 3. src/another-module.js 
    import _ from 'lodash';
    
    console.log(
      _.join(['Another', 'module', 'loaded!'], ' ')
    );

## 3. webpack.config.js
    const path = require('path');
    const HTMLWebpackPlugin = require('html-webpack-plugin');
    const webpack = require('webpack');
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    var OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')

    module.exports = {
      entry: {
        index: './src/index.js',
        vendor: ['lodash'] // vendor 包含的第三方库
      },
      plugins: [
        new OptimizeCssPlugin({
      cssProcessorOptions: {
        safe: true
      }
     }),
        new HTMLWebpackPlugin({
          title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin(), //使用hash作为module的id
        new webpack.optimize.CommonsChunkPlugin({ //提取第三方模块包
          name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({ //提取webpack的模板代码
          name: 'manifest', 
        }),
        // 或者
       // new ExtractTextPlugin("src/styles.css"),
          // new webpack.optimize.CommonsChunkPlugin({ 
        //   names: ['vendor', 'manifest'],
        // })

         // new ExtractTextPlugin({
           //  filename: '[name].[contenthash].css'
        //  }),
      ],
      module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 将js中的css动态插入到DOM中
          'css-loader' // 将css加载到打包的js中 
        ]
      },
     
     //{
     // test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        // use: ["css-loader"]
      //})
     // },   
     //  只需要使用css-loader 将css 加载到打包的js中

    ]
    },
      output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
      }
    };

## 4. 打包测试
    更改css 进行打包测试

    hash:7         mad5 截取 随机生成 的 7位
    contenthash    根据内容 不同产生不同hash 
    chunkhash      根据chunk 产生不同 产生不同 hash 
