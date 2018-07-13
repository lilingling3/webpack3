const webpack = require('webpack')
const express = require('express')
const wdm = require('webpack-dev-middleware')
const whmr = require('webpack-hot-middleware')
const opn = require('opn')
const webpackConfig = require('./webpack.config')

const compiler = webpack(webpackConfig)
const app = express()

const devMiddleware = wdm(compiler, {

})
app.use(devMiddleware)

const hotMiddleware = whmr(compiler, {

})
app.use(hotMiddleware)

//const staticMiddleware = express.static('./static')
//app.use('/static', staticMiddleware)

const port = '4002'
app.listen(port)

opn(`http://localhost:${port}`)