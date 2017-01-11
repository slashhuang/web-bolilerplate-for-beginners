/**
 * Created by slashhuang on 16/3/8.
 */

var path =require('path');
module.exports = {
    watch:true,
    entry: {
        example:"./example/example.js",
        test:['babel-polyfill',"./test.js"]
    },
    output: {
        publicPath:'/dist/',
        path: path.join(__dirname,'dist'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {   test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015','stage-0']
                }

            },

        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
};