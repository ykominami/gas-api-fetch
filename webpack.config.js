const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  entry: './server/src/index.ts',
  mode: "development",
  devtool: false,

  output: {
    path: path.join(__dirname, "server", "dist"),
    filename: 'bundle.js',
  },

  resolve: {
    modules: [
      path.resolve('./server/src'),
      "node_modules",
    ],
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      }
    ],
  },

  plugins: [
    new GasPlugin({
      autoGlobalExportsFiles: ['**/*.ts'],
    }),
  ],
};