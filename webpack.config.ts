const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
       {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }, 
    ],
  },
  // devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, 'dist'),
  //     publicPath: '/dist',
  //   },
  //   proxy: {
  //     '/api': 'http://localhost:3000'
  //   }
  // }
}
