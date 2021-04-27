const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
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
        name: "toolbelt",
        filename: "remote.js",
        exposes: {
          "./eventbus": path.join(__dirname, "./src/eventbus.js"),
        },
        shared: {
          ...deps,
        },
      }),
    ],

    devServer: {
      stats,
      port: 4010,
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
