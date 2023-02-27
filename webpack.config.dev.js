const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: "development",
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      url: require.resolve("url/"),
      os: require.resolve("os-browserify/browser"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: "eval-source-map",
  output: {
    filename: "bundle.min.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  plugins: [
    new NodePolyfillPlugin(),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "src/"),
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    },
    devServer: {
      hot: true,
      compress: true,
      allowedHosts: [
        'tutorgame-4qrru.ondigitalocean.app',
        '104.16.243.78',
        'localhost',
      ],
    },
    resolve: {
      fallback: {
        // "stream": false,
        // "crypto": false,
        // "http": false,
        // "https": false,
        // "url": false,
        // "os": false,
      }
    }
};

// const webpack = require("webpack");
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = {
//   mode: "development",
//   devtool: "eval-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: [/\.vert$/, /\.frag$/],
//         use: "raw-loader"
//       },
//       {
//         test: /\.(gif|png|jpe?g|svg|xml)$/i,
//         use: "file-loader"
//       }
//     ]
//   },
//   plugins: [
//     new CleanWebpackPlugin({
//       root: path.resolve(__dirname, "src/")
//     }),
//     new webpack.DefinePlugin({
//       CANVAS_RENDERER: JSON.stringify(true),
//       WEBGL_RENDERER: JSON.stringify(true)
//     }),
//     new HtmlWebpackPlugin({
//       template: "./index.html"
//     })
//   ]
// };
