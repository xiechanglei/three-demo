const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    entry: {
        app: "./src/index.ts"
    },
    output: {
        filename: '[name]_[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        environment: {
            arrowFunction: false,
        }
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',

            cacheGroups: {
                vendor: {
                    name: 'vendor',

                    priority: 1,

                    test: /node_modules/,

                    minSize: 0,
                    minChunks: 1
                },
                common: {
                    name: 'common',
                    priority: 0,
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    }
};
