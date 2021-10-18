const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const filename = (name) => `[name].[contenthash].${name}`;

const plugins = () => {
  const basePlugins = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`,
    }),
  ];
  return basePlugins;
};

module.exports = {
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  mode: 'development',
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `./js/${filename('js')}`,
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
    ],
  },
};
