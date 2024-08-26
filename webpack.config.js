const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "production",
    entry:'./src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/todoList/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpg|jp?g|gif)$/,
                use: ['file-loader'],
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname,'dist'),
        },
        port:9000,
        open:true,
        compress:true,
    },
}