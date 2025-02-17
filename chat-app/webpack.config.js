const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "chat",
      filename: "remoteEntry.js",
      exposes: {
        "./ChatApp": "./src/ChatApp",
      },
      shared: {
        react: { singleton: true },
        "react-dom": {
          singleton: true
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  
};
