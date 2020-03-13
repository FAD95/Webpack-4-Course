const path = require("path");
const MCssEP = require("mini-css-extract-plugin");
const HtmlWP = require('html-webpack-plugin');
module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MCssEP.loader
          }, 
        "css-loader"]
      }
    ]
  },
  plugins:[
    new MCssEP({
      filename: 'css/[name].css'
    }),
    new HtmlWP({
     title:'home'
    })
  ]
};
