## css 问题  // loader 配置
1，less 文件打包和分离
npm install --save-dev less less-loader  extract-text-webpack-plugin 
{
  test: /\.less$/,
  use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      , {
          loader: "less-loader" // compiles Less to CSS
      }]
}
{
    test: /\.less$/,
    use: extractTextPlugin.extract({
        use: [{
            loader: "css-loader"
        }, {
            loader: "less-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
    })
 }

 2，sass 文件 打包 分离
 npm install --save-dev node-sass sass-loader 

{
    test: /\.scss$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "sass-loader" // compiles Sass to CSS
    }]
}

{
    test: /\.scss$/,
    use: extractTextPlugin.extract({
        use: [{
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
    })
}

3，自动处理css3 属性前缀  postcss 平台
npm install --save-dev postcss-loader autoprefixer

-webkit-transform: rotate(45deg);
        transform: rotate(45deg);

postcss.config.js

    module.exports = {
        plugins: [
            require('autoprefixer')
        ]
    }

{
    test: /\.css$/,
    use: [
        {
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: {
                modules: true
            }
        }, {
            loader: "postcss-loader"
        }
    ]
}


4，变量设置
"scripts": {
    "server": "webpack-dev-server --open",
    "dev":"set type=dev&webapck",
    "build": "set type=build&webpack"
  }
if(process.env.type== "build"){
       var website={publicPath:"http://192.168.0.104:1717/" }
       }else{
      var website={publicPath:"http://cdn.jspang.com/"}
}

5, rules  => include 、 exclude 可以提升打包速度

6，resolve配置 Webpack 如何寻找模块所对应的文件
	alias配置项通过别名来把原导入路径映射成一个新的导入路径
	extensions  在导入语句没带文件后缀时, 自动查找的后缀

resolve: {
    extensions: ['.js', '.vue','jsx'],
    alias: {
      '@': resolve('src/components'),
      '~': resolve('src/common')
    }
}