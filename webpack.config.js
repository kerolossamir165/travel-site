let path = require("path");

module.exports = {
  entry: "./app/assets/scripts/script.js",
  output: {
    path: path.resolve(__dirname, "app/dist/scripts/"),
    filename: "app.js",
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
