var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    //配置自动刷新,如果打开会使浏览器刷新而不是热替换
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true
    },
    module: {
        loaders: [
            //转化ES6语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            //解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            //json格式
            {
                test: /\.json&/,
                loader: 'json'
            },
            {
                test: /.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            {
                test: /\.(ttf|eot|svg|woff|woff(2))(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            //解析.scss
            // {
            //     test:/\.scss$/,
            //     loaders:['style','css','sass'],
            //     include:APP_PATH
            // }
            //图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel',
            css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'sass-loader')
        }
    },
    resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    plugins: [
        new ExtractTextPlugin('styles.scss', {
            allChunks: true
        })
    ]
}