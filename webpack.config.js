/**
 * Created by slashhuang on 16/2/19.
 */
const webpack = require('webpack');
const path =require('path');
module.exports = {
    watch:true,
    entry: {
        index:"./src/ES6.js",
        react:"./src/react.js",
        common:['react','react-dom']
        // 如果你要async await Promise的话，取消这行注释
        // ,test:['babel-polyfill',"./src/index.js"]
    },
    devtool:'source-map',
    output: {
        publicPath:'/dist/',
        path: path.join(__dirname,'dist'),
        filename: "[name].js"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks: Infinity,
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel",
                exclude: /node_modules/
            }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
};