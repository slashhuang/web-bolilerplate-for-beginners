/**
 * Created by slashhuang on 16/2/19.
 */
const fs = require('fs');
const webpack = require('webpack');
const path =require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Dir_prefix = path.resolve(__dirname,'src')
module.exports = {
    watch:true,
    entry: Object.assign(fs.readdirSync(Dir_prefix).reduce((pre,cur)=>{
                let absPath = path.resolve(Dir_prefix,cur);
                if(fs.statSync(absPath).isDirectory()){
                    if(fs.readdirSync(absPath).filter(name=>{
                        return name.match('index')
                    }).length>0){
                        pre[cur] = path.resolve(absPath,'index.js');
                    }   
                   return pre;
                }
                if(path.extname(absPath).match('js') && !absPath.match('test')){
                    let base = path.basename(absPath,'.js');
                    pre[base] = absPath
                }
               return pre
            },{}),{
        common:['babel-polyfill','react','react-dom']}),
    devtool:'source-map',
    output: {
        publicPath:'/dist/',
        path: path.join(__dirname,'dist'),
        filename: "[name].js",
        chunkFilename:'[name].js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks: Infinity,
        }),
        new ExtractTextPlugin({
                filename: "[name].css",
                disable: false,
                allChunks: true
            })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:{
                        loader:'css-loader',
                        options: {
                           sourceMap: true
                        }
                    }
                })
            }
        ]
    }
};