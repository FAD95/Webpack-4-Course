const path = require("path");
const MCssEP = require("mini-css-extract-plugin");
const HtmlWP = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 90000
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWP({
      title: "HMR",
      template: path.resolve(__dirname, "index.html")
    })
  ]
};
