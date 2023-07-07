import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import CssMinimizerWebpackPlugin from "css-minimizer-webpack-plugin";
import EslintWebpackPlugin from "eslint-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";

const modes = ["development", "production"] as const;

type Mode = typeof modes[number];

function isValidMode(value: string): value is Mode {
  return (modes as ReadonlyArray<string>).includes(value);
}

const mode =
  process.env.REACT_APP_ENV && isValidMode(process.env.REACT_APP_ENV)
    ? process.env.REACT_APP_ENV
    : "production";

function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

function compact<T>(values: Array<T>): Array<NonNullable<T>> {
  return values.filter(isNonNullable);
}

/**
 * style-loader must be fist in the list
 */
const cssLoaders: webpack.RuleSetUse = [
  mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
  "css-loader",
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  },
];

const config: webpack.Configuration = {
  mode,
  entry: {
    bundle: path.resolve(__dirname, "src/index.tsx"),
  },
  output: {
    clean: true,
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: false,
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "build"),
    },
  },
  devtool: mode === "development" ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.scss$/,
        use: [...cssLoaders, "sass-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: mode === "production",
    minimizer: [new CssMinimizerWebpackPlugin(), "..."],
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          chunks: "all",
          name: "vendors",
          priority: -10,
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: "async",
    },
  },
  plugins: compact([
    new EslintWebpackPlugin({
      extensions: ["ts", "tsx"],
      failOnError: mode === "production",
      failOnWarning: mode === "production",
      files: "./src",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
    mode === "production" ? new CleanWebpackPlugin() : null,
    mode === "production" ? new MiniCssExtractPlugin() : null,
    mode === "production"
      ? new CopyWebpackPlugin({
          patterns: [{ from: "public", filter: (path) => !path.endsWith("index.html") }],
        })
      : null,
    mode === "development" ? new ReactRefreshWebpackPlugin({ overlay: true }) : null,
  ]),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  stats: {
    preset: "errors-warnings",
  },
};

export default config;
