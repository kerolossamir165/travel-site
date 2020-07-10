let path = require("path");

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendors: "./app/assets/scripts/Vendors.js",
  },
  output: {
    path: path.resolve(__dirname, "app/dist/scripts/"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
