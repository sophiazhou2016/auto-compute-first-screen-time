const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: path.resolve(__dirname, '../index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'umd',
        library: 'autoComputeFirstScreenTime'
    },
    mode: process.env.NODE_ENV,
    watch: /development/.test(process.env.NODE_ENV) ? true : false,
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};