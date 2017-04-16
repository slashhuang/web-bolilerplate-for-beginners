/**
 * Created by slashhuang on 16/2/19.
 */
const fs = require('fs');
const webpack = require('webpack');
const path =require('path');

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
               let base = path.basename(absPath,'.js');
               pre[base] = absPath
               return pre
            },{}),{
        common:['react','react-dom']}),
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