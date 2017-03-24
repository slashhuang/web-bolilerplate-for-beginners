/**
 * Created by slashhuang on 16/2/19.
 */

var path =require('path');
module.exports = {
    watch:true,
    entry: {
        index:"./src/index.js",
        react:"./src/react.js"
        // 如果你要async await Promise的话，取消这行注释
        // ,test:['babel-polyfill',"./src/index.js"]
    },
    devtool:'source-map',
    output: {
        publicPath:'/dist/',
        path: path.join(__dirname,'dist'),
        filename: "[name].js"
    },
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