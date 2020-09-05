const { merge } = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.tsx',
  ],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  devServer: {
    hot: true,
    proxy: {
      '/graphql': 'http://localhost:4000',
    },
    historyApiFallback: true,
    inline: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
})
