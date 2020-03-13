const path = require("path");
const MCssEP = require("mini-css-extract-plugin");
const HtmlWP = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer:{
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MCssEP.loader
          // },
          "style-loader",
        "css-loader"]
      }
    ]
  },
  
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    // new MCssEP({
    //   filename: 'css/[name].css'
    // }),
    new HtmlWP({
     title:'HMR'
    })
  ]
};
