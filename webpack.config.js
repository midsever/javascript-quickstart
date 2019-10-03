const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./")
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    compress: true,
    port: 9000,
    inline: true,
    open: true
  },
  plugins: [
    new CopyPlugin([
      { from: 'src', to: 'dist' }
    ]),
  ],
};