const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require("./package.json");

const deps = pkg.dependencies;

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: "\u001b[32m",
  },
};

module.exports = (env) => {
  const isEnvProd = env && env.production;

  return {
    stats,
    entry: path.join(__dirname, "src/index.js"),
    mode: isEnvProd ? "production" : "development",
    devtool: isEnvProd ? "source-map" : "eval",
    target: "web",
    output: {
      publicPath: "auto",
      filename: isEnvProd ? "js/[name].[contenthash:8].js" : "js/[name].js",
      chunkFilename: isEnvProd
        ? "js/[name].[contenthash:8].js"
        : "js/[name].js",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            isEnvProd && MiniCssExtractPlugin.loader,
            "css-loader",
          ].filter(Boolean),
        },
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "hero",
        filename: "remote.js",
        exposes: {
          "./Hero": path.join(__dirname, "./src/App"),
        },
        remotes: {
          // Utilities
          toolbelt: "toolbelt@http://localhost:4010/remote.js",
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      isEnvProd &&
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[contenthash:8].css",
          chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
        }),
      // @ts-ignore
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ].filter(Boolean),

    devServer: {
      stats,
      port: 4001,
      contentBase: path.join(__dirname),
      compress: true,
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  };
};
