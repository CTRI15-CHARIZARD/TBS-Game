import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { Configuration } from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

const config: Configuration & { devServer?: any } = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      template: './index.html',
    }),
    new MiniCssExtractPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        // Any loader-specific options can be added here
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  mode: isProduction ? 'production' : 'development',
  stats: 'minimal',
};

export default config;
