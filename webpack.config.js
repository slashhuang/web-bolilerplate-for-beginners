/**
 * Created by slashhuang on 16/2/19.
 */
const fs = require('fs');
const webpack = require('webpack');
const path =require('path');

const Dir_prefix = path.resolve(__dirname,'src')
module.exports = {
    watch:true,
    entry: fs.readdirSync(Dir_prefix).reduce((pre,cur)=>{
                let absPath = path.resolve(Dir_prefix,cur);
                if(fs.statSync(absPath).isDirectory()){
                   return pre;
                }
               let base = path.basename(absPath,'.js');
               pre[base] = absPath
               return pre
            },{}),
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